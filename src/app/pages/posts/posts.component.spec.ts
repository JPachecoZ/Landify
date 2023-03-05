// Imports necesarios para las pruebas
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { PostsComponent, CreatePostDialogComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let component2: CreatePostDialogComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let fixture2: ComponentFixture<CreatePostDialogComponent>;
  let usersService: UsersService;
  let postsService: PostsService;
  let user: any;

  beforeEach(async () => {
    // Configuración básica para las pruebas
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule
      ],
      providers: [ UsersService, PostsService, HttpClient, HttpHandler,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();

    user = {
      'Nombre': 'John Doe',
      'Username': 'johndoe',
      'Dirección': '123 Main St',
      'Correo': 'johndoe@example.com',
      'Phone Number': '123-456-7890',
      'Posts': [],
      id: 1,
    }
    // Inicialización de los servicios y el componente
    usersService = TestBed.inject(UsersService)
    postsService = TestBed.inject(PostsService)
    fixture = TestBed.createComponent(PostsComponent);
    fixture2 = TestBed.createComponent(CreatePostDialogComponent);
    component = fixture.componentInstance;
    component2 = fixture2.componentInstance;
    // usersService.getAllUsers.and.returnValue(of([user]));
    // fixture.detectChanges();
  });

  beforeEach(() => {
    spyOn(usersService, 'getAllUsers').and.returnValue(of([user]))
  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllUsers on initialization', () => {
    expect(usersService.getAllUsers).toHaveBeenCalled();
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
    component.expandedElement=user;
    const button =fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.expandedElement).toEqual(null);
  });

  // it('should call addPost on form submission', () => {
  //   const form = fixture.nativeElement.querySelector('form');
  //   spyOn(component2.dialogRef, 'close');
  //   spyOn(component, 'getAllPosts');
  //   component2.postForm.setValue({
  //     userId: 1,
  //     title: 'Test post',
  //     body: 'This is a test post'
  //   });

  //   form.dispatchEvent(new Event('submit'));
  //   expect(postsService.addPost).toHaveBeenCalledWith({
  //     userId: 1,
  //     title: 'Test post',
  //     body: 'This is a test post'
  //   });
  //   expect(component2.dialogRef.close).toHaveBeenCalled();
  //   expect(component.getAllPosts).toHaveBeenCalled();
});

// afterEach(() => {
// // Verificación de que no quedaron observables pendientes
//   expect(component['subscriptions'].closed).toBe(true);
// });
// });