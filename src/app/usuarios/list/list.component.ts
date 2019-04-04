import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { CargarUsers } from 'src/app/store/actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  public loading = false;
  public error = null;
  public userList: User[] = [];

  constructor(
    // private userService: UserService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('users')
      .subscribe(list => {
        console.log(list);
        this.userList = list.users;
        this.loading = list.loading;
        this.error = list.error;
      })
    this.store.dispatch(new CargarUsers());
  }

}
