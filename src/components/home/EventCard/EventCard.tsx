import {Avatar, CardActions, CardContent, CardMedia, IconButton, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card/Card';
import CardHeader from '@material-ui/core/CardHeader';
import React, {useState} from 'react';
import {ReadMore} from "../PostCard/PostCard.styled";
import DropdownReport from "../DropdownReport/DropdownReport";
import dayjs from "dayjs";
import {api_url} from "../../../api/setup";

interface EventCardProps {
    title: string;
    content: string;
    image?: string;
    id: string;
    date: string;
    place: string;
}


const featuredImageUrl = (featuredImage = '') => {
    return `http://trenerzy.tomkowiak.eu/featured-images/${featuredImage}`;
}

const EventCard: React.FC<EventCardProps> = ({place, content, title, id, image, date}) => {
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
    const shorterContent = content.length > 300 ? content.substr(0, 300) : content;
    return (
        <Card style={{marginBottom: '1rem'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <CardHeader
                title={title}
                subheader={`${place}, ${dayjs(date).format('DD/MM/YYYY HH:mm')}`}
            />
                <div style={{marginTop: 16}}>
                    <DropdownReport reportType="EVENT" reportId={id}/>
                </div>
            </div>
            <CardMedia
                style={{width: '100%', height: 300}}
                image={featuredImageUrl(image)}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {isReadMoreOpen ? content : `${shorterContent}`}
                    {content.length > 300 && <ReadMore onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}>{isReadMoreOpen ? "Pokaż mniej" : "Pokaż więcej"}</ReadMore>}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default EventCard;