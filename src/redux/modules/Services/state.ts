import { ServicesState } from './types';

const intialState: ServicesState = {
    services: [
        {
            id: '1',
            name: 'Trening personalny na siłowni',
            owner: 1,
            price: 150,
            category: "Siłownia",
        },
        {
            id: '2',
            name: 'Jogging z trenerem',
            owner: 1,
            price: 50,
            category: "Bieganie",
        },
        {
            id: '3',
            name: 'Przygotowanie do triathlonu',
            owner: 1,
            price: 200,
            category: "Siłownia"
        },
    ],
    pending: false,
}

export default intialState;