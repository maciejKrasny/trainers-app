import React from 'react';
import { FilterContainer, StyledAutocomplete } from './FilterSection.styled';
import { TextField } from '@material-ui/core';
import InputWithChips from '../InputWithChips/InputWithChips';
import { specializations as mockedSpecializations, cities } from '../../utils/consts/consts';

export interface FilterSectionProps {
    city: string;
    specializations: string[];
    onChangeCity: (value: string) => void;
    onChangeSpecializations: (value: string[]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ city, specializations, onChangeCity, onChangeSpecializations }) => {
    const handleOnChangeCity = (_: React.ChangeEvent<{}>, newValue: any) => {
        onChangeCity(newValue);
    }

    return (
        <FilterContainer>
            <StyledAutocomplete
                id="city"
                value={city}
                onChange={handleOnChangeCity}
                options={cities}
                getOptionLabel={(option: any) => option}
                renderInput={(params: any) => <TextField {...params} size="small" label="Miasto" variant="outlined" />}

            />
            <InputWithChips value={specializations} options={mockedSpecializations} onChange={onChangeSpecializations} />
        </FilterContainer>
    )
};

export default FilterSection;
