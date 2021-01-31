import React from 'react';
import {TrainerCardContainer, MostPopularTrainersContainer, MostPopularTrainersTitle, MostPopularTrainersGrid, MostPopularTrainersDescription, AllTrainersLink } from './MostPopularTrainersSection.styled';
import {useSelector} from "react-redux";
import TrainerCard from "../TrainerCard/TrainerCard";

const MostPopularTrainersSection: React.FC = () => {
    const { mostPopularUsers } = useSelector(state => state.users);

    return (
        <MostPopularTrainersContainer>
            <MostPopularTrainersTitle variant="h5" >NAJPOPULARNIEJSI TRENERZY</MostPopularTrainersTitle>
            <MostPopularTrainersDescription>Znajdź wśród nich swojego mentora</MostPopularTrainersDescription>
            <MostPopularTrainersGrid>
                {mostPopularUsers?.map(trainer => (
                    <TrainerCardContainer>
                        <TrainerCard
                            id={trainer._id}
                            name={`${trainer.userDetails.firstName} ${trainer.userDetails.lastName}`}
                            description={trainer.userDetails.description || ''}
                            specializations={trainer.specializations || []}
                            location={trainer.userDetails.city || ''}
                            initials={`${trainer.userDetails.firstName[0]}${trainer.userDetails.lastName[0]}`}
                            rating={trainer.reviewsSummary.averageGrade || 0}
                        />
                    </TrainerCardContainer>
                ))}
            </MostPopularTrainersGrid>
            <AllTrainersLink to="/trenerzy">Zobacz wszystkich trenerów</AllTrainersLink>
        </MostPopularTrainersContainer>
    );
}

export default MostPopularTrainersSection;