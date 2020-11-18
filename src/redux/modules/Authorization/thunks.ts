import { AppThunk } from '../../store/store.types';
import { setPending, setUser } from './actions';
import { AuthorizationUser } from './types';

export const fetchAuthorizationUser = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    const response: string = await localStorage.get('authorizationUser');
    const parsedResponse: AuthorizationUser = JSON.parse(response);
    dispatch(setUser(parsedResponse));
    dispatch(setPending(false));
};
