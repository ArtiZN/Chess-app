'use strict';

const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const socketEvents = require('./app/constants/socketIO-events');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on(socketEvents.socketEvents_I.connection, socket => {
  console.log('new user connected');

  socket.on(socketEvents.socketEvents_I.disconnect, () => {
    console.log('use is disconnected');
  });

  socket.on(socketEvents.createGame, () => {
    socket.emit(socketEvents.socketEvents_O.gameCreated, {
      message: 'game was created/ server.js'
    });
  });
});

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

let port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Chess-app server is up on port ${port}`);
});
