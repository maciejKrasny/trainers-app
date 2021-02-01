import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import EventCard from "../EventCard/EventCard";
import * as eventThunks from "../../../redux/modules/Events/thunks";
import {Button, CircularProgress} from "@material-ui/core";
import {useHttpErrorHandler} from "../../../utils/hooks/useHttpErrorHandler";
import {resetEvents} from "../../../redux/modules/Events/actions";
import {useParams} from "react-router-dom";

interface EventsSectionProps {
    userId: string;
}

const EventsSection: React.FC<EventsSectionProps> = ({ userId }) => {
    const { id } = useParams<{ id: string }>();
    const { events, pending, currentPage, totalPages } = useSelector(state => state.events);
    const handler = useHttpErrorHandler();
    const dispatch = useDispatch();

    const handlePostsFetch = () => {
        dispatch(eventThunks.fetchEvents(currentPage + 1, id, handler));
    }

    useEffect(() => {
        handlePostsFetch();

        return () => {
            dispatch(resetEvents());
        }
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
        ? (
            <>
                {events.filter(event => event.author._id === userId).reverse().map(event => (
                    <EventCard
                        image={event.image}
                        title={event.title}
                        id={event._id}
                        date={event.eventDetails.dateTime}
                        content={event.content}
                        place={event.eventDetails.place}
                    />
                ))}
                {!pending && totalPages >= currentPage && (
                    <Button onClick={handlePostsFetch}>Załaduj więcej</Button>
                )}
            </>
        )
            : <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>Brak wydarzeń</div>}
        </div>
    );
}

export default EventsSection;