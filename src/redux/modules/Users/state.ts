import { UserState } from './types';

const intialState: UserState = {
    users: [
        {
            id: 1,
            name: 'Jan',
            specializations: ['Bieganie', 'Pływanie', 'Kolarstwo'],
            surname: 'Kowalski',
            city: 'Poznań',
            shortDescription: 'Zapraszam na mój trening'
        },
        {
            id: 1,
            name: 'Janina',
            specializations: ['Bieganie', 'Pływanie', 'Kolarstwo'],
            surname: 'Kowalska',
            city: 'Warszawa',
            shortDescription: ' ',
        }
    ],
    pending: false,
}

export default intialState;