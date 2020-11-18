import { Chip, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';

export interface InputWithChipsProps {
    onChange: (value: string[]) => void;
    options: string[];
    value: string[];
}

const InputWithChips: React.FC<InputWithChipsProps> = ({ value, onChange, options }) => {
    const handleOnChange = (_: React.ChangeEvent<{}>, value: string[]) => {
        onChange(value);
    }

    return (
        <div>
            <Autocomplete
                id="specializations"
                multiple
                value={value}
                options={options}
                getOptionLabel={(option: any) => option}
                style={{ width: 400, height: '30' }}
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
