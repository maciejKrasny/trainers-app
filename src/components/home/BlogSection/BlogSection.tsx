import React from 'react';
import { useSelector } from 'react-redux';
import { User } from '../../../redux/modules/Users/types';
import EditorContainer from '../Editor/Editor.container';
import PostCard from "../PostCard/PostCard";

interface BlogSectionProps {
    user?: User;
}

const BlogSection: React.FC<BlogSectionProps> = ({ user }) => {
    const { posts } = useSelector(state => state.posts)
    const { currentAuthorizationUser } = useSelector(state => state.authorizationUsers)

    return (
        <div style={{padding: '1.5rem'}}>
            {posts.filter(post => post.creator === user?.id).length
                ? posts.filter(post => post.creator === user?.id).reverse().map(post => (
                    <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                        image={"a"}
                        comments={post.comments}
                    />
                ))
                : <div style={{display: 'flex', justifyContent: "center", marginTop: '2rem'}}>Brak postów</div>   
            }
        </div>
    );
}

export default BlogSection;
