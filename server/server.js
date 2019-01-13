'use strict';

const express = require('express');
const http = require('http');
const path = require('path');

let app = express();
let server = http.createServer(app);

app.use(express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

let port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Chess-app server is up on port ${port}`);
});
