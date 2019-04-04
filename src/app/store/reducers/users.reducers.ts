import { User } from "src/app/models/user.model";
import { usersActions, CARGAR_USUARIOS, CARGAR_USUARIOS_SUCCES, CARGAR_USUARIOS_FAIL } from "../actions";

export interface UsersState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

export function usersReducer(state = initState, action: usersActions): UsersState {
    switch (action.type) {
        case CARGAR_USUARIOS:

            return {
                ...state,
                loading: true,
                error: null
            };
        case CARGAR_USUARIOS_SUCCES:

            return {
                ...state,
                loading: false,
                loaded: true,
                users: [...(<any>action).users]
            };
        case CARGAR_USUARIOS_FAIL:

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