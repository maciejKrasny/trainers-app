import React, {useEffect} from 'react';
import Layout from "../../components/home/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {GridContainer} from '../../components/home/Grid/Grid.styled';
import PostCard from "../../components/home/PostCard/PostCard";
import {AllTrainersLink} from "../../components/home/MostPopularTrainersSection/MostPopularTrainersSection.styled";
import * as postThunks from "../../redux/modules/Posts/thunks";
import {useHttpErrorHandler} from "../../utils/hooks/useHttpErrorHandler";
import {Button, CircularProgress} from "@material-ui/core";
import { resetPosts } from '../../redux/modules/Posts/actions';
interface PostsPageProps
{

}

const PostsPage: React.FC <PostsPageProps> = () => {
    const { observePosts, pending, observePostsCurrentPage, observePostsTotalPages } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const handler = useHttpErrorHandler();

    const handlePostsFetch = () => {
        dispatch(postThunks.fetchObservePosts(observePostsCurrentPage + 1, handler));
    }

    useEffect(() => {
        handlePostsFetch();

        return () => {
            dispatch(resetPosts());
        }
    }, []);

    return (
        <Layout>
            <GridContainer>
                <div style={{display: "flex", flexDirection:'column', alignItems:'center', marginBottom: '1rem'}}>
                    <AllTrainersLink to="/trenerzy">Zobacz wszystkich trenerów</AllTrainersLink>
                </div>
                <div>
                    {observePosts.map(post => (
                        <div style={{marginTop: '1rem'}}>
                            <PostCard
                                title={post.title}
                                content={post.content}
                                image={'a'}
                                id={post._id}
                                comments={post.comments}
                                commentsCount={post.commentsCount}
                                authorName={post.author.userDetails.firstName}
                                authorSurname={post.author.userDetails.lastName}
                            />
                        </div>
                    ))}

                    {!pending && observePostsTotalPages >= observePostsCurrentPage && (
                        <Button onClick={handlePostsFetch}>Załaduj więcej</Button>
                    )}

                    {!pending && !observePosts.length && (
                        <div style={{display: "flex", flexDirection:'column', alignItems:'center'}}>
                            Brak postów
                        </div>
                    )}

                    {pending && (
                        <div style={{display: "flex", flexDirection:'column', alignItems:'center'}}>
                            <CircularProgress/>
                        </div>
                    )}
                </div>
            </GridContainer>
        </Layout>
    );
}

export default PostsPage;