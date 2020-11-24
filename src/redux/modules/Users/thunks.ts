import { AppThunk } from '../../store/store.types';
import { setPending, setUsers, addUser as addUserAction } from './actions';
import { User } from './types';

export const fetchUsers = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    const response: string | null = localStorage.getItem('users');
    if (response) {
        const parsedResponse: User[] = JSON.parse(response);
        dispatch(setUsers(parsedResponse));
    }
    dispatch(setPending(false));
};

export const addUser = (user: Omit<User, 'id'>): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    const newUser: User = {
        ...user,
        id: getState().users.users.length + 1,
    }
    const users = [...getState().users.users, newUser];
    const usersString = JSON.stringify(users);
    localStorage.setItem('users', usersString);
    dispatch(addUserAction(newUser));
};

export const editUser = (user: User): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    const curUsers = [...getState().users.users]
    const userIndex = curUsers.findIndex(curUser => curUser.id === user.id);
    curUsers[userIndex] = user;
    const usersString = JSON.stringify(curUsers);
    localStorage.setItem('users', usersString);
    dispatch(setUsers(curUsers));
};

