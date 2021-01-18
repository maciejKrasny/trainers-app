import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Modal, {ModalType} from "../Modal/Modal";
import useOnClickOutside from "../../../utils/hooks/useOnClickOutside";
import {DropdownAction, DropdownButton, DropdownContainer, Wrapper} from "../Dropdown/Dropdown.styled";
import {Typography} from "@material-ui/core";
import * as authorizationThunks from "../../../redux/modules/Authorization/thunks";
import {MoreVert} from "@material-ui/icons";
import { StyledIconButton } from "./DropdownReport.styled";

interface DropdownReportProps {
}

const DropdownReport: React.FC<DropdownReportProps> = ({  }) => {
    const { authorization } = useSelector(state => state.authorizationUsers);
    const dropdownWrapper = React.useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = React.useState(false);
    const [currentModal, setCurrentModal] = React.useState<ModalType>('');

    const handleActivatorClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOnOpenModal = () => {
        setCurrentModal('report');
    }

    useOnClickOutside(dropdownWrapper, () => setIsOpen(false));

    return (
        <Wrapper ref={dropdownWrapper}>
            {authorization?.user._id &&
                <>
                    <DropdownButton type="button" onKeyDown={handleActivatorClick} onClick={handleActivatorClick}>
                        <StyledIconButton>
                            <MoreVert />
                        </StyledIconButton>
                    </DropdownButton>
                        <DropdownContainer isOpen={isOpen}>
                            <DropdownAction onClick={handleOnOpenModal}>
                                <Typography>Zgłoś</Typography>
                            </DropdownAction>
                        </DropdownContainer>
                        <Modal isOpen={Boolean(currentModal)} type={currentModal} onClose={() => setCurrentModal('')} />
                </>
            }
        </Wrapper>
    );
}

export default DropdownReport;