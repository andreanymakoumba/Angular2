import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent  implements OnInit{

  users: User[];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => this.users = data);
  }

  
}
