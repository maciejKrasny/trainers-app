import {AuthorizationUser} from "./types";

export function saveAuthorizationUserInLocalStorage(user: AuthorizationUser) {
    const userString = JSON.stringify(user);
    localStorage.setItem('authorization', userString);
}

export function readAuthorizationUserFromLocalStorage() {
    return localStorage.getItem('authorization');
}

export function removeAuthorizationUserFromLocalStorage() {
    return localStorage.removeItem('authorization');
}

