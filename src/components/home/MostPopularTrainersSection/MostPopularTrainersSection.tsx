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
                {users?.map(user => (
                    <MostPopularTrainersCard
                        id={user._id}
                        name={`${user.userDetails.firstName} ${user.userDetails.lastName}`}
                        location={user.userDetails.city || ''}
                        initials={`${user.userDetails.firstName[0]}${user.userDetails.lastName[0]}`}
                        reviewCreator={'Maciej Kraśny'}
                        reviewContent={"dfsfsdfsd fsdf sdf sdf sdf sdf sdf sdf sdsdfsdfwerwef "}
                        reviewRating={4.5}
                    />
                ))}
            </MostPopularTrainersGrid>
            <AllTrainersLink to="/trenerzy">Zobacz wszystkich trenerów</AllTrainersLink>
        </MostPopularTrainersContainer>
    );
}

export default MostPopularTrainersSection;