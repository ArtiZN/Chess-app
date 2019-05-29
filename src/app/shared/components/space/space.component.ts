import { Component, OnInit, Input } from '@angular/core';

import { CheakersGameService } from '@core/services/cheakers-game/cheakers-game.service';
import { Space } from '@shared/classes/space';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  @Input() space: Space;

  constructor(public gameService: CheakersGameService) { }

  ngOnInit() {
  }

}
