import {
    AuthorizationActions,
    AuthorizationUser,
    CLEAR_CURRENT_AUTHORIZATION_USER,
    SET_AUTHORIZATION_USER_PENDING,
    SET_AUTHORIZATION_USER,
} from "./types";

export function setAuthorizationUser(data: AuthorizationUser): AuthorizationActions {
    return {
        type: SET_AUTHORIZATION_USER,
        payload: data,
    };
}

export function clearCurrentAuthorizationUser(): AuthorizationActions {
    return {
        type: CLEAR_CURRENT_AUTHORIZATION_USER,
    };
}

export function setAuthorizationUserPending(data: boolean): AuthorizationActions {
    return {
        type: SET_AUTHORIZATION_USER_PENDING,
        payload: data,
    };
}
