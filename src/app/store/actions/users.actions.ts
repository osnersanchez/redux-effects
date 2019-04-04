import { Action } from '@ngrx/store'
import { User } from 'src/app/models/user.model';

export const CARGAR_USUARIOS = '[Users] Cargar Usuarios'
export const CARGAR_USUARIOS_FAIL = '[Users] Cargar Usuarios FAIL'
export const CARGAR_USUARIOS_SUCCES = '[Users] Cargar Usuarios SUCCESS'

export class CargarUsers implements Action {
    readonly type: string = CARGAR_USUARIOS;
}

export class CargarUsersFail implements Action {
    readonly type: string = CARGAR_USUARIOS_FAIL;
    constructor(public payload: any) { }
}

export class CargarUsersSuccess implements Action {
    readonly type: string = CARGAR_USUARIOS_SUCCES;
    constructor(public users: User[]) { }
}

export type usersActions = CargarUsers |
                            CargarUsersFail |
                            CargarUsersSuccess;