import { AppThunk } from '../../store/store.types';
import {setPending, setPosts, setObservePosts, setPostComments} from './actions';
import {Comment, Post} from './types';
import kyClient from "../../../api/kyClient";
import {WithPagination} from "../../types";

export const fetchPosts = (id: string, handler: () => void): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    try {
        const response = await kyClient.get(`trainer/${id}/posts`);
        const data: Post[] = await response.json();
        if (data) {
            dispatch(setPosts(data));
        }
    } catch(e){
        // handler();
    }

    dispatch(setPending(false));
};

export const addCommentToPost = (data: {postId: string; content: string}): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.post(`post/${data.postId}/comments`, {json: {content: data.content}});
        const comment: Comment = await response.json();
        if (comment) {
            // dispatch(addComment(comment));
        }
    } catch (e) {
    }
};

export const fetchPostComments = (postId: string): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.get(`post/${postId}/comments`);
        const comment: {comments: Comment[]} = await response.json();
        if (comment) {
            dispatch(setPostComments({postId: postId, comments: comment.comments}));
        }
    } catch (e) {
    }
};

export const fetchObservePosts = (currentPage: number, handler: () => void): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    try {
        const response = await kyClient.get(`user/posts?currentPage=${currentPage || 1}`);
        const data: WithPagination<Post[]> = await response.json();
        if (data) {
            dispatch(setObservePosts(data));
        }
    } catch(e){
        // handler();
    }

    dispatch(setPending(false));
};
