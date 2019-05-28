import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class DropdownListComponent implements OnInit {

  // friends = [{
  //   status: 'offline',
  //   name: 'friend 4'
  // }, {
  //   status: 'online',
  //   name: 'friend 1'
  // }, {
  //   status: 'online',
  //   name: 'friend 2'
  // }, {
  //   status: 'online',
  //   name: 'friend 3'
  // }, {
  //   status: 'online',
  //   name: 'friend 5'
  // }, {
  //   status: 'offline',
  //   name: 'friend 6'
  // }, {
  //   status: 'offline',
  //   name: 'friend 7'
  // }];
  @Input()
  items: any;

  @Input()
  markerColor: any;

  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
