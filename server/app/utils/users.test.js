'use strict';

const expect = require('expect');

const { Users } = require('./users');

describe('Users Class Testing', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'room1'
        }, {
            id: '2',
            name: 'Jen',
            room: 'room1'
        }, {
            id: '3',
            name: 'Julie',
            room: 'room3'
        }];
    });

    it('should add new user', () => {
        const users = new Users();
        const user = {
          id: '123',
          name: 'name',
          room: 'fans'
        };

        const res = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([ res ]);
    });

    it('should return names for room1', () => {
        const userList = users.getUserList('room1');
        expect(userList).toEqual(users.users.slice(0, 2));
    });

    it('should return names for room3', () => {
        const userList = users.getUserList('room3');
        expect(userList).toEqual(users.users.slice(2, 3));
    });

    it('should find user', () => {
        const userId = '2';
        const user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        const userId = '12';
        const user = users.getUser(userId);
        expect(user).toBe(undefined);
    });

    it('should remove a user', () => {
        const userId = '1';
        const user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        const userId = '111';
        const user = users.removeUser(userId);
        expect(user).toBe(undefined);
        expect(users.users.length).toBe(3);
    });
});
