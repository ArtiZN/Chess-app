import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostSuccessfullGamesComponent } from './most-successfull-games.component';

describe('MostSuccessfullGamesComponent', () => {
  let component: MostSuccessfullGamesComponent;
  let fixture: ComponentFixture<MostSuccessfullGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostSuccessfullGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostSuccessfullGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
