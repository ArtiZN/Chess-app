import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {

  @Input()
  items: any;

  @Input()
  markerColor: string;

  @Input()
  menuTitle: string;

  @Input()
  isCollapsed: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
