import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
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
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PostsComponent {
  constructor(private usersService: UsersService, public dialog: MatDialog) {}

  columnsToDisplay: string[] = [
    'Nombre',
    'Username',
    'Dirección',
    'Correo',
    'Phone Number',
  ];
  columnsToDisplayWithExpand: string[] = [...this.columnsToDisplay, 'expand'];
  expandedElement!: User | null;
  title!: string;
  body!: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  users: any[] = [];

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  openDialog(userId: number): void {
    const dialogRef = this.dialog.open(CreatePostDialogComponent, {
      data: { title: this.title, body: this.body, userId: userId },
    });

    dialogRef.afterClosed().subscribe((result) => {
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
    @Inject(MAT_DIALOG_DATA) public data: Post
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPost() {
    this.postsService
      .addPost({
        title: this.data.title,
        body: this.data.body,
        userId: this.data.userId,
      })
      .subscribe((response) => {
        console.log(`Post Saved as ${response}`);
      });
    this.onNoClick();
  }
}
