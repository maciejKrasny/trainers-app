import { AppThunk } from '../../store/store.types';
import { setPending, setServices } from './actions';
import { Service } from './types';

export const fetchServices = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    const response = localStorage.getItem('services');
    if (response) {
        const parsedResponse: Service[] = JSON.parse(response);
        dispatch(setServices(parsedResponse));
    }
    dispatch(setPending(false));
};

export const addService = (data: Service): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    const services = [...getState().services.services, data];
    localStorage.setItem('services', JSON.stringify(services));
    dispatch(setServices(services));
    dispatch(setPending(false));
};


export const editServie = (service: Service): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    const curServices = [...getState().services.services]
    const serviceIndex = curServices.findIndex(curService => curService.id === service.id);
    curServices[serviceIndex] = service;
    const servicesString = JSON.stringify(curServices);
    localStorage.setItem('services', servicesString);
    dispatch(setServices(curServices));
};