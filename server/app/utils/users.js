'use strict';

const _ = require('lodash');

class Users {

  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    this.users.push({ id, name, room });
    return { id, name, room };
  }

  getUser(id) {
    return _.first(this.users.filter(u => u.id === id));
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
