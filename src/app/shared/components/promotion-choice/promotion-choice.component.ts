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

  @Input()
  top: string;

  @Output()
  promotion = new EventEmitter<Role>();

  constructor() { }

  ngOnInit() {
  }

  promotionHandler(role: Role) {
    this.promotion.emit(role);
  }

}
