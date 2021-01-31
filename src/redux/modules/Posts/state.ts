import { PostsState } from './types';

const initialState: PostsState = {
    posts: [],
    postsCurrentPage: 0,
    postsTotalPages: 0,
    observePosts: [],
    observePostsCurrentPage: 0,
    observePostsTotalPages: 0,
    pending: false,
}

export default initialState;