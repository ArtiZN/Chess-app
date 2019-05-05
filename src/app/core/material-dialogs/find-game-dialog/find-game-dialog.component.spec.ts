import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGameDialogComponent } from './find-game-dialog.component';

describe('FindGameDialogComponent', () => {
  let component: FindGameDialogComponent;
  let fixture: ComponentFixture<FindGameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindGameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindGameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
