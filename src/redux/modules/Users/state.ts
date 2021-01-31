import { UserState } from './types';

const intialState: UserState = {
    users: [],
    mostPopularUsers: [],
    observedUsers: [],
    pending: false,
}

export default intialState;