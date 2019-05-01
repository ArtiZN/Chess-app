import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FideLeaderboardComponent } from './fide-leaderboard.component';

describe('FideLeaderboardComponent', () => {
  let component: FideLeaderboardComponent;
  let fixture: ComponentFixture<FideLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FideLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FideLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
