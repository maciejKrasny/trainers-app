import {Reducer} from 'redux';
import initialState from './state';
import {EventActions, EventsState, SET_EVENT_PENDING, SET_EVENTS} from './types';

const eventReducer: Reducer<EventsState, EventActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                events: action.payload,
            };

        case SET_EVENT_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        default:
            return state;
    }
};

export default eventReducer;
