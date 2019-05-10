import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-promotion-choice',
  templateUrl: './promotion-choice.component.html',
  styleUrls: ['./promotion-choice.component.css']
})
export class PromotionChoiceComponent implements OnInit {

  @Input()
  top: string;

  @Output()
  promotion = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  promotionHandler(type) {
    this.promotion.emit(type);
  }

}
