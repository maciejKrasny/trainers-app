import { AppThunk } from '../../store/store.types';
import {setCities, setSpecs} from './actions';
import kyClient from "../../../api/kyClient";

export const fetchSpecializations = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.get(`specializations`);
        const data: string[] = await response.json();
        if (data) {
            dispatch(setSpecs(data));
        }
    } catch (e) {
    }

};

export const fetchCities = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.get(`cities`);
        const data: string[] = await response.json();
        if (data) {
            dispatch(setCities(data));
        }
    } catch (e) {
    }

};
