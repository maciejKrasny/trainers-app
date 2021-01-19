import {AppThunk} from '../../store/store.types';
import {Review} from "./types";
import {addReviewAction, setReviewPending, setReviews} from "./actions";
import kyClient from "../../../api/kyClient";

export const fetchReviews = (id: string, handler: () => void): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setReviewPending(true));
    try {
        const response = await kyClient.get(`trainer/${id}/reviews`);
        const data: Review[] = await response.json();
        if (data) {
            dispatch(setReviews(data));
        }
    } catch (e) {
        handler();
    }
    dispatch(setReviewPending(false));
};

export const addReview = (review: {id: string; grade: number; content: string}, handler: () => void) : AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.post(`trainer/${review.id}/reviews`, {json: {grade: review.grade, content: review.content}});
        const data: Review = await response.json();
        if (data) {
            dispatch(addReviewAction(data));
        }
    } catch (e) {
        handler();
    }


}