import { AppThunk } from '../../store/store.types';
import { setPending, setUsers } from './actions';
import { User } from './types';

export const fetchUsers = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    const response: string = await localStorage.get('users');
    const parsedResponse: User[] = JSON.parse(response);
    dispatch(setUsers(parsedResponse));
    dispatch(setPending(false));
};
