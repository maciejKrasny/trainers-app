import React, {useEffect} from 'react';
import Layout from "../../components/home/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {GridContainer} from '../../components/home/Grid/Grid.styled';
import PostCard from "../../components/home/PostCard/PostCard";
import {AllTrainersLink} from "../../components/home/MostPopularTrainersSection/MostPopularTrainersSection.styled";
import * as postThunks from "../../redux/modules/Posts/thunks";
import {useHttpErrorHandler} from "../../utils/hooks/useHttpErrorHandler";
import {CircularProgress} from "@material-ui/core";
interface PostsPageProps
{

}

const PostsPage: React.FC <PostsPageProps> = () => {
    const { posts: observePosts, pending } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const handler = useHttpErrorHandler();

    useEffect(() => {
        dispatch(postThunks.fetchObservePosts(handler))
    }, []);

    return (
        <Layout>
            <GridContainer>
                <div style={{display: "flex", flexDirection:'column', alignItems:'center', marginBottom: '1rem'}}>
                <AllTrainersLink to="/trenerzy">Zobacz wszystkich trenerów</AllTrainersLink>
                </div>
                {!pending
                    ? (
                    observePosts.length
                        ? observePosts.map(post => (
                            <div style={{marginTop: '1rem'}}>
                                <PostCard
                                    title={post.title}
                                    content={post.content}
                                    image={'a'}
                                    id={post._id}
                                    comments={post.comments}
                                    authorName={post.author.userDetails.firstName}
                                    authorSurname={post.author.userDetails.lastName}
                                    commentsCount={post.commentsCount}
                                />
                            </div>
                            ))
                        : (
                            <div style={{display: "flex", flexDirection:'column', alignItems:'center'}}>
                                Brak postów
                            </div>
                            ))
                    : (
                        <div style={{display: "flex", flexDirection:'column', alignItems:'center'}}>
                            <CircularProgress/>
                        </div>)}
            </GridContainer>
        </Layout>
    );
}

export default PostsPage;