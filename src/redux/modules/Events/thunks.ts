import { AppThunk } from '../../store/store.types';
import {setEventPending, setEvents} from './actions';
import kyClient from "../../../api/kyClient";
import {Event } from './types';
import {Post} from "../Posts/types";
import {WithPagination} from "../../types";

export const fetchEvents = (currentPage: number, id: string, handler: () => void): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setEventPending(true));
    try {
        const response = await kyClient.get(`trainer/${id}/events?currentPage=${currentPage}`);
        const data: WithPagination<Event[]> = await response.json();
        if (data) {
            dispatch(setEvents(data));
        }
    } catch (e) {
        handler();
    }

    dispatch(setEventPending(false));
};
