import {TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import React from "react"
import {hexToRGB} from "../../../utils/styles/utils";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";

interface CitySelectProps {
    onChange: (newValue: string) => void;
    value?: string;
    id?: string;
    transparent?: boolean;
}

const useStyles = makeStyles({
    paper: {
        background: `${hexToRGB('#ffffff', 0.8)}`
    },
    popper: {
        marginTop: '5px',
        background: 'transparent'
    },
});

const CitySelect: React.FC<CitySelectProps> = ({ onChange, value, id, transparent= true }) => {
    const { cities } = useSelector(state => state.formData);
    const classes = useStyles();

    const handleOnChange = (_: React.ChangeEvent<{}>, newValue: any) => {
        onChange(newValue);
    }

    return (
        <Autocomplete
            id={id}
            classes={transparent ?
                {
                    paper: classes.paper,
                    popper: classes.popper
                }
                : {}}
            value={value}
            onChange={handleOnChange}
            options={cities}
            autoComplete={false}
            getOptionLabel={(option: any) => option}
            renderInput={(params: any) => <TextField autoComplete={false} {...params} size="small" label="Miasto" variant="outlined" />}
        />
    )
};

export default CitySelect;
