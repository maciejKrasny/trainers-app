import { AppThunk } from '../../store/store.types';
import { setAuthorizationUsers, setAuthorizationUserPending, setCurrentAuthorizationUser, clearCurrentAuthorizationUser as clearCurrentAuthorizationUserAction } from './actions';
import { AuthorizationUser } from './types';

export const fetchAuthorizationUsers = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    const response: string | null = localStorage.getItem('authorizationUsers');
    if (response) {
        const parsedResponse: AuthorizationUser[] = JSON.parse(response);
        dispatch(setAuthorizationUsers(parsedResponse));
    }
};


export const fetchCurrentAuthorizationUser = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    const response: string | null = localStorage.getItem('currentAuthorizationUser');
    if (response) {
        const parsedResponse: AuthorizationUser = JSON.parse(response);
        dispatch(setCurrentAuthorizationUser(parsedResponse));
    }
};

export const addAuthorizationUser = (user: Omit<AuthorizationUser, 'id' | 'userId'>): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    const authorizationUsers = getState().authorizationUsers.authorizationUsers;
    const authorizationUser: AuthorizationUser = {
        ...user,
        id: authorizationUsers.length + 1,
        userId: getState().users.users.length,
    }
    const users = [...authorizationUsers, authorizationUser];
    const usersString = JSON.stringify(users);
    localStorage.setItem('authorizationUsers', usersString);
    dispatch(saveCurrentAuthorizationUser(authorizationUser));
    dispatch(setAuthorizationUsers(users));
};

export const saveCurrentAuthorizationUser = (user: AuthorizationUser): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setAuthorizationUserPending(true));
    setTimeout(() => {
        const userString = JSON.stringify(user);
        localStorage.setItem('currentAuthorizationUser', userString);
        dispatch(setCurrentAuthorizationUser(user));
        dispatch(setAuthorizationUserPending(false));
    }, 2000)
};

export const clearCurrentAuthorizationUser = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    localStorage.removeItem('currentAuthorizationUser');
    dispatch(clearCurrentAuthorizationUserAction());
};
