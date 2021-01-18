import { Service, ServiceActions, SET_SERVICES, SET_SERVICES_PENDING } from "./types";

export function setServices(data: Service[]): ServiceActions {
    return {
        type: SET_SERVICES,
        payload: data
    };
}

export function setPending(data: boolean): ServiceActions {
    return {
        type: SET_SERVICES_PENDING,
        payload: data
    };
}