import { UserState } from './types';

const intialState: UserState = {
    users: [
        {
            id: 1,
            name: 'Jan',
            specializations: ['Bieganie', 'Pływanie', 'Kolarstwo', 'Siłownia'],
            surname: 'Kowalski',
            city: 'Poznań',
            shortDescription: 'Zapraszam na mój trening',
            email: 'jan.kowalski@gmia.com',
            nrPhone: 123123123,
        },
        {
            id: 2,
            name: 'Janina',
            specializations: ['Bieganie', 'Pływanie'],
            surname: 'Kowalska',
            city: 'Warszawa',
            shortDescription: 'Zapraszam serdecznie na świetne treningi!',
            email: 'janina.kowalska@turbomail.com',
            nrPhone: 123173123,
        },
        {
            id: 3,
            name: 'Piotr',
            specializations: ['Siłownia', 'Triathlon'],
            surname: 'Nowak',
            city: 'Poznań',
            shortDescription: 'Najlepsze treningi w Krakowie',
            email: 'piotr.nowak123@gma.pl',
            nrPhone: 923123123,
        },
        {
            id: 4,
            name: 'Paweł',
            specializations: ['Siłownia'],
            surname: 'Nowakowski',
            city: 'Poznań',
            shortDescription: 'Najlepsze treningi w Krakowie',
            email: 'siema.siema@sad.pl',
            nrPhone: 453123123,
        },
        {
            id: 5,
            name: 'Katarzyna',
            specializations: ['Taniec'],
            surname: 'Pawłowska',
            city: 'Poznań',
            shortDescription: 'Najlepsze treningi w Krakowie',
            email: 'pawalowska@das.pl',
            nrPhone: 196123123,
        }
    ],
    pending: false,
}

export default intialState;