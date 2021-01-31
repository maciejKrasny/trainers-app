import {EventActions, SET_EVENT_PENDING, SET_EVENTS, RESET, Event} from "./types";
import {WithPagination} from "../../types";

export function setEvents(data: WithPagination<Event[]>): EventActions {
    return {
        type: SET_EVENTS,
        payload: data
    };
}

export function setEventPending(data: boolean): EventActions {
    return {
        type: SET_EVENT_PENDING,
        payload: data
    };
}

export function resetEvents(): EventActions {
    return {
        type: RESET,
    };
}