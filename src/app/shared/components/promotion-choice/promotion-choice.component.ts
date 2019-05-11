import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Role } from 'chessground/types';

@Component({
  selector: 'app-promotion-choice',
  templateUrl: './promotion-choice.component.html',
  styleUrls: ['./promotion-choice.component.css']
})
export class PromotionChoiceComponent implements OnInit {

  promotions = [{
    role: 'knight',
    whiteClass: 'promotion-choice-wN',
    blackClass: 'promotion-choice-bN'
  }, {
    role: 'bishop',
    whiteClass: 'promotion-choice-wB',
    blackClass: 'promotion-choice-bB'
  }, {
    role: 'rook',
    whiteClass: 'promotion-choice-wR',
    blackClass: 'promotion-choice-bR'
  }, {
    role: 'queen',
    whiteClass: 'promotion-choice-wQ',
    blackClass: 'promotion-choice-bQ'
  }];

  @Input()
  top: string;

  @Input()
  color: string;

  @Input()
  column: number;

  @Output()
  promotion = new EventEmitter<Role>();

  constructor() { }

  ngOnInit() {
  }

  promotionHandler(role: Role) {
    this.promotion.emit(role);
  }

}
