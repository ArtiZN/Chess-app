import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-icon',
  templateUrl: './avatar-icon.component.html',
  styleUrls: ['./avatar-icon.component.css']
})
export class AvatarIconComponent implements OnInit {

  @Input()
  src = '';

  constructor() { }

  ngOnInit() {
  }

}
