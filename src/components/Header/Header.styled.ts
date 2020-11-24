import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GridContainer } from '../Grid/Grid.styled';

export const HeaderContainer = styled(GridContainer)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 1rem;
    align-items: center;
`;

export const Logo = styled(Link)`
    text-decoration: none;
    color: currentColor;
    color: ${(props) => props.theme.primary};
    padding: 1rem 0;
`;
