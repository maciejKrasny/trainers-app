import { AppThunk } from '../../store/store.types';
import {toObserved, setPending, setUsers, setMostPopularUsers} from './actions';
import {MostPopularUser, User} from './types';
import kyClient from "../../../api/kyClient";

export const fetchUsers = (handler: () => void): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    try {
        const response = await kyClient.get('trainer');
        const data: User[] = await response.json();
        if (data) {
            dispatch(setUsers(data));
        }
    } catch (e){
        handler();
    }

    dispatch(setPending(false));
};

export const fetchMostPopularUsers = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    try {
        const response = await kyClient.get('trainer');
        const data: MostPopularUser[] = await response.json();
        if (data) {
            dispatch(setMostPopularUsers(data));
        }
    } catch (e){}

    dispatch(setPending(false));
};

export const trainerToObserved = (id: string): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.post(`trainer/${id}/observe`);
        const data = await response.json();
        if (data) {
            dispatch(toObserved(id));
        }
    } catch (e){

    }
}

