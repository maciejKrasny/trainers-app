import {User} from "../Users/types";

export interface Event {
    _id: string;
    title: string;
    author: User;
    content: string;
    eventDetails: {
        place: string;
        dateTime: string;
    }
}

export interface EventsState {
    events: Event[];
    pending: boolean;
}

export const SET_EVENTS = 'SET_EVENTS';
export const SET_EVENT_PENDING = 'SET_EVENT_PENDING';

export interface SetEventsAction {
    type: typeof SET_EVENTS;
    payload: Event[];
}

export interface SetEventPendingAction {
    type: typeof SET_EVENT_PENDING;
    payload: boolean;
}

export type EventActions = SetEventsAction | SetEventPendingAction;