import { User, SET_USERS, UserActions, ADD_USER, SET_USER_PENDING } from "./types";

export function setUsers(data: User[]): UserActions {
    return {
        type: SET_USERS,
        payload: data
    };
}

export function addUser(data: User): UserActions {
    return {
        type: ADD_USER,
        payload: data
    };
}

export function setPending(data: boolean): UserActions {
    return {
        type: SET_USER_PENDING,
        payload: data
    };
}