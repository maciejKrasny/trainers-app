export interface AuthorizationUser {
    id: number;
    userId: number;
    login: string;
    password: string;
}

export interface AuthorizationState {
    authorizationUsers: AuthorizationUser[];
    currentAuthorizationUser?: AuthorizationUser;
    pending: boolean;
}

export const SET_AUTHORIZATION_USERS = 'SET_AUTHORIZATION_USERS';
export const SET_CURRENT_AUTHORIZATION_USER = 'SET_CURRENT_AUTHORIZATION_USER';
export const SET_AUTHORIZATION_USER_PENDING = 'SET_AUTHORIZATION_USER_PENDING';
export const CLEAR_CURRENT_AUTHORIZATION_USER = 'CLEAR_CURRENT_AUTHORIZATION_USER';

export interface SetAuthorizationUsersAction {
    type: typeof SET_AUTHORIZATION_USERS;
    payload: AuthorizationUser[];
}

export interface ClearCurrentAuthorizationUserAction {
    type: typeof CLEAR_CURRENT_AUTHORIZATION_USER;
}

export interface SetAuthorizationUserPending {
    type: typeof SET_AUTHORIZATION_USER_PENDING;
    payload: boolean;
}

export interface SetCurrentAuthorizationUserPending {
    type: typeof SET_CURRENT_AUTHORIZATION_USER;
    payload: AuthorizationUser;
}

export type AuthorizationActions = SetAuthorizationUsersAction | ClearCurrentAuthorizationUserAction | SetAuthorizationUserPending | SetCurrentAuthorizationUserPending;