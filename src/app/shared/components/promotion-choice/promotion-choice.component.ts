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
  styleUrls: ['./promotion-choice.component.scss']
})
export class PromotionChoiceComponent implements OnInit {

  promotions = [{
    role: 'knight',
    mark: 'N'
  }, {
    role: 'bishop',
    mark: 'B'
  }, {
    role: 'rook',
    mark: 'R'
  }, {
    role: 'queen',
    mark: 'Q'
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
