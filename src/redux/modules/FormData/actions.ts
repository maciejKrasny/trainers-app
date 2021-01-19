import {FormDataActions, SET_CITIES, SET_FORM_DATA_PENDING, SET_SPECS} from "./types";

export function setCities(data: string[]): FormDataActions {
    return {
        type: SET_CITIES,
        payload: data
    };
}

export function setSpecs(data: string[]): FormDataActions {
    return {
        type: SET_SPECS,
        payload: data
    };
}

export function setFormDataPending(data: boolean): FormDataActions {
    return {
        type: SET_FORM_DATA_PENDING,
        payload: data
    };
}