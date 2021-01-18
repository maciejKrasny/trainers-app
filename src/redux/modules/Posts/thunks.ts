import { AppThunk } from '../../store/store.types';
import {setPending, setPosts, addComment, setObservePosts} from './actions';
import {Post} from './types';
import kyClient from "../../../api/kyClient";

export const fetchPosts = (id: string): AppThunk<Promise<void>> => async (
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
    } catch(e){}

    dispatch(setPending(false));
};

export const addCommentToPost = (data: {postId: string; content: string}): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    // const currentUserId = getState().authorizationUsers.currentAuthorizationUser?.userId;
    // if (currentUserId) {
    //     const newComment: Comment = {
    //         creatorId: currentUserId,
    //         content: data.content,
    //         id: 'asdasdasda',
    //         postId: data.postId,
    //     }
    //     dispatch(addComment(newComment));
    // }

    dispatch(setPending(false));
};

export const fetchObservePosts = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    const response = localStorage.getItem('posts');
    if (response) {
        const parsedResponse: Post[] = JSON.parse(response);
        dispatch(setObservePosts(parsedResponse));
    }
    dispatch(setPending(false));
};
