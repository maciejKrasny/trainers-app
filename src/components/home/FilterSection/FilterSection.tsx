import React from 'react';
import { FilterContainer, CitySelectContainer, SpecializationsSelectContainer, Filters, BackgroundContainer, FindButton } from './FilterSection.styled';
import SpecializationsSelect from '../Selects/SpecializationsSelect';
import CitySelect from '../Selects/CitySelect';
import {green} from "@material-ui/core/colors";
import {useHistory} from "react-router-dom";
import queryString from "querystring";

export interface FilterSectionProps {
    city: string;
    specializations: string[];
    onChangeCity: (value: string) => void;
    onChangeSpecializations: (value: string[]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ city, specializations, onChangeCity, onChangeSpecializations }) => {
    const history = useHistory();

    const handleOnClickSearch = () => {
        const specsString = specializations.join(',').trim();
        if (city && specializations.length) {
            history.push({
                pathname: 'trenerzy',
                search: `miasto=${city}&aktywnosci=${specsString}`
            })
        } else if (city) {
            history.push({
                pathname: 'trenerzy',
                search: `miasto=${city}`
            })
        } else if (specializations.length) {
            history.push({
                pathname: 'trenerzy',
                search: `aktywnosci=${specsString}`
            })
        } else {
            history.push('trenerzy')
        }
    }

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
                    <FindButton variant="contained" onClick={handleOnClickSearch} >Szukaj</FindButton>
                </BackgroundContainer>
            </Filters>
        </FilterContainer>
    )
};

export default FilterSection;
