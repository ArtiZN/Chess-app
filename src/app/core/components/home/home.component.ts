import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  onlineFriends = [{
    status: 'online',
    title: 'friend 1'
  }, {
    status: 'online',
    title: 'friend 2'
  }, {
    status: 'online',
    title: 'friend 3'
  }, {
    status: 'online',
    title: 'friend 5'
  }];

  offlineFriends = [{
    status: 'offline',
    title: 'friend 7'
  }, {
    status: 'offline',
    title: 'friend 8'
  }, {
    status: 'offline',
    title: 'friend 9'
  }, {
    status: 'offline',
    title: 'friend 15'
  }];

  constructor() { }

  ngOnInit() {
  }

}
