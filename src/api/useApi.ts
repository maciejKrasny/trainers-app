import React from 'react';
import { ReactReduxContext } from 'react-redux';
import ApiModule from './modules/_ApiModule';

export type Newable<T> = { new (...args: any[]): T; };

function useApi<T extends ApiModule<E>, E = object>(ApiClass: Newable<T>) {
    const { store } = React.useContext(ReactReduxContext);
    const { getState, dispatch } = store;
    const api = React.useRef(new ApiClass(dispatch, getState));

    return api.current;
}

export default useApi;
