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
const users = new Users();

io.on(socketEvents.socketEvents_I.connection, socket => {
  console.log('new user connected');

  socket.on(socketEvents.socketEvents_I.disconnect, () => {
    console.log('user is disconnected');
  });

  socket.on(socketEvents.socketEvents_I.createGame, (user) => {
    users.removeUser(socket.id);
    users.addUser(socket.id, user.username, user.room);

    /* socket.emit(socketEvents.socketEvents_O.gameCreated, {
      message: 'game was created/ server.js'
    }); */
  });
});

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Chess-app server is up on port ${port}`);

  /* setInterval(() => {
    const pair = users.getPair();
    if (pair && pair.length === 2) {
      const user1 = users.getUser(pair[0]);
      const user2 = users.getUser(pair[1]);
      if (!user1.inGame && !user2.inGame) {
        const gameId = uuidv4();
        pair.forEach(element => {
          io.sockets.connected[element].emit(socketEvents.socketEvents_O.gameCreated, { gameId });
        });
        console.log(gameId);
      }
    }
  }, 2000); */
});
