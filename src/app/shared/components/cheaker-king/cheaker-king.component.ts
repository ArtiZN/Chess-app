import { Component, OnInit, Input } from '@angular/core';
import { King } from '@shared/classes/piece';

@Component({
  selector: 'app-cheaker-king',
  templateUrl: './cheaker-king.component.html',
  styleUrls: ['./cheaker-king.component.scss']
})
export class CheakerKingComponent implements OnInit {

  @Input() king: King;

  constructor() { }

  ngOnInit() {
  }

}
