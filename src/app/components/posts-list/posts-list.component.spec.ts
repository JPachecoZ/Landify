import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListComponent } from './posts-list.component';
import { PostsService } from '../../services/posts.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let postsService: PostsService;
  let userId: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsListComponent],
      providers: [PostsService, HttpClient, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    postsService = TestBed.inject(PostsService);
    userId = 1;
  });

  describe('given a user with posts', () => {
    beforeEach(() => {
      spyOn(postsService, 'getPostsFromUserId').and.returnValue(
        of([
          {
            userId: 1,
            id: 1,
            title: 'First Post',
            body: 'This is the first post',
          },
          {
            userId: 1,
            id: 2,
            title: 'Second Post',
            body: 'This is the second post',
          },
        ])
      );
      spyOn(postsService, 'getLocalPostsFromUserId').and.returnValue(of([]));
      fixture.detectChanges();
    });
    it('should display the posts', () => {
      const postTitles = fixture.nativeElement.querySelectorAll('.posts-title');
      expect(postTitles.length).toBe(2);
      expect(postTitles[0].textContent).toContain('First Post');
      expect(postTitles[1].textContent).toContain('Second Post');
    });
    it('should emit an event to open the create post dialog when user clicks the button', () => {
      spyOn(component.openDialogEvent, 'emit');
      const button = fixture.nativeElement.querySelector('.create-post-button');
      button.click();
      expect(component.openDialogEvent.emit).toHaveBeenCalled();
    });
  });

  describe('Given a user with no posts', () => {
    beforeEach(() => {
      spyOn(postsService, 'getPostsFromUserId').and.returnValue(of([]));
      spyOn(postsService, 'getLocalPostsFromUserId').and.returnValue(of([]));
      fixture.detectChanges();
    });

    it('should display a message indicating no posts', () => {
      const message = fixture.nativeElement.querySelector('.no-posts-title');
      expect(message.textContent).toContain('Aún no tienes posts');
    });

    it('should display a button to create a post', () => {
      const button = fixture.nativeElement.querySelector('.create-post-button');
      expect(button).toBeTruthy();
      expect(button.textContent).toContain('Crear un post');
    });

    it('should emit an event to open the create post dialog when user clicks the button', () => {
      spyOn(component.openDialogEvent, 'emit');
      const button = fixture.nativeElement.querySelector('.create-post-button');
      button.click();
      expect(component.openDialogEvent.emit).toHaveBeenCalled();
    });
  });

  describe('Given the user has local posts', () => {
    beforeEach(() => {
      spyOn(postsService, 'getPostsFromUserId').and.returnValue(
        of([
          {
            userId: 1,
            id: 1,
            title: 'First Post',
            body: 'This is the first post',
          },
          {
            userId: 1,
            id: 2,
            title: 'Second Post',
            body: 'This is the second post',
          },
        ])
      );

      spyOn(postsService, 'getLocalPostsFromUserId').and.returnValue(
        of([
          {
            userId: 1,
            title: 'Local Post',
            body: 'This is a local post',
          },
        ])
      );
      fixture.detectChanges();
    });

    it('should display the local posts first', () => {
      const postTitles = fixture.nativeElement.querySelectorAll('.posts-title');
      expect(postTitles.length).toBe(3);
      expect(postTitles[0].textContent).toContain('Local Post');
    });
  });
});
