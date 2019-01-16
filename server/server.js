'use strict';

const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on('connection', socket => {
  console.log('new user connected');

  socket.on('disconnect', () => {
    console.log('use is disconnected');
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
