import React, {useEffect, useState} from 'react';
import {
    AddReviewContainer,
    AddReviewItems,
    AddReviewLabel,
    AddTextReviewContainer,
    ReviewsContainer,
    ReviewSectionContainer
} from './ReviewSection.styled';
import {Button, CircularProgress, TextField} from "@material-ui/core";
import {Rating} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import ReviewCard from '../ReviewCard/ReviewCard';
import * as reviewThunks from '../../../redux/modules/Reviews/thunks';
import {useHttpErrorHandler} from "../../../utils/hooks/useHttpErrorHandler";

interface ReviewSectionProps {
    userId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ userId }) => {
    const dispatch = useDispatch();
    const { authorization } = useSelector(state => state.authorizationUsers);
    const { reviews, pending } = useSelector(state => state.reviews);
    const [reviewValue, setReviewValue] = useState('');
    const [ratingValue, setRatingValue] = useState(0);
    const [error, setError] = useState(false);
    const handler = useHttpErrorHandler();

    const handleOnAdd = () => {
        if (reviewValue.trim() && ratingValue) {
            setReviewValue('');
            setRatingValue(0);
            dispatch(reviewThunks.addReview({ id: userId, grade: ratingValue, content: reviewValue.trim()}, handler));
        } else {
            setError(true);
        }
    }

    useEffect(() => {
        dispatch(reviewThunks.fetchReviews(userId, handler));
    }, [userId])

    if (pending) {
        return (
            <ReviewSectionContainer style={{justifyContent: 'center', padding: '1.5rem'}}>
                <CircularProgress />
            </ReviewSectionContainer>
            );
    }

    return (
        <ReviewSectionContainer>
            {authorization?.user._id !== userId && authorization && authorization.user.type !=='TRAINER' && (<><AddReviewContainer>
                <AddReviewItems>
                    <AddReviewLabel color="textPrimary">Dodaj ocenę</AddReviewLabel>
                    <Rating onChange={(_, value) => {
                        setRatingValue(value || 0)
                        setError(false);
                    }} value={ratingValue} style={{marginBottom: '1rem'}}/>
                    <AddReviewLabel color="textPrimary">Dodaj recenzję</AddReviewLabel>
                </AddReviewItems>
                <Button onClick={() => handleOnAdd()} style={{marginRight: '1.5rem'}} variant={"contained"}
                        color="primary">Dodaj</Button>
            </AddReviewContainer>
                <AddTextReviewContainer>
                <TextField onChange={event => {
                setReviewValue(event.target.value);
                setError(false);
            }} value={reviewValue} style={{paddingLeft: '1.5rem', paddingRight: '1.5rem'}} multiline variant="outlined" rows={2}
                helperText={error ? 'Uzypełnij poprawnie dane' : null}
                error={error}
                />
                </AddTextReviewContainer>
                </>
                )}
            <ReviewsContainer>
                {reviews?.reverse().map(review => {
                        return <ReviewCard
                            id={review.id}
                            key={review.id}
                            name={review.user.userDetails.firstName}
                            surname={review.user.userDetails.lastName}
                            rating={review.grade}
                            content={review.content}
                            location={review.user.userDetails.city || ''}
                            avatar={review.user.userDetails.avatar}
                        />
                })}
            </ReviewsContainer>
        </ReviewSectionContainer>
    );
}

export default ReviewSection;