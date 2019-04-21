'use strict';

const _ = require('lodash');

class Users {

  constructor() {
    this.users = [];
  }

  addUser(id, name, room, inGame = false, gameId = '') {
    this.users.push({ id, name, room, inGame, gameId });
    return { id, name, room, inGame, gameId };
  }

  getUser(id) {
    return _.first(this.users.filter(u => u.id === id));
  }

  getPair() {
    if (this.users.length >= 2) {
      return this.users.slice(0, 2).map(u => u.id);
    }
    return [];
  }

  getUserList(room) {
    return this.users.filter(u => u.room === room);
  }

  removeUser(id){
    const user = this.getUser(id);

    if (user) this.users = this.users.filter(u => u.id !== id);
    return user;
  }
}

module.exports = {
  Users
};
