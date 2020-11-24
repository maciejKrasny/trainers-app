import {  AuthorizationUser, AuthorizationActions, SET_AUTHORIZATION_USERS, CLEAR_CURRENT_AUTHORIZATION_USER, SET_AUTHORIZATION_USER_PENDING, SET_CURRENT_AUTHORIZATION_USER } from "./types";

export function setAuthorizationUsers(data: AuthorizationUser[]): AuthorizationActions {
    return {
        type: SET_AUTHORIZATION_USERS,
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

export function setCurrentAuthorizationUser(data: AuthorizationUser): AuthorizationActions {
    return {
        type: SET_CURRENT_AUTHORIZATION_USER,
        payload: data,
    }
}