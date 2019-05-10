import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promotion-choice',
  templateUrl: './promotion-choice.component.html',
  styleUrls: ['./promotion-choice.component.css']
})
export class PromotionChoiceComponent implements OnInit {

  @Input()
  top: string;

  constructor() { }

  ngOnInit() {
  }

}
