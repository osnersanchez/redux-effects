import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarUser } from 'src/app/store/actions';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  public user:User = null;
  public loading = false;
  public error = null;

  constructor(
    private activateRoute: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( params =>{
      this.store.dispatch(new CargarUser(params.id))
    })

    this.store.select('user').subscribe( user =>{
      console.log(user);
      
      this.user = user.user;
      this.loading = user.loading;
      this.error = user.error;
    })
  }

}
