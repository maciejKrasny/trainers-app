export interface Service {
    id: string;
    owner: number;
    name: string;
    price: number;
    category: string;
}

export interface ServicesState {
    services: Service[];
    pending: boolean;
}

export const SET_SERVICES = 'SET_SERVICES';
export const ADD_SERVICE = 'ADD_SERVICE';
export const EDIT_SERVICE = 'EDIT_SERVICE';
export const SET_SERVICES_PENDING = 'SET_SERVICES_PENDING';

export interface SetServicesAction {
    type: typeof SET_SERVICES;
    payload: Service[];
}

export interface AddServiceAction {
    type: typeof ADD_SERVICE;
    payload: Service;
}

export interface EditServiceAction {
    type: typeof EDIT_SERVICE;
    payload: Service;
}

export interface SetServicePending {
    type: typeof SET_SERVICES_PENDING;
    payload: boolean;
}

export type ServiceActions = SetServicesAction | AddServiceAction | SetServicePending | EditServiceAction;