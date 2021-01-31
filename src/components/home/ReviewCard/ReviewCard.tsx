import React, {useState} from 'react';
import {Avatar, Card, CardContent, Typography} from "@material-ui/core";
import {
    DetailsContainer,
    InfoContainer,
    Location,
    Name,
    useStyles
} from "../MostPopularTrainerCard/MostPopularTrainerCard.styled";
import { Rating } from '@material-ui/lab';
import {ReadMore} from "../PostCard/PostCard.styled";
import CardHeader from "@material-ui/core/CardHeader";
import DropdownReport from "../DropdownReport/DropdownReport";

interface ReviewCardProps {
    id: string;
    name: string;
    surname: string;
    rating: number;
    content: string;
    location: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({id, name, content,rating, surname, location}) => {
    const classes = useStyles();
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
    const shorterContent = content.length > 300 ? content.substr(0, 300) : content;
    console.log(id, 'a')
    return (
        <Card style={{marginTop: '1rem'}}>
            <DetailsContainer >
                <Avatar className={classes.avatar}>{`${name[0]}${surname[0]}`}</Avatar>
                <InfoContainer>
                    <Name>{`${name} ${surname}`}</Name>
                    <Location>{location}</Location>
                </InfoContainer>
                <div style={{marginLeft: "auto"}}>
                    <DropdownReport reportId={id} reportType="REVIEW"/>
                </div>
            </DetailsContainer>
            <CardContent>
                <Typography color="textPrimary">Ocena</Typography>
                <Rating value={rating} style={{marginLeft: -2}} readOnly/>
                <Typography color="textPrimary">Recenzja</Typography>
                <Typography color="textSecondary">
                    {isReadMoreOpen && content.length > 300 ? content : `${shorterContent}`}
                    {content.length > 300 && <ReadMore onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}>{isReadMoreOpen ? "Pokaż mniej" : "Pokaż więcej"}</ReadMore>}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ReviewCard;