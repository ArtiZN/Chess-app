import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheakerPawnComponent } from './cheaker-pawn.component';

describe('CheakerPawnComponent', () => {
  let component: CheakerPawnComponent;
  let fixture: ComponentFixture<CheakerPawnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheakerPawnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheakerPawnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
