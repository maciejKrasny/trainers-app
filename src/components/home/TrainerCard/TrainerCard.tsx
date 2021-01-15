import React from "react";
import {Avatar, Button, Typography} from '@material-ui/core';
import {
    SpecializationsContainer,
    StyledCard,
    StyledChip,
    ViewProfileButtonContainer,
    StyledCardContent,
    useStyles,
    DetailsContainer,
    Location,
    DetailsInfoContainer
} from './TrainerCard.styled';
import { useHistory } from "react-router-dom";
import {Rating} from "@material-ui/lab";

interface TrainerCardProps {
    id: number;
    name: string;
    location: string;
    description: string;
    specializations: string[];
    initials: string;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ id, name, description, specializations, location, initials }) => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <StyledCard>
            <StyledCardContent>
                <DetailsContainer>
                    <Avatar className={classes.avatar} >{initials}</Avatar>
                    <DetailsInfoContainer>
                        <Typography variant="h5" component="h5">{name}</Typography>
                        <Location>{location}</Location>
                    </DetailsInfoContainer>
                </DetailsContainer>
                <Rating readOnly value={3}/>
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
