import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class DropdownListComponent implements OnInit {

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
