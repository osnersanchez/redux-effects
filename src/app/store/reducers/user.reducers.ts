import { User } from "src/app/models/user.model";
import { CARGAR_USUARIO, CARGAR_USUARIO_SUCCES, CARGAR_USUARIO_FAIL, userActions } from "../actions";

export interface UserState {
    user: User;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UserState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
}

export function userReducer(state = initState, action: userActions): UserState {
    switch (action.type) {
        case CARGAR_USUARIO:

            return {
                ...state,
                loading: true,
                error: null
            };
        case CARGAR_USUARIO_SUCCES:

            return {
                ...state,
                loading: false,
                loaded: true,
                user: {...(<any>action).user}
            };
        case CARGAR_USUARIO_FAIL:

            return {
                ...state,
                loading: false,
                loaded: false,
                error: {
                    status: (<any>action).payload.status,
                    message: (<any>action).payload.message,
                    url: (<any>action).payload.url
                }
            };

        default:
            return state;
    }
}