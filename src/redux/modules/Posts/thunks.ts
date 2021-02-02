import { AppThunk } from '../../store/store.types';
import {setPending, setPosts, setObservePosts, setPostComments, setPostCommentsObserved} from './actions';
import {Comment, Post} from './types';
import kyClient from "../../../api/kyClient";
import {WithPagination} from "../../types";

export const fetchPosts = (currentPage: number, id: string, handler: () => void): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    try {
        const response = await kyClient.get(`trainer/${id}/posts?currentPage=${currentPage || 1}`);
        const data: WithPagination<Post[]> = await response.json();
        if (data) {
            dispatch(setPosts(data));
        }
    } catch(e){
        handler();
    }

    dispatch(setPending(false));
};

export const addCommentToPost = (data: {postId: string; content: string}, isObservedPost: boolean): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.post(`post/${data.postId}/comments`, {json: {content: data.content}});
        const comment: { comments: Comment[] } = await response.json();
        if (comment) {
            if (isObservedPost) {
                dispatch(setPostCommentsObserved({postId: data.postId, comments: comment.comments}));

            } else {
                dispatch(setPostComments({postId: data.postId, comments: comment.comments}));
            }
        }
    } catch (e) {
    }
};

export const fetchPostComments = (postId: string, isObservedPost: boolean): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    try {
        const response = await kyClient.get(`post/${postId}/comments`);
        const comment: {comments: Comment[]} = await response.json();
        if (comment) {
            if (isObservedPost) {
                dispatch(setPostCommentsObserved({postId: postId, comments: comment.comments}));

            } else {
                dispatch(setPostComments({postId: postId, comments: comment.comments}));
            }
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
            data.data = data.data.filter((post: any) => post.type === 'POST');
            dispatch(setObservePosts(data));
        }
    } catch(e){
        handler();
    }

    dispatch(setPending(false));
};
