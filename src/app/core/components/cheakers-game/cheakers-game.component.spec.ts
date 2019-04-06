import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheakersGameComponent } from './cheakers-game.component';

describe('CheakersGameComponent', () => {
  let component: CheakersGameComponent;
  let fixture: ComponentFixture<CheakersGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheakersGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheakersGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
