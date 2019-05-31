import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessgroundStaticComponent } from './chessground-static.component';

describe('ChessgroundStaticComponent', () => {
  let component: ChessgroundStaticComponent;
  let fixture: ComponentFixture<ChessgroundStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessgroundStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessgroundStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
