export interface AuthorizationUser {
    id: number;
    name: string;
    surname: string;
    city: string;
    specializations: string[];
}

export interface AuthorizationState {
    user?: AuthorizationUser;
    pending: boolean;
}

export const SET_USER = 'SET_USERS';
export const SET_USER_PENDING = 'SET_USER_PENDING';
export const CLEAR_USER = 'CLEAR_USER';

export interface SetUserAction {
    type: typeof SET_USER;
    payload: AuthorizationUser;
}

export interface ClearUserAction {
    type: typeof CLEAR_USER;
}

export interface SetUserPending {
    type: typeof SET_USER_PENDING;
    payload: boolean;
}

export type AuthorizationActions = SetUserAction | ClearUserAction | SetUserPending;