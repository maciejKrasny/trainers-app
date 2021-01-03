import {Avatar, CardActions, CardContent, CardMedia, IconButton, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card/Card';
import CardHeader from '@material-ui/core/CardHeader';
import React, {useState} from 'react';
import photo from '../../components/FilterSection/landing_img.png';
import {ReadMore} from "../PostCard/PostCard.styled";

interface EventCardProps {
    title: string;
    content: string;
    image: string;
    id: string;
    date: string;
}

const EventCard: React.FC<EventCardProps> = ({content, title, id, image, date}) => {
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
    const shorterContent = content.length > 300 ? content.substr(0, 300) : content;
    return (
        <Card style={{marginBottom: '1rem'}}>
            <CardHeader
                title={title}
                subheader={date}
            />
            <CardMedia
                style={{width: '100%', height: 300}}
                image={photo}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {isReadMoreOpen ? content : `${shorterContent}...`}
                    {content.length > 300 && <ReadMore onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}>{isReadMoreOpen ? "Pokaż mniej" : "Pokaż więcej"}</ReadMore>}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default EventCard;