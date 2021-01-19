import { AuthorizationState } from './types';

const intialState: AuthorizationState = {
    authorization: undefined,
    pending: false,
    error: false,
}

export default intialState;