import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  public userList: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(list => {
        console.log(list);
        this.userList = list;
      })
  }

}
