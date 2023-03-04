import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { PostsService } from 'src/app/services/posts.service';
import { User } from 'src/app/models/user.model';
import { Post } from 'src/app/models/post.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PostsComponent {
  columnsToDisplay: string[] = ['Nombre', 'Username', 'Dirección', 'Correo', 'Phone Number'];
  columnsToDisplayWithExpand: string[] = [...this.columnsToDisplay, 'expand'];
  expandedElement!: User | null
  title!: string
  body!: string
  users: User[] = [
    {
      'Nombre': "",
      'Username': "",
      'Dirección': "",
      'Correo': "",
      'Phone Number': "",
      'Posts': [],
      id: 0,
    }
  ]

  constructor(
    public dialog: MatDialog,
    private usersService: UsersService,
  ){ }

  ngOnInit(): void {
    this.usersService.getAllUsers()
    .subscribe((data) =>{
      this.users = data.map(element => {
        return {
          id: element.id,
          'Nombre': element.name,
          'Username': element.username,
          'Dirección': element.address.street+', '+element.address.suite+', '+element.address.city,
          'Correo': element.email,
          'Phone Number': element.phone,
          'Posts': [],
        }
      })
    }
    )
  }

  openDialog(userId: number): void {
    const dialogRef = this.dialog.open(CreatePostDialogComponent, {
      data: {title: this.title, body: this.body, userId: userId},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.body = result;
    });
  }
}

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.html',
  styleUrls: ['./create-post-dialog.sass'],
})

export class CreatePostDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreatePostDialogComponent>,
    private postsService: PostsService,
    @Inject(MAT_DIALOG_DATA) public data: Post,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPost(){
    this.postsService.addPost({title: this.data.title, body: this.data.body, userId: this.data.userId})
    .subscribe((response) =>{
      console.log(`Post Saved as ${response}`)
    })
    this.onNoClick()
  }
}
