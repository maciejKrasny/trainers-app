import { Chip, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';
import {useStyles} from "./InputWithChips.styled";

export interface InputWithChipsProps {
    onChange: (value: string[]) => void;
    options: string[];
    value?: string[];
    id?: string;
}

const InputWithChips: React.FC<InputWithChipsProps> = ({ value, onChange, options, id }) => {
    const classes = useStyles();
    const handleOnChange = (_: React.ChangeEvent<{}>, value: string[]) => {
        onChange(value);
    }

    return (
        <div>
            <Autocomplete
                id={id}
                multiple
                classes={{
                    popper: classes.popper,
                    paper: classes.paper
                }}
                value={value}
                options={options}
                getOptionLabel={(option: any) => option}
                style={{ width: '100%', height: '30' }}
                filterSelectedOptions
                onChange={handleOnChange}
                renderInput={(params: any) => <TextField {...params} size="small" label="Specjalizacja" variant="outlined" />}
                renderTags={(value: string[], getTagProps) =>
                    value.map((option: string, index: number) => (
                        <Chip variant="outlined" label={option} {...getTagProps({ index })} size="small" style={{height: 22}}/>
                    ))
                }
            />
        </div>
    )
};

export default InputWithChips;
