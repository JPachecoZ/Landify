// Imports necesarios para las pruebas
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { PostsComponent, CreatePostDialogComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let usersService: UsersService;
  let postsService: PostsService;
  let user: any;

  beforeEach(async () => {
    // Configuración básica para las pruebas
    await TestBed.configureTestingModule({
      declarations: [PostsComponent],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatTableModule,
        MatIconModule,
      ],
      providers: [
        UsersService,
        PostsService,
        HttpClient,
        HttpHandler,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
    postsService = TestBed.inject(PostsService);
    user = {
      Nombre: 'John Doe',
      Username: 'johndoe',
      Dirección: '123 Main St',
      Correo: 'johndoe@example.com',
      'Phone Number': '123-456-7890',
      Posts: [],
      id: 1,
    };
  });

  describe('given a user', () => {
    beforeEach(() => {
      spyOn(usersService, 'getAllUsers').and.returnValue(of([user]));
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call getAllUsers on initialization', () => {
      expect(usersService.getAllUsers).toHaveBeenCalled();
      console.log(component.users);
      expect(component.users).toEqual([user]);
    });

    it('should expand element on row click', () => {
      component.expandedElement = null;
      const row = fixture.nativeElement.querySelector('.example-element-row');
      row.click();
      expect(component.expandedElement).toEqual(user);
    });

    it('should collapse element on row click if already expanded', () => {
      component.expandedElement = user;
      const row = fixture.nativeElement.querySelector('.example-element-row');
      row.click();
      expect(component.expandedElement).toEqual(null);
    });

    it('should expand element on button click', () => {
      component.expandedElement = null;
      const button = fixture.nativeElement.querySelector('button');
      button.click();
      expect(component.expandedElement).toEqual(user);
    });

    it('should collapse element on button click if already expanded', () => {
      component.expandedElement = user;
      const button = fixture.nativeElement.querySelector('button');
      button.click();
      expect(component.expandedElement).toEqual(null);
    });
  });
});
