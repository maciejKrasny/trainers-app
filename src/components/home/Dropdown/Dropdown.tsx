import React from "react";
import { Wrapper, DropdownContainer, DropdownButton, DropdownAction } from "./Dropdown.styled";
import useOnClickOutside from "../../../utils/hooks/useOnClickOutside";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Modal, { ModalType } from "../Modal/Modal";
import { useHistory } from "react-router-dom";
import * as authorizationThunks from '../../../redux/modules/Authorization/thunks';

interface Props {
    activator: React.ReactNode;
}

const Dropdown: React.FC<Props> = ({ children, activator }) => {
    const { authorization } = useSelector(state => state.authorizationUsers);
    const dropdownWrapper = React.useRef<HTMLDivElement>(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = React.useState(false);
    const [currentModal, setCurrentModal] = React.useState<ModalType>('');

    const handleActivatorClick = () => {
        setIsOpen(!isOpen);
    };

    useOnClickOutside(dropdownWrapper, () => setIsOpen(false));

    return (
        <Wrapper ref={dropdownWrapper}>
            <DropdownButton type="button" onKeyDown={handleActivatorClick} onClick={handleActivatorClick}>
                {activator}
            </DropdownButton>
            <DropdownContainer isOpen={isOpen}>
                <>
                    <DropdownAction onClick={() => history.push(`/`)}>
                        <Typography>Strona główna</Typography>
                    </DropdownAction>
                    {authorization?.user.type === 'TRAINER' && (<DropdownAction onClick={() => history.push(`/${authorization?.user._id}`)}>
                        <Typography>Profil</Typography>
                    </DropdownAction>)}
                    <DropdownAction onClick={() => history.push(`/obserwowane`)}>
                        <Typography>Obserwowane posty</Typography>
                    </DropdownAction>
                    <DropdownAction onClick={() => window.location.assign(`/management/`)}>
                        <Typography>Panel użytkownika</Typography>
                    </DropdownAction>
                    <DropdownAction onClick={() => { dispatch(authorizationThunks.clearCurrentAuthorizationUser()); setIsOpen(false); history.push('/')}}>
                        <Typography>Wyloguj się</Typography>
                    </DropdownAction>
                </>
            </DropdownContainer>
            <Modal isOpen={Boolean(currentModal)} type={currentModal} onClose={() => setCurrentModal('')} />
        </Wrapper>
    );
};

export default Dropdown;
