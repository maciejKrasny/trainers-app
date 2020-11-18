import { Typography } from '@material-ui/core';
import React from 'react'
import { HeaderContainer, Logo } from './Header.styled';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Dropdown from '../Dropdown/Dropdown';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo>
                <Typography variant="h4" component="h4">
                    Trenerzy.pl
                </Typography>
            </Logo>
            <Dropdown
                activator={<AccountCircleIcon fontSize="large" />}
            />
        </HeaderContainer>
    );
};

export default Header;
