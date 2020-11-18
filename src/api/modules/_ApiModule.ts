import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../redux/store/store.types';

/**
 * Abstract class for organizing methods
 * of redux api calls with useApi hook
 */
abstract class ApiModule<T = any> {

    constructor(
        protected readonly dispatch: ThunkDispatch<any, void, AnyAction>,
        protected readonly getState: () => RootState
    ) {}

    abstract getAll(): void

}

export default ApiModule;
