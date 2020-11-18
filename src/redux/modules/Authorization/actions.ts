import { SET_USER_PENDING, AuthorizationUser, AuthorizationActions, CLEAR_USER, SET_USER } from "./types";

export function setUser(data: AuthorizationUser): AuthorizationActions {
    return {
        type: SET_USER,
        payload: data
    };
}

export function clearUser(): AuthorizationActions {
    return {
        type: CLEAR_USER,
    };
}

export function setPending(data: boolean): AuthorizationActions {
    return {
        type: SET_USER_PENDING,
        payload: data
    };
}