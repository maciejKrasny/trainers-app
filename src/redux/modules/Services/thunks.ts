import {AppThunk} from '../../store/store.types';
import {setPending, setServices} from './actions';
import {Service} from './types';
import kyClient from "../../../api/kyClient";

export const fetchServices = (id: string, handler: () => void): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    try {
        const response = await kyClient.get(`trainer/${id}/pricing`);
        const data: Service[] = await response.json();
        if (data) {
            dispatch(setServices(data));
        }
    } catch (e) {
        handler();
    }

    dispatch(setPending(false));
};