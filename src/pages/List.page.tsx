import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FilterSection from '../components/FilterSection/FilterSection';
import { GridContainer } from '../components/Grid/Grid.styled';
import Layout from '../components/Layout/Layout'
import TrainerCard from '../components/TrainerCard/TrainerCard';
import { User } from '../redux/modules/Users/types';


const filterByCity = (users: User[], city: string) => {
    return users.filter(user => user.city === city);
}

const filterBySpecializations = (users: User[], specializations: string[]) => {
    return users.filter(user =>
        specializations.every(specialization =>
            user.specializations.includes(specialization)));
}


const filterUsers = (users: User[], city: string, specializations: string[]) => {
    if (city && specializations.length) {
        const filteredUsersByCity = filterByCity(users, city);
        return filterBySpecializations(filteredUsersByCity, specializations);
    }

    if (city) {
        return filterByCity(users, city);
    }

    if (specializations.length) {
        return filterBySpecializations(users, specializations);
    }

    return users;
}

const ListPage: React.FC = () => {
    const { users } = useSelector(state => state.users);

    const [city, setCity] = useState<string>('');
    const [specializations, setSpecializations] = useState<string[]>([]);

    return (
        <Layout>
            <GridContainer>
                <FilterSection
                    city={city}
                    onChangeCity={setCity}
                    specializations={specializations}
                    onChangeSpecializations={setSpecializations}
                />
                {filterUsers(users, city, specializations).map(user => (
                    <TrainerCard
                        name={`${user.name} ${user.surname}`}
                        description={user.shortDescription}
                        id={user.id}
                        specializations={user.specializations}
                    />
                ))}
            </GridContainer>
        </Layout>
    )
}

export default ListPage;