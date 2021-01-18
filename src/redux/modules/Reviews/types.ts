import {User} from "../Users/types";

export interface Review {
    _id: string;
    user: User;
    grade: number;
    content: string;
}

export interface ReviewState {
    reviews: Review[];
    pending: boolean;
}

export const SET_REVIEWS = 'SET_REVIEWS';
export const ADD_REVIEW = 'ADD_REVIEW';
export const SET_REVIEW_PENDING = 'SET_REVIEW_PENDING';

export interface SetReviewsAction {
    type: typeof SET_REVIEWS;
    payload: Review[];
}

export interface SetReviewPendingAction {
    type: typeof SET_REVIEW_PENDING;
    payload: boolean;
}

export interface AddReviewAction {
    type: typeof ADD_REVIEW;
    payload: Review;
}

export type ReviewActions = SetReviewsAction | SetReviewPendingAction | AddReviewAction;