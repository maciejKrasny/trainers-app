import {User, UserType} from "../Users/types";

export interface AuthorizationUser {
    user: User;
    token: string;
}

export interface AuthorizationState {
    authorization?: AuthorizationUser;
    pending: boolean;
}

export const SET_AUTHORIZATION_USER = 'SET_AUTHORIZATION_USER';
export const SET_AUTHORIZATION_USER_PENDING = 'SET_AUTHORIZATION_USER_PENDING';
export const CLEAR_CURRENT_AUTHORIZATION_USER = 'CLEAR_CURRENT_AUTHORIZATION_USER';

export interface SetAuthorizationUserAction {
    type: typeof SET_AUTHORIZATION_USER;
    payload: AuthorizationUser;
}

export interface ClearCurrentAuthorizationUserAction {
    type: typeof CLEAR_CURRENT_AUTHORIZATION_USER;
}

export interface SetAuthorizationUserPending {
    type: typeof SET_AUTHORIZATION_USER_PENDING;
    payload: boolean;
}


export type AuthorizationActions = SetAuthorizationUserAction | ClearCurrentAuthorizationUserAction | SetAuthorizationUserPending;