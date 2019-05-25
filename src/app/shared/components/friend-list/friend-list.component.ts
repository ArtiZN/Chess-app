import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  friends = [{
    status: 'online',
    name: 'friend 1'
  }, {
    status: 'online',
    name: 'friend 2'
  }, {
    status: 'online',
    name: 'friend 3'
  }, {
    status: 'offline',
    name: 'friend 4'
  }, {
    status: 'online',
    name: 'friend 5'
  }, {
    status: 'offline',
    name: 'friend 6'
  }, {
    status: 'offline',
    name: 'friend 7'
  }];

  onlineCollapsed = false;
  offlineCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  onlineClick() {
    console.log('online click');
    this.onlineCollapsed = !this.onlineCollapsed;
  }

  offlineClick() {
    this.offlineCollapsed = !this.offlineCollapsed;
  }
}
