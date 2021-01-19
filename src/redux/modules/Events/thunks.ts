import { AppThunk } from '../../store/store.types';
import {setEventPending, setEvents} from './actions';
import kyClient from "../../../api/kyClient";
import {Event } from './types';

export const fetchEvents = (id: string, handler: () => void): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setEventPending(true));
    try {
        const response = await kyClient.get(`trainer/${id}/events`);
        const data: Event[] = await response.json();
        if (data) {
            dispatch(setEvents(data));
        }
    } catch (e) {
        handler();
    }

    dispatch(setEventPending(false));
};
