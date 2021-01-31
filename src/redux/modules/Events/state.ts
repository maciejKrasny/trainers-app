import {EventsState} from './types';

const initialState: EventsState = {
    events: [],
    currentPage: 0,
    totalPages: 0,
    pending: false,
}

export default initialState;