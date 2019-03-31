import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheakersGameBoardComponent } from './cheakers-game-board.component';

describe('CheakersGameBoardComponent', () => {
  let component: CheakersGameBoardComponent;
  let fixture: ComponentFixture<CheakersGameBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheakersGameBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheakersGameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
