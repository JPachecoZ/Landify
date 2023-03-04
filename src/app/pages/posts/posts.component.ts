import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { PostData } from 'src/app/models/post-data.model';


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
  description!: string
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
    private usersService: UsersService
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

  openDialog(): void {
    const dialogRef = this.dialog.open(CreatePostDialogComponent, {
      data: {title: this.title, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.description = result;
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
    @Inject(MAT_DIALOG_DATA) public data: PostData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
