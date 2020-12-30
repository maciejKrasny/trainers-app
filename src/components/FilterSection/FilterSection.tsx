import React from 'react';
import { FilterContainer, CitySelectContainer, SpecializationsSelectContainer, Filters, BackgroundContainer, FindButton } from './FilterSection.styled';
import SpecializationsSelect from '../Selects/SpecializationsSelect';
import CitySelect from '../Selects/CitySelect';
import {green} from "@material-ui/core/colors";

export interface FilterSectionProps {
    city: string;
    specializations: string[];
    onChangeCity: (value: string) => void;
    onChangeSpecializations: (value: string[]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ city, specializations, onChangeCity, onChangeSpecializations }) => {


    return (
        <FilterContainer>
            <Filters>
                <BackgroundContainer>
                    <CitySelectContainer>
                        <CitySelect
                            onChange={onChangeCity}
                            value={city}
                        />
                    </CitySelectContainer>
                    <SpecializationsSelectContainer>
                        <SpecializationsSelect onChange={onChangeSpecializations} value={specializations} />
                    </SpecializationsSelectContainer>
                    <FindButton variant="contained"  >Szukaj</FindButton>
                </BackgroundContainer>
            </Filters>
        </FilterContainer>
    )
};

export default FilterSection;
