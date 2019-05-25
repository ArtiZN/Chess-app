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
    status: 'offline',
    name: 'friend 3'
  }, {
    status: 'offline',
    name: 'friend 4'
  }];

  constructor() { }

  ngOnInit() {
  }
}
