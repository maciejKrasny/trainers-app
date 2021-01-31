import { PostsState } from './types';

const initialState: PostsState = {
    posts: [],
    observePosts: [],
    observePostsCurrentPage: 0,
    observePostsTotalPages: 0,
    pending: false,
}

export default initialState;