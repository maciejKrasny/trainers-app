import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {GridContainer} from '../../components/home/Grid/Grid.styled';
import Layout from '../../components/home/Layout/Layout'
import TrainersListSection from "../../components/home/TrainersListSection/TrainersListSection";
import FilterListSection from "../../components/home/FilterListSection/FilterListSection";
import useQuery from "../../utils/hooks/useUrlQuery";
import {useHistory} from "react-router-dom";
import {User} from "../../redux/modules/Users/types";
import * as trainerThunks from '../../redux/modules/Users/thunks';
import {useHttpErrorHandler} from "../../utils/hooks/useHttpErrorHandler";
import * as formDataThunks from "../../redux/modules/FormData/thunks";

const filterByCity = (trainers: User[], city: string) => {
    return trainers.filter(trainer => trainer.userDetails.city === city);
}

const filterBySpecializations = (trainers: User[], specializations: string[]) => {
    return trainers.filter(trainer =>
        specializations.every(specialization =>
            trainer.specializations?.includes(specialization)));
}

const filterByRating = (users: User[], rating: number) => {
    return users.filter(user => (user.reviewsSummary.averageGrade || 0) >= rating);
}

const filterTrainers = (users: User[], city: string, specializations: string[], rating: number) => {
    const trainers = users.filter(user => user.type === "TRAINER");
    const filteredTrainers = filterByRating(trainers, rating);
    if (city && specializations.length) {
        const filteredUsersByCity = filterByCity(filteredTrainers, city);
        return filterBySpecializations(filteredUsersByCity, specializations);
    }

    if (city) {
        return filterByCity(filteredTrainers, city);
    }

    if (specializations.length) {
        return filterBySpecializations(filteredTrainers, specializations);
    }

    return filteredTrainers;
}

const ListPage: React.FC = () => {
    const { users } = useSelector(state => state.users);
    const history = useHistory();

    const [city, setCity] = useState<string>('');
    const [specializations, setSpecializations] = useState<string[]>([]);
    const [rating, setRating] = useState<number>(0);
    const handle = useHttpErrorHandler();
    const dispatch = useDispatch();

    useEffect(() => {
        trainerThunks.fetchUsers(handle);
        dispatch(formDataThunks.fetchCities());
        dispatch(formDataThunks.fetchSpecializations());
    }, [])
    const query = useQuery();
    const handleOnChangeCity = (selectedCity: string | null) => {
        if (specializations.length || rating) {
            const specsString = specializations.join(',').trim();

            history.push({
                pathname: 'trenerzy',
                search: `miasto=${selectedCity || ''}&aktywnosci=${specsString}&ocena=${rating}`
            })
        } else {
            history.push({
                pathname: 'trenerzy',
                search: `miasto=${selectedCity || ''}`,
            })
        }
    }

    const handleOnChangeSpec = (specs: string[]) => {
        const specsString = specs.join(',').trim();
        if (city || rating) {
            history.push({
                pathname: 'trenerzy',
                search: `miasto=${city}&aktywnosci=${specsString}&ocena=${rating}`
            })
        } else {
            history.push({
                pathname: 'trenerzy',
                search: `aktywnosci=${specsString}`
            })
        }
    }

    const handleOnChangeRating = (value: number) => {
        const specsString = specs.join(',').trim();
        if (city || specializations.length) {
            history.push({
                pathname: 'trenerzy',
                search: `miasto=${city}&aktywnosci=${specsString}&ocena=${value}`
            })
        } else {
            history.push({
                pathname: 'trenerzy',
                search: `ocena=${value}`
            })
        }
    }
    const queryCity = query.get("miasto");
    const querySpec = query.get("aktywnosci")
    const queryRating = query.get("ocena")

    const specs: string[] = querySpec ? querySpec.split(',') : [];
    useEffect(() => {
        setCity(queryCity || '');
        setSpecializations(specs);
        setRating(parseInt(queryRating || '0'));
    }, [queryCity, specs?.length, queryRating]);

    return (
        <Layout>
            <GridContainer style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TrainersListSection trainers={filterTrainers(users, city, specializations, rating)} />
                <FilterListSection onChangeRating={handleOnChangeRating} rating={rating} city={city} specializations={specializations} onChangeCity={handleOnChangeCity} onChangeSpecialization={handleOnChangeSpec} />
            </GridContainer>
        </Layout>
    )
}

export default ListPage;