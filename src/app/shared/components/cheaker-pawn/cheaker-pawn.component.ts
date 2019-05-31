import { Component, OnInit, Input } from '@angular/core';
import { Pawn } from '@shared/classes/piece';

@Component({
  selector: 'app-cheaker-pawn',
  templateUrl: './cheaker-pawn.component.html',
  styleUrls: ['./cheaker-pawn.component.scss']
})
export class CheakerPawnComponent implements OnInit {

  @Input() pawn: Pawn;

  constructor() { }

  ngOnInit() {
  }

}
