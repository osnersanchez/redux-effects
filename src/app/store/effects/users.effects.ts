import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import * as actions from '../actions'
import { UserService } from "src/app/services/user.service";
import { CargarUsersSuccess, CargarUsersFail } from "../actions";

@Injectable()
export class UsersEffects {


    constructor(
        private actions$: Actions,
        private userSerive: UserService
    ) { }

    @Effect()
    private cargarUsers$ = this.actions$
        .pipe(
            ofType(actions.CARGAR_USUARIOS),
            switchMap(() => this.userSerive.getUsers()
                .pipe(
                    map(users => new CargarUsersSuccess(users)),
                    catchError(error => of(new CargarUsersFail(error)))
                )
            )
        )

}