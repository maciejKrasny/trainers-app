export interface Service {
    id: string;
    title: string;
    price: number;
    category: string;
}

export interface ServicesState {
    services: Service[];
    pending: boolean;
}

export const SET_SERVICES = 'SET_SERVICES';
export const SET_SERVICES_PENDING = 'SET_SERVICES_PENDING';

export interface SetServicesAction {
    type: typeof SET_SERVICES;
    payload: Service[];
}


export interface SetServicePending {
    type: typeof SET_SERVICES_PENDING;
    payload: boolean;
}

export type ServiceActions = SetServicesAction | SetServicePending;