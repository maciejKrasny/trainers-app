import React from 'react';
import {AddReviewItems, AddReviewContainer, AddReviewLabel, ReviewSectionContainer, AddTextReviewContainer, ReviewsContainer } from './ReviewSection.styled';
import {Button, TextField} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {useSelector} from "react-redux";
import ReviewCard from '../ReviewCard/ReviewCard';

const reviews = [
    {
        creator: 2,
        rating: 4,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'
    },
    {
        creator: 3,
        rating: 4,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'
    }
]

interface ReviewSectionProps {

}

const ReviewSection: React.FC<ReviewSectionProps> = () => {
    const { users } = useSelector(state => state.users);
    return (
        <ReviewSectionContainer>
                <AddReviewContainer>
                    <AddReviewItems>
                        <AddReviewLabel color="textPrimary">Dodaj ocenę</AddReviewLabel>
                        <Rating style={{marginBottom: '1rem'}}/>
                        <AddReviewLabel color="textPrimary">Dodaj recenzję</AddReviewLabel>
                    </AddReviewItems>
                    <Button style={{marginRight: '1.5rem'}} variant={"contained"} color="primary">Dodaj</Button>
                </AddReviewContainer>
                <AddTextReviewContainer>
                    <TextField style={{paddingLeft: '1.5rem', paddingRight: '1.5rem'}} multiline variant="outlined" rows={2} />
                </AddTextReviewContainer>
            <ReviewsContainer>
                {reviews.map(review => {
                    const creatorUser = users.find(user => user.id === review.creator);
                    if (creatorUser) {
                        return <ReviewCard
                            name={creatorUser.name}
                            surname={creatorUser.surname}
                            rating={review.rating}
                            content={review.content}
                            location={creatorUser.city}
                        />
                    }
                    return '';
                })}
            </ReviewsContainer>
        </ReviewSectionContainer>
    );
}

export default ReviewSection;