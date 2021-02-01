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
    DetailsInfoContainer,
    Description
} from './TrainerCard.styled';
import { useHistory } from "react-router-dom";
import {Rating} from "@material-ui/lab";
import {api_url} from "../../../api/setup";

interface TrainerCardProps {
    id: string;
    name: string;
    location: string;
    description: string;
    specializations: string[];
    initials: string;
    rating: number;
    avatar?: string;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ avatar, id, name, description, specializations, location, initials, rating }) => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <StyledCard>
            <StyledCardContent>
                <DetailsContainer>
                    <Avatar className={classes.avatar} src={avatar ? `http://trenerzy.tomkowiak.eu/avatars/${avatar}` : undefined}>{initials}</Avatar>
                    <DetailsInfoContainer>
                        <Typography variant="h5" component="h5">{name}</Typography>
                        <Location>{location}</Location>
                    </DetailsInfoContainer>
                </DetailsContainer>
                <Rating readOnly value={rating}/>
                <Description color="textSecondary">
                    {description}
                </Description>
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
