import { TestBed } from '@angular/core/testing';

import { CheakersGameService } from './cheakers-game.service';

describe('CheakersGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheakersGameService = TestBed.get(CheakersGameService);
    expect(service).toBeTruthy();
  });
});
