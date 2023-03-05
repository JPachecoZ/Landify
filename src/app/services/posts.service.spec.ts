import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { UsersService } from './users.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClient, HttpHandler ]
    });
    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
