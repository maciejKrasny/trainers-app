import {Avatar, Typography} from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import {HeaderContainer, Logo, BackgroundContainer, ActionContainer, Action, useStyles} from './Header.styled';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Dropdown from '../Dropdown/Dropdown';
import { useSelector } from 'react-redux';
import logo from './logo.png';
import Modal, {ModalType} from "../Modal/Modal";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import {Wrapper} from "../Dropdown/Dropdown.styled";
import {User} from "../../redux/modules/Users/types";

interface HeaderProps {
    isSticky?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSticky = true }) => {
    const classes = useStyles();

    const { currentAuthorizationUser } = useSelector(state => state.authorizationUsers);
    const { users } = useSelector(state => state.users);

    const [currentUser, setCurrentUser] = useState<User | undefined>();
    const [currentModal, setCurrentModal] = React.useState<ModalType>('');

    useEffect(() => {
        const curUser = users.find(user => user.id === currentAuthorizationUser?.userId);
        setCurrentUser(curUser);
    }, [currentAuthorizationUser?.id])


    const handleOnChangeCurrentModal = (type: ModalType) => {
        setCurrentModal(type);
    }

    return (
        <BackgroundContainer isSticky={isSticky}>
            <HeaderContainer>
                <Logo to="/">
                    <img src={logo} height={70}/>
                </Logo>
                {!currentAuthorizationUser?.id
                    ? (
                        <ActionContainer>
                            <Action onClick={() => handleOnChangeCurrentModal('signIn')}>Zaloguj się</Action>
                            <Action onClick={() => handleOnChangeCurrentModal('signUp')}>Zarejestruj się</Action>
                        </ActionContainer>
                    ) : (
                        <Dropdown activator={<Avatar className={classes.avatar}>{`${currentUser?.name[0]}${currentUser?.surname[0]}`}</Avatar>} />
                    )}
            </HeaderContainer>
            <Modal isOpen={Boolean(currentModal)} type={currentModal} onClose={() => setCurrentModal('')} />
        </BackgroundContainer>
    );
};

export default Header;
