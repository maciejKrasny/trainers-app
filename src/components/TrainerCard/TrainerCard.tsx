import React from "react";
import { Button, Typography } from '@material-ui/core';
import { SpecializationsContainer, StyledCard, StyledChip, ViewProfileButtonContainer, StyledCardContent } from './TrainerCard.styled';
import { useHistory } from "react-router-dom";

interface TrainerCardProps {
    id: number;
    name: string;
    description: string;
    specializations: string[];
}

const TrainerCard: React.FC<TrainerCardProps> = ({ id, name, description, specializations }) => {
    const history = useHistory();

    return (
        <StyledCard>
            <StyledCardContent>
                <Typography variant="h5" component="h5">{name}</Typography>
                <Typography color="textSecondary">
                    {description}
                </Typography>
                <SpecializationsContainer>
                    {specializations.map(specialization => (
                        <StyledChip key={specialization} label={specialization} variant="outlined" />
                    ))}
                </SpecializationsContainer>
                <ViewProfileButtonContainer>
                    <Button variant="contained" color="primary" onClick={() => history.push(`/${id}`)}>Odwiedź</Button>
                </ViewProfileButtonContainer>
            </StyledCardContent>
        </StyledCard>
    )
};

export default TrainerCard;
