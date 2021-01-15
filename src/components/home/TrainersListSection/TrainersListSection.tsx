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
            {trainers.map(user => (
                    <TrainerCard
                        id={user.id}
                        name={`${user.name} ${user.surname}`}
                        description={user.shortDescription}
                        specializations={user.specializations}
                        location={user.city}
                        initials={`${user.name[0]}${user.surname[0]}`}

                    />
                ))}
        </ListContainer>
    );
}

export default TrainersListSection;