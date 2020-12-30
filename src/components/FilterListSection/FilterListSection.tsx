import React from 'react';
import {Card, Typography} from "@material-ui/core";
import { Container, FilterContainer, SpecializationsContainer } from './FilterListSection.styled';
import CitySelect from "../Selects/CitySelect";
import InputWithChips from "../InputWithChips/InputWithChips";
import SpecializationsSelect from "../Selects/SpecializationsSelect";
import { Rating } from '@material-ui/lab';

interface FilterListSectionProps {
    city: string;
    specializations: string[];
    onChangeCity: (value: string) => void;
    onChangeSpecialization: (value: string[]) => void;
}

const FilterListSection: React.FC<FilterListSectionProps> = ({ city, specializations, onChangeCity, onChangeSpecialization}) => {
    return (
        <FilterContainer>
        <Container>
            <Typography style={{marginBottom: '1rem'}} variant="h6">Filtry</Typography>
            <CitySelect onChange={onChangeCity} value={city}/>
            <SpecializationsContainer>
                <SpecializationsSelect onChange={onChangeSpecialization} value={specializations} />
            </SpecializationsContainer>
            <Rating />
            </Container>
        </FilterContainer>
    );
}

export default FilterListSection;