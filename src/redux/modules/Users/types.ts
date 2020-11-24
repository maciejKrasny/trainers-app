export interface User {
    id: number;
    name: string;
    surname: string;
    city: string;
    nrPhone: number;
    email: string;
    specializations: string[];
    shortDescription: string;
}

export interface UserState {
    users: User[];
    pending: boolean;
}

export const SET_USERS = 'SET_USERS';
export const ADD_USER = 'ADD_USER';
export const SET_USER_PENDING = 'SET_USER_PENDING';

export interface SetUsersAction {
    type: typeof SET_USERS;
    payload: User[];
}

export interface AddUserAction {
    type: typeof ADD_USER;
    payload: User;
}

export interface SetUserPending {
    type: typeof SET_USER_PENDING;
    payload: boolean;
}

export type UserActions = SetUsersAction | AddUserAction | SetUserPending;