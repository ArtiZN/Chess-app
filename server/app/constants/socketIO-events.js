'use strict';

const socketEvents = Object.freeze({
  connection: 'connection',
  disconnect: 'disconnect',
  createGame: 'createGame',
  endGame: 'endGame',
  makeMove: 'makeMove'
});

module.exports = {
  socketEvents
};
