import {Reducer} from 'redux';
import initialState from './state';
import {FormDataActions, FormDataState, SET_CITIES, SET_FORM_DATA_PENDING, SET_SPECS} from "./types";

const formDataReducer: Reducer<FormDataState, FormDataActions> = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITIES:
            return {
                ...state,
                cities: action.payload,
            };

        case SET_SPECS:
            return {
                ...state,
                specializations: action.payload,
            };
        case SET_FORM_DATA_PENDING:
            return {
                ...state,
                pending: action.payload,
            };
        default:
            return state;
    }
};

export default formDataReducer;
