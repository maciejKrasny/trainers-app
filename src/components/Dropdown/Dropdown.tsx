import React from "react";
import { Wrapper, DropdownContainer, DropdownButton, DropdownAction } from "./Dropdown.styled";
import useOnClickOutside from "../../utils/hooks/useOnClickOutside";
import { Typography } from "@material-ui/core";

interface Props {
    activator: React.ReactNode;
}

const Dropdown: React.FC<Props> = ({ children, activator }) => {
    const dropdownWrapper = React.useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = React.useState(false);

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
                <DropdownAction onClick={() => { }}>
                    <Typography>Zaloguj się</Typography>
                </DropdownAction>
            </DropdownContainer>
        </Wrapper>
    );
};

export default Dropdown;
