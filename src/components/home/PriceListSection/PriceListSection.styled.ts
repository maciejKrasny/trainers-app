import { Button } from '@material-ui/core';
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';

export const PriceListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1.5rem;
`;

export const StyledButton = styled(Button)`
    margin-bottom: 1rem;
`;

export const StyledCreateIcon = styled(CreateIcon)`
    cursor: pointer;
`;