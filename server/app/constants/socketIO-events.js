'use strict';

const socketEvents_I = Object.freeze({
  connection: 'connection',
  disconnect: 'disconnect',
  createGame: 'createGame',
  endGame: 'endGame',
  makeMove: 'makeMove'
});

const socketEvents_O = Object.freeze({
  gameCreated: 'gameCreated'
});

module.exports = {
  socketEvents_I,
  socketEvents_O
};
