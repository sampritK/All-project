import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { resolverGuard } from './resolver.guard';

describe('resolverGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => resolverGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
