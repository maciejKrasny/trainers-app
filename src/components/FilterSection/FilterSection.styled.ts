import { Autocomplete } from '@material-ui/lab';
import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledAutocomplete = styled(Autocomplete)`
    margin-right: 1rem;
    width: 350px;
`;