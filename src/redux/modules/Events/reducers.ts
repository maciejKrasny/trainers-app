import {Reducer} from 'redux';
import initialState from './state';
import {EventActions, EventsState, RESET, SET_EVENT_PENDING, SET_EVENTS} from './types';

const eventReducer: Reducer<EventsState, EventActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                events: [...state.events, ...action.payload.data],
                currentPage: action.payload.currentPage,
                totalPages: action.payload.totalPages,
            };

        case SET_EVENT_PENDING: 
            return {
                ...state,
                pending: action.payload,
            };
        case RESET:
            return {
                pending: false,
                events: [],
                currentPage: 0,
                totalPages: 0,
            }
        default:
            return state;
    }
};

export default eventReducer;
