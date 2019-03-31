import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheakerKingComponent } from './cheaker-king.component';

describe('CheakerKingComponent', () => {
  let component: CheakerKingComponent;
  let fixture: ComponentFixture<CheakerKingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheakerKingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheakerKingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
