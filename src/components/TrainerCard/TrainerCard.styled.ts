import styled from 'styled-components';
import { Card, CardContent, Chip } from '@material-ui/core';

export const StyledCard = styled(Card)`
    position: relative;
    margin: 1rem 0;
`;

export const StyledCardContent = styled(CardContent)`
    position: relative;
`;

export const SpecializationsContainer = styled.div`
    margin-top: 1rem;
`;

export const StyledChip = styled(Chip)`
    margin-left: 0.5rem;

    :first-child {
        margin-left: 0;
    }
`;

export const ViewProfileButtonContainer = styled.div`
    position: absolute;
    right: 2rem;
    bottom: 1rem;
`;