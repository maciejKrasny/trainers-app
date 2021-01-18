import React from 'react';
import {User} from "../../../redux/modules/Users/types";
import TrainerCard from "../TrainerCard/TrainerCard";
import { ListContainer } from './TrainersListSection.styled';

interface TrainersListSectionProps {
    trainers: User[];
}

const TrainersListSection: React.FC<TrainersListSectionProps> = ({ trainers }) => {

    return (
        <ListContainer>
            {trainers.length ? (trainers.map(trainer => (
                    <TrainerCard
                        id={trainer._id}
                        name={`${trainer.userDetails.firstName} ${trainer.userDetails.lastName}`}
                        description={trainer.userDetails.description || ''}
                        specializations={trainer.specializations || []}
                        location={trainer.userDetails.city || ''}
                        initials={`${trainer.userDetails.firstName[0]}${trainer.userDetails.lastName[0]}`}
                        rating={trainer.reviewsSummary.averageGrade || 0}
                    />
                )))
            : <p style={{display: 'flex', justifyContent: 'center'}}>Brak trenerów</p>
            }
        </ListContainer>
    );
}

export default TrainersListSection;