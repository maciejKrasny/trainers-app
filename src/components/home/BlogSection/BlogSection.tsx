import { Button } from '@material-ui/core';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {User} from '../../../redux/modules/Users/types';
import PostCard from "../PostCard/PostCard";
import {useHttpErrorHandler} from "../../../utils/hooks/useHttpErrorHandler";
import * as postThunks from "../../../redux/modules/Posts/thunks";
import {resetPosts} from "../../../redux/modules/Posts/actions";
import {useParams} from "react-router-dom";

interface BlogSectionProps {
    userId?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ userId }) => {
    const { id } = useParams<{ id: string }>();
    const { pending, posts, postsCurrentPage, postsTotalPages } = useSelector(state => state.posts)
    const dispatch = useDispatch();
    const handler = useHttpErrorHandler();

    const handlePostsFetch = () => {
        dispatch(postThunks.fetchPosts(postsCurrentPage + 1, id, handler));
    }

    React.useEffect(() => {
        handlePostsFetch();
        return () => {
            dispatch(resetPosts());
        }
    }, [id])

    return (
        <div style={{padding: '1.5rem'}}>
            {posts.filter(post => post.author._id === userId).length
                ? (
                    <>
                        {posts.filter(post => post.author._id === userId).map(post => (
                            <PostCard
                                key={post._id}
                                id={post._id}
                                title={post.title}
                                content={post.content}
                                image={'post.image'}
                                comments={post.comments}
                                commentsCount={post.commentsCount}
                            />
                        ))}
                        {!pending && postsTotalPages >= postsCurrentPage && (
                            <Button onClick={handlePostsFetch}>Załaduj więcej</Button>
                        )}
                    </>
                )
                : <div style={{display: 'flex', justifyContent: "center", marginTop: '2rem'}}>Brak postów</div>
            }
        </div>
    );
}

export default BlogSection;
