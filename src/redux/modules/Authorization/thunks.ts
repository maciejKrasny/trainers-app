import {AppThunk} from '../../store/store.types';
import {
    clearCurrentAuthorizationUser as clearCurrentAuthorizationUserAction, setAuthorizationUser,
    setAuthorizationUserPending, setError,
} from './actions';
import {AuthorizationUser} from './types';
import {
    readAuthorizationUserFromLocalStorage,
    removeAuthorizationUserFromLocalStorage,
    saveAuthorizationUserInLocalStorage
} from "./utils";
import kyClient from "../../../api/kyClient";
import {User} from "../Users/types";

export const fetchCurrentAuthorizationUser = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    const response: string | null = readAuthorizationUserFromLocalStorage();
    if (response) {
        const parsedResponse: AuthorizationUser = JSON.parse(response);
        dispatch(setAuthorizationUser(parsedResponse));
    }
};

export const login = (user: {email: string; password: string}): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setAuthorizationUserPending(true));
    try {
        const response = await kyClient.post('user/login', {json: user});
        const data: AuthorizationUser = await response.json();
        if (data) {
            dispatch(setAuthorizationUser(data));
            dispatch(setError(false));
            saveAuthorizationUserInLocalStorage(data);
        }

    } catch (e) {
        dispatch(setError(true));
    }
    dispatch(setAuthorizationUserPending(false));
};

export interface RegisterUser {
    password: string;
    type: string;
    city?: string;
    name: string,
    phone?: number,
    email: string,
    description?: string,
    specializations?: string[],
    firstName: string;
    lastName: string,
}

export const register = (newUser: RegisterUser): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setAuthorizationUserPending(true));
    try {
        const response = await kyClient.post('user/register', {json: newUser});
        const data: AuthorizationUser = await response.json();
        if (data) {
            dispatch(setAuthorizationUser(data));
            dispatch(setError(false));
            saveAuthorizationUserInLocalStorage(data);
        }

    } catch (e) {
        dispatch(setError(true));
    }
    dispatch(setAuthorizationUserPending(false));
};

export const saveAuthorizationUser = (user: AuthorizationUser): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
        dispatch(setAuthorizationUserPending(true));
        saveAuthorizationUser(user);
        dispatch(setAuthorizationUser(user));
        dispatch(setAuthorizationUserPending(false));
};

export const clearCurrentAuthorizationUser = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    removeAuthorizationUserFromLocalStorage();
    dispatch(clearCurrentAuthorizationUserAction());
};
