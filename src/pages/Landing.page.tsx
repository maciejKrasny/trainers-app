import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FilterSection from '../components/FilterSection/FilterSection';
import { GridContainer } from '../components/Grid/Grid.styled';
import Layout from '../components/Layout/Layout'
import MostPopularTrainersSection from '../components/MostPopularTrainersSection/MostPopularTrainersSection';
import RegisterSection from "../components/RegisterSection/RegisterSection";

const LandingPage: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const [specializations, setSpecializations] = useState<string[]>([]);

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