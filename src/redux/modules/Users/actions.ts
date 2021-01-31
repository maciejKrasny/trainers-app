import {
    SET_MOST_POPULAR_USERS,
    SET_OBSERVED,
    SET_USER_PENDING,
    SET_USERS,
    User,
    UserActions
} from "./types";

export function setUsers(data: User[]): UserActions {
    return {
        type: SET_USERS,
        payload: data
    };
}

export function setMostPopularUsers(data: User[]): UserActions {
    return {
        type: SET_MOST_POPULAR_USERS,
        payload: data
    };
}

export function setPending(data: boolean): UserActions {
    return {
        type: SET_USER_PENDING,
        payload: data,
    };
}

export function setObserved(data: string[]): UserActions {
    return {
        type: SET_OBSERVED,
        payload: data,
    }
}

