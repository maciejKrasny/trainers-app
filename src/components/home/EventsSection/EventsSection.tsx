import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EventCard from "../EventCard/EventCard";
import * as eventThunks from "../../../redux/modules/Events/thunks";
import {CircularProgress} from "@material-ui/core";
import {useHttpErrorHandler} from "../../../utils/hooks/useHttpErrorHandler";

interface EventsSectionProps {
    userId: string;
}

const EventsSection: React.FC<EventsSectionProps> = ({ userId }) => {
    const { events, pending } = useSelector(state => state.events);
    const handler = useHttpErrorHandler();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(eventThunks.fetchEvents(userId, handler));
    }, [userId]);

    if (pending) {
        return (<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem'}}>
            <CircularProgress/>
            </div>
        )
    }

    return (
        <div style={{padding: '1.5rem'}}>
        {events.filter(event => event.author._id === userId).length
        ? (events.filter(event => event.author._id === userId).reverse().map(event => (
                <EventCard
                    image={'event.image'}
                    title={event.title}
                    id={event._id}
                    date={event.eventDetails.dateTime}
                    content={event.content}
                    place={event.eventDetails.place}
                />
            ))
            )
            : <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>Brak wydarzeń</div>}
        </div>
    );
}

export default EventsSection;