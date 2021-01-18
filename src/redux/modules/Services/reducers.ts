import { Reducer } from 'redux';
import initialState from './state';
import { ServiceActions, ServicesState, SET_SERVICES, SET_SERVICES_PENDING } from './types';

const serviceReducer: Reducer<ServicesState, ServiceActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_SERVICES:
            return {
                ...state,
                services: action.payload,
            };
        case SET_SERVICES_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        default:
            return state;
    }
};

export default serviceReducer;
