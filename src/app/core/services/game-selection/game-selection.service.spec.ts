import { TestBed } from '@angular/core/testing';

import { GameSelectionService } from './game-selection.service';

describe('GameSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameSelectionService = TestBed.get(GameSelectionService);
    expect(service).toBeTruthy();
  });
});
