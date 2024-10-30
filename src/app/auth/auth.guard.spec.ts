import { AuthGuard } from './auth.guard';
import { TestBed } from '@angular/core/testing';

describe('authGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(AuthGuard).toBeTruthy();
  });
});
