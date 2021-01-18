import React from 'react';
import Layout from "../../components/home/Layout/Layout";
import {useSelector} from "react-redux";
import {GridContainer} from '../../components/home/Grid/Grid.styled';
import PostCard from "../../components/home/PostCard/PostCard";
import {AllTrainersLink} from "../../components/home/MostPopularTrainersSection/MostPopularTrainersSection.styled";

interface PostsPageProps
{

}

const PostsPage: React.FC <PostsPageProps> = () => {
    const { observePosts } = useSelector(state => state.posts);
    return (
        <Layout>
            <GridContainer>
                <div style={{display: "flex", flexDirection:'column', alignItems:'center', marginBottom: '1rem'}}>
                <AllTrainersLink to="/trenerzy">Zobacz wszystkich trenerów</AllTrainersLink>
                </div>
                {observePosts.length
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
                        />
                    </div>
                    ))
                : (
                    <div style={{display: "flex", flexDirection:'column', alignItems:'center'}}>
                        Brak postów
                    </div>
                    )}
            </GridContainer>
        </Layout>
    );
}

export default PostsPage;