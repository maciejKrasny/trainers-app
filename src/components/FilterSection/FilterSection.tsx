import React from 'react';
import { FilterContainer, CitySelectContainer, SpecializationsSelectContainer } from './FilterSection.styled';
import SpecializationsSelect from '../Selects/SpecializationsSelect';
import CitySelect from '../Selects/CitySelect';

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
            <CitySelectContainer>
                <CitySelect
                    onChange={handleOnChangeCity}
                    value={city}
                />
            </CitySelectContainer>
            <SpecializationsSelectContainer>
                <SpecializationsSelect onChange={onChangeSpecializations} value={specializations} />
            </SpecializationsSelectContainer>
        </FilterContainer>
    )
};

export default FilterSection;
