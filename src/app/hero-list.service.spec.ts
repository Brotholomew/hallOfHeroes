import { TestBed } from '@angular/core/testing';

import { HeroListService } from './hero-list.service';

describe('HeroListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroListService = TestBed.get(HeroListService);
    expect(service).toBeTruthy();
  });
});
