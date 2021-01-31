import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FilterSection from '../../components/home/FilterSection/FilterSection';
import { GridContainer } from '../../components/home/Grid/Grid.styled';
import Layout from '../../components/home/Layout/Layout'
import MostPopularTrainersSection from '../../components/home/MostPopularTrainersSection/MostPopularTrainersSection';
import RegisterSection from "../../components/home/RegisterSection/RegisterSection";
import * as formDataThunks from "../../redux/modules/FormData/thunks";
import * as userThunks from "../../redux/modules/Users/thunks";

const LandingPage: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const [specializations, setSpecializations] = useState<string[]>([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(formDataThunks.fetchCities());
        dispatch(formDataThunks.fetchSpecializations());
        dispatch(formDataThunks.fetchSpecializations());
        dispatch(userThunks.fetchMostPopularUsers());
    }, []);

    return (
        <Layout isSticky={false}>
                <FilterSection
                    city={city}
                    onChangeCity={setCity}
                    specializations={specializations}
                    onChangeSpecializations={setSpecializations}
                />
            <GridContainer>
                <MostPopularTrainersSection>Najpopularniejsi trenerzy</MostPopularTrainersSection>
            </GridContainer>
            <RegisterSection />
        </Layout>
    )
}

export default LandingPage;