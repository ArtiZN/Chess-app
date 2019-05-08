'use strict';

const express = require('express');
const socketIO = require('socket.io');
const uuidv4 = require('uuid/v4');
const http = require('http');
const path = require('path');

const socketEvents = require('./app/constants/socketIO-events');
const { Users } = require('./app/utils/users');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.PORT || 3000;
const users = new Users();

io.on(socketEvents.socketEvents_I.connection, socket => {
  console.log('new user connected');

  socket.on(socketEvents.socketEvents_I.disconnect, () => {
    const user = users.removeUser(socket.id);
    if (user) console.log('user is disconnected');
  });

  socket.on(socketEvents.socketEvents_I.createGame, user => {
    users.removeUser(socket.id);
    users.addUser(socket.id, user.username, user.room);
  });

  socket.on(socketEvents.socketEvents_I.makeMove, move => {
    console.log('Move from client ', move);
    if (move.room)
      socket.to(move.room).emit(socketEvents.socketEvents_O.moveMade, move);
    else
      console.log('no room provided');
  });
});

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

server.listen(port, () => {
  console.log(`Chess-app server is up on port ${port}`);

  setInterval(() => {
    const pair = users.getPair();
    if (pair && pair.length === 2) {
      const user1 = users.getUser(pair[0]);
      const user2 = users.getUser(pair[1]);
      if (!user1.inGame && !user2.inGame) {
        const gameID = uuidv4();
        pair.forEach((socketID) => {
          io.sockets.connected[socketID].join(gameID);
          users.updateUser(socketID, { inGame: true, gameID });
        });
        pair.forEach((socketID, index) => {
          io.to(socketID).emit(socketEvents.socketEvents_O.gameCreated, { gameID, orientation: index == 0 ? 'white' : 'black' });
        });
      }
    }
  }, 2000);
});
