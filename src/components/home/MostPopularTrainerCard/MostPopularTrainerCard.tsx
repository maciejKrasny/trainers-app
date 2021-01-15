import React from 'react';
import {TrainerCard, DetailsContainer, InfoContainer, useStyles, Name, Location, ReviewContainer, VisitButtonContainer} from "./MostPopularTrainerCard.styled";
import {Avatar, Button} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {useHistory} from "react-router-dom";

interface MostPopularTrainerCardProps {
    id: number;
    name: string;
    location: string;
    initials: string;
}

const MostPopularTrainersCard: React.FC<MostPopularTrainerCardProps> = ({ id, name, location, initials}) => {
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
                <p>Maciej Kraśny dodał recenzję</p>
                <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60.</p>
                <p>Wystawił ocenę</p>
                <Rating style={{marginLeft: -2}} readOnly  value={5}/>
            </ReviewContainer>
            <VisitButtonContainer>
                <Button variant="contained" color="primary" onClick={() => history.push(`/${id}`)}>Odwiedź</Button>
            </VisitButtonContainer>
        </TrainerCard>
    );
}

export default MostPopularTrainersCard;