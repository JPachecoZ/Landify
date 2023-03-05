import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
