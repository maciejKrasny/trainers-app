import React from 'react';
import {useSelector} from "react-redux";
import EventCard from "../EventCard/EventCard";

interface EventsSectionProps {

}

const EventsSection: React.FC<EventsSectionProps> = () => {
    const { users } = useSelector(state => state.users);
    return (
        <div style={{padding: '1.5rem'}}>
        {users.map(user => (
                <EventCard
                    image={'a'}
                    title="Tytuł"
                    id={"a"}
                    date={"10-12-2020"}
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
            ))}
        </div>
    );
}

export default EventsSection;