export interface Comment {
    id: string;
    creator: number;
    content: string;
    postId: string;
}

export interface Post {
    id: string;
    title: string;
    creator: number;
    content: string;
    comments?: Comment[];
    type: "POST" | "EVENT";
}

export interface PostsState {
    posts: Post[];
    currentPost: Post | null,
    pending: boolean;
}

export const SET_POSTS = 'SET_POSTS';
export const SET_CURRENT_POST = 'SET_CURRENT_POST';
export const ADD_POST = 'ADD_POST';
export const SET_POST_PENDING = 'SET_POST_PENDING';

export interface SetPostsAction {
    type: typeof SET_POSTS;
    payload: Post[];
}

export interface SetCurrentPostAction {
    type: typeof SET_CURRENT_POST;
    payload: Post;
}

export interface AddPostAction {
    type: typeof ADD_POST;
    payload: Post;
}

export interface SetPostPending {
    type: typeof SET_POST_PENDING;
    payload: boolean;
}

export type PostActions = SetPostsAction | AddPostAction | SetPostPending | SetCurrentPostAction;