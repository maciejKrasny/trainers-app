import { AppThunk } from '../../store/store.types';
import { setPending, setPosts } from './actions';
import { Post } from './types';

export const fetchPosts = (): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    const response = localStorage.getItem('posts');
    if (response) {
        const parsedResponse: Post[] = JSON.parse(response);
        console.log(parsedResponse)
        dispatch(setPosts(parsedResponse));
    }
    dispatch(setPending(false));
};

export const addPost = (data: Post): AppThunk<Promise<void>> => async (
    dispatch,
    getState
) => {
    dispatch(setPending(true));
    const posts = [...getState().posts.posts, data];
    localStorage.setItem('posts', JSON.stringify(posts));
    dispatch(setPosts(posts));
    dispatch(setPending(false));
};
