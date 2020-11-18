import { ADD_POST, Post, PostActions, SET_CURRENT_POST, SET_POSTS, SET_POST_PENDING } from "./types";

export function setPosts(data: Post[]): PostActions {
    return {
        type: SET_POSTS,
        payload: data
    };
}

export function setCurrentPost(data: Post): PostActions {
    return {
        type: SET_CURRENT_POST,
        payload: data
    };
}

export function addPost(data: Post): PostActions {
    return {
        type: ADD_POST,
        payload: data
    };
}

export function setPending(data: boolean): PostActions {
    return {
        type: SET_POST_PENDING,
        payload: data
    };
}