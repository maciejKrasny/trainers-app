import React from 'react';
import {TrainerCard, DetailsContainer, InfoContainer, useStyles, Name, Location, ReviewContainer, VisitButtonContainer} from "./MostPopularTrainerCard.styled";
import {Avatar, Button} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {useHistory} from "react-router-dom";

interface MostPopularTrainerCardProps {
    id: string;
    name: string;
    location: string;
    initials: string;
    reviewCreator: string;
    reviewContent: string;
    reviewRating: number;
}

const MostPopularTrainersCard: React.FC<MostPopularTrainerCardProps> = ({ id, name, location, initials, reviewCreator, reviewRating, reviewContent}) => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <TrainerCard>
            <DetailsContainer>
                <Avatar className={classes.avatar}>{initials}</Avatar>
                <InfoContainer>
                    <Name>{name}</Name>
                    <Location>{location}</Location>
                </InfoContainer>
            </DetailsContainer>
            <ReviewContainer>
                <p>{reviewCreator} dodał/a recenzję</p>
                <p>{reviewContent}</p>
                <p>Wystawił ocenę</p>
                <Rating style={{marginLeft: -2}} readOnly  value={reviewRating}/>
            </ReviewContainer>
            <VisitButtonContainer>
                <Button variant="contained" color="primary" onClick={() => history.push(`/${id}`)}>Odwiedź</Button>
            </VisitButtonContainer>
        </TrainerCard>
    );
}

export default MostPopularTrainersCard;