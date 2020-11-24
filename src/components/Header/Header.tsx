import { Typography } from '@material-ui/core';
import React from 'react'
import { HeaderContainer, Logo } from './Header.styled';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Dropdown from '../Dropdown/Dropdown';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
    const { currentAuthorizationUser } = useSelector(state => state.authorizationUsers);
    return (
        <HeaderContainer>
            <Logo to="/">
                <Typography variant="h4" component="h4">
                    Trenerzy.pl
                </Typography>
            </Logo>
            <Dropdown
                activator={<AccountCircleIcon fontSize="large" style={{ color: currentAuthorizationUser ? '#3f51b5' : '#A3A6B1' }} />}
            />
        </HeaderContainer>
    );
};

export default Header;
