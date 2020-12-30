import { Typography } from '@material-ui/core';
import React from 'react'
import { HeaderContainer, Logo, BackgroundContainer, ActionContainer, Action } from './Header.styled';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Dropdown from '../Dropdown/Dropdown';
import { useSelector } from 'react-redux';
import logo from './logo.png';
import Modal, {ModalType} from "../Modal/Modal";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import {Wrapper} from "../Dropdown/Dropdown.styled";

interface HeaderProps {
    isSticky?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSticky = true }) => {
    const { currentAuthorizationUser } = useSelector(state => state.authorizationUsers);

    const [isOpen, setIsOpen] = React.useState(false);
    const [currentModal, setCurrentModal] = React.useState<ModalType>('');


    const handleOnChangeCurrentModal = (type: ModalType) => {
        setCurrentModal(type);
        setIsOpen(false);
    }

    return (
        <BackgroundContainer isSticky={isSticky}>
            <HeaderContainer>
                <Logo to="/">
                    <img src={logo} height={70}/>
                </Logo>
                <ActionContainer>
                    <Action onClick={() => handleOnChangeCurrentModal('signIn')}>Zaloguj się</Action>
                    <Action onClick={() => handleOnChangeCurrentModal('signUp')}>Zarejestruj się</Action>
                </ActionContainer>
            </HeaderContainer>
            <Modal isOpen={Boolean(currentModal)} type={currentModal} onClose={() => setCurrentModal('')} />
        </BackgroundContainer>
    );
};

export default Header;
