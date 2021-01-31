import {SET_POST_COMMENTS, Comment, Post, PostActions, SET_OBSERVE_POSTS, SET_POST_PENDING, SET_POSTS} from "./types";
import {WithPagination} from "../../types";

export function setPosts(data: Post[]): PostActions {
    return {
        type: SET_POSTS,
        payload: data
    };
}

export function setPending(data: boolean): PostActions {
    return {
        type: SET_POST_PENDING,
        payload: data
    };
}
export function setPostComments(data: {postId: string; comments: Comment[]}): PostActions {
    return {
        type: SET_POST_COMMENTS,
        payload: data
    };
}

export function setObservePosts(data: WithPagination<Post[]>): PostActions {
    return {
        type: SET_OBSERVE_POSTS,
        payload: data
    };
}