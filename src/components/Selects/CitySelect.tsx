import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react"
import { specializations as mockedSpecializations, cities } from '../../utils/consts/consts';

interface CitySelectProps {
    onChange: (_: React.ChangeEvent<{}>, newValue: any) => void;
    value?: string;
    id?: string;
}

const CitySelect: React.FC<CitySelectProps> = ({ onChange, value, id }) => {
    return (
        <Autocomplete
            id={id}
            value={value}
            onChange={onChange}
            options={cities}
            getOptionLabel={(option: any) => option}
            renderInput={(params: any) => <TextField {...params} size="small" label="Miasto" variant="outlined" />}
        />
    )
};

export default CitySelect;
