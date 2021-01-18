import React from 'react';
import {Card, Typography} from "@material-ui/core";
import { Container, FilterContainer, SpecializationsContainer } from './FilterListSection.styled';
import CitySelect from "../Selects/CitySelect";
import InputWithChips from "../InputWithChips/InputWithChips";
import SpecializationsSelect from "../Selects/SpecializationsSelect";
import { Rating } from '@material-ui/lab';

interface FilterListSectionProps {
    city: string;
    rating: number;
    specializations: string[];
    onChangeCity: (value: string) => void;
    onChangeSpecialization: (value: string[]) => void;
    onChangeRating: (value: number) => void;
}

const FilterListSection: React.FC<FilterListSectionProps> = ({ onChangeRating, rating, city, specializations, onChangeCity, onChangeSpecialization}) => {
    return (
        <FilterContainer>
        <Container>
            <Typography style={{marginBottom: '1rem'}} variant="h6">Filtry</Typography>
            <CitySelect onChange={onChangeCity} value={city}/>
            <SpecializationsContainer>
                <SpecializationsSelect onChange={onChangeSpecialization} value={specializations} />
            </SpecializationsContainer>
            <Typography style={{marginTop: '-0.5rem', color: 'rgba(0, 0, 0, 0.54)'}} >Ocena</Typography>
            <Rating style={{marginLeft: '-0.125rem'}} value={rating} onChange={(_, value) => onChangeRating(value || 0)}/>
            </Container>
        </FilterContainer>
    );
}

export default FilterListSection;