import { AuthorizationState } from './types';

const intialState: AuthorizationState = {
    authorizationUsers: [{
        id: 1,
        login: 'jan',
        password: 'kowalski',
        userId: 1,
    }],
    pending: false,
}

export default intialState;