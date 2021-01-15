import React from 'react';
import {MostPopularTrainersContainer, MostPopularTrainersTitle, MostPopularTrainersGrid, MostPopularTrainersDescription, AllTrainersLink } from './MostPopularTrainersSection.styled';
import {useSelector} from "react-redux";
import MostPopularTrainersCard from "../MostPopularTrainerCard/MostPopularTrainerCard";

const MostPopularTrainersSection: React.FC = () => {
    const { users } = useSelector(state => state.users);

    return (
        <MostPopularTrainersContainer>
            <MostPopularTrainersTitle variant="h5" >NAJPOPULARNIEJSI TRENERZY</MostPopularTrainersTitle>
            <MostPopularTrainersDescription>Znajdź wśród nich swojego mentora</MostPopularTrainersDescription>
            <MostPopularTrainersGrid>
                {users.map(user => (
                    <MostPopularTrainersCard
                        id={user.id}
                        name={`${user.name} ${user.surname}`}
                        location={user.city}
                        initials={`${user.name[0]}${user.surname[0]}`}
                    />
                ))}
            </MostPopularTrainersGrid>
            <AllTrainersLink to="/trenerzy">Zobacz wszystkich trenerów</AllTrainersLink>
        </MostPopularTrainersContainer>
    );
}

export default MostPopularTrainersSection;