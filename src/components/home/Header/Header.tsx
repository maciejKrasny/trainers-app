import {Avatar, Typography} from '@material-ui/core';
import React, {useEffect, useState} from 'react'
import {HeaderContainer, Logo, BackgroundContainer, ActionContainer, Action, useStyles, StyledLink} from './Header.styled';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Dropdown from '../Dropdown/Dropdown';
import {useDispatch, useSelector} from 'react-redux';
import logo from './logo.png';
import Modal, {ModalType} from "../Modal/Modal";
import useOnClickOutside from "../../../utils/hooks/useOnClickOutside";
import {Wrapper} from "../Dropdown/Dropdown.styled";
import {User} from "../../../redux/modules/Users/types";
import {KeyboardArrowLeft} from "@material-ui/icons";
import { Link } from 'react-router-dom';
import {setError} from "../../../redux/modules/Authorization/actions";
import {api_url} from "../../../api/setup";
import {AddCommentContainer} from "../PostCard/PostCard.styled";

interface HeaderProps {
    isSticky?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSticky = true }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { authorization } = useSelector(state => state.authorizationUsers);

    const [currentModal, setCurrentModal] = React.useState<ModalType>('');

    const handleOnCloseModal = () => {
        dispatch(setError(false));
        setCurrentModal('');
    }

    return (
        <BackgroundContainer isSticky={isSticky}>
            <HeaderContainer>
                <Logo to="/">
                    <img src={logo} height={70}/>
                </Logo>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <StyledLink to="/trenerzy" isLogin={Boolean(authorization)}>
                        <KeyboardArrowLeft />
                        Przejdź do listy trenerów
                    </StyledLink>
                {!authorization
                    ? (
                        <ActionContainer>
                            |
                            <Action onClick={() => setCurrentModal('signIn')}>Zaloguj się</Action>
                            <Action onClick={() => setCurrentModal('signUp')}>Zarejestruj się</Action>
                        </ActionContainer>
                    ) : (
                        <Dropdown activator={
                            <Avatar className={classes.avatar} src={authorization.user.userDetails.avatar ? `http://trenerzy.tomkowiak.eu/avatars/${authorization.user.userDetails.avatar}` : undefined}>{`${authorization.user.userDetails.firstName[0]}${authorization.user.userDetails.lastName[0]}`}</Avatar>
                        } />
                    )}
                </div>
            </HeaderContainer>
            <Modal isOpen={Boolean(currentModal)} type={currentModal} onClose={() => handleOnCloseModal()} />
        </BackgroundContainer>
    );
};

export default Header;
