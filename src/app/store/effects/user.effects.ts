import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";

import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import * as actions from '../actions'
import { UserService } from "src/app/services/user.service";
import { CargarUserSuccess, CargarUserFail } from "../actions";

@Injectable()
export class UserEffects {


    constructor(
        private actions$: Actions,
        private userSerive: UserService
    ) { }

    @Effect()
    private cargarUsers$ = this.actions$
        .pipe(
            ofType(actions.CARGAR_USUARIO),
            switchMap( action => this.userSerive.getUser((<any>action).id)
                .pipe(
                    map(user => new CargarUserSuccess(user)),
                    catchError(error => of(new CargarUserFail(error)))
                )
            )
        )

}