import {User} from "../Users/types";
import {WithPagination} from "../../types";

export interface Event {
    _id: string;
    title: string;
    image?: string;
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
    currentPage: number;
    totalPages: number;
}

export const SET_EVENTS = 'SET_EVENTS';
export const SET_EVENT_PENDING = 'SET_EVENT_PENDING';
export const RESET = 'RESET_EVENTS';

export interface SetEventsAction {
    type: typeof SET_EVENTS;
    payload: WithPagination<Event[]>;
}

export interface SetEventPendingAction {
    type: typeof SET_EVENT_PENDING;
    payload: boolean;
}

export interface ResetEventAction {
    type: typeof RESET;
}

export type EventActions = SetEventsAction | SetEventPendingAction | ResetEventAction;