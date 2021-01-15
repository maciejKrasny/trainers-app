import React from 'react';
import { UnavailableSiteContainer } from './TrainerSection.styled';
import {Typography} from "@material-ui/core";

interface UnavailableSiteProps {

}

const UnavailableSite: React.FC<UnavailableSiteProps> = () => {
    return (
        <UnavailableSiteContainer>
            <Typography variant="h3">
                Ta strona jest niedostępna
            </Typography>
        </UnavailableSiteContainer>
    );
}

export default UnavailableSite;