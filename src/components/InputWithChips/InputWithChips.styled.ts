import styled from 'styled-components';
import { Autocomplete } from '@material-ui/lab';
import {makeStyles} from "@material-ui/core/styles";
import {hexToRGB} from "../../utils/styles/utils";

export const StyledAutocomplete = styled(Autocomplete)`
`;

export const useStyles = makeStyles({
    paper: {
        background: `${hexToRGB('#ffffff', 0.8)}`
    },
    popper: {
        marginTop: '5px',
        background: 'transparent'
    },
});