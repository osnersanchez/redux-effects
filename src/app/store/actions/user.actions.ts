import { Action } from '@ngrx/store'
import { User } from 'src/app/models/user.model';

export const CARGAR_USUARIO = '[User] Cargar Usuario'
export const CARGAR_USUARIO_FAIL = '[User] Cargar Usuario FAIL'
export const CARGAR_USUARIO_SUCCES = '[User] Cargar Usuario SUCCESS'

export class CargarUser implements Action {
    readonly type: string = CARGAR_USUARIO;
    constructor(public id: string) { }
}

export class CargarUserFail implements Action {
    readonly type: string = CARGAR_USUARIO_FAIL;
    constructor(public payload: any) { }
}

export class CargarUserSuccess implements Action {
    readonly type: string = CARGAR_USUARIO_SUCCES;
    constructor(public user: User) { }
}

export type userActions =   CargarUser |
                            CargarUserFail |
                            CargarUserSuccess;