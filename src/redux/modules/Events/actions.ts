import {EventActions, SET_EVENT_PENDING, SET_EVENTS, Event} from "./types";

export function setEvents(data: Event[]): EventActions {
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