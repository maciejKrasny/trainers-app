export interface FormDataState {
    specializations: string[];
    cities: string[];
    pending: boolean;
}

export const SET_SPECS = 'SET_SPECS';
export const SET_FORM_DATA_PENDING = 'SET_FORM_DATA_PENDING';
export const SET_CITIES = 'SET_CITIES';

export interface SetCitiesAction {
    type: typeof SET_CITIES;
    payload: string[];
}

export interface SetSpecializationsAction {
    type: typeof SET_SPECS;
    payload: string[];
}

export interface SetFormDataPendingAction {
    type: typeof SET_FORM_DATA_PENDING;
    payload: boolean;
}

export type FormDataActions = SetCitiesAction | SetSpecializationsAction | SetFormDataPendingAction;