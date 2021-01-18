import {ADD_REVIEW, Review, ReviewActions, SET_REVIEW_PENDING, SET_REVIEWS} from "./types";

export function setReviews(data: Review[]): ReviewActions {
    return {
        type: SET_REVIEWS,
        payload: data,
    };
}

export function addReviewAction(data: Review): ReviewActions {
    return {
        type: ADD_REVIEW,
        payload: data,
    };
}

export function setReviewPending(data: boolean): ReviewActions {
    return {
        type: SET_REVIEW_PENDING,
        payload: data,
    };
}
