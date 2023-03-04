import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';

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
}
