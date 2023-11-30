import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { User } from './models/user';

describe('UserService', () => {
  let service: UserService<User>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
