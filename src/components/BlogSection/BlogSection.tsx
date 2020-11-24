import React from 'react';
import { useSelector } from 'react-redux';
import { User } from '../../redux/modules/Users/types';
import EditorContainer from '../Editor/Editor.container';

interface BlogSectionProps {
    user?: User;
}

const BlogSection: React.FC<BlogSectionProps> = ({ user }) => {
    const { posts } = useSelector(state => state.posts)
    const { currentAuthorizationUser } = useSelector(state => state.authorizationUsers)

    return (
        <div>
            {currentAuthorizationUser?.userId === user?.id && <EditorContainer creator={user?.id} />}
            {posts.filter(post => post.creator === user?.id).length
                ? posts.filter(post => post.creator === user?.id).reverse().map(post => (
                    <EditorContainer key={post.id} content={post.content} />
                ))
                : <div style={{display: 'flex', justifyContent: "center", marginTop: '2rem'}}>Brak postów</div>   
            }
        </div>
    );
}

export default BlogSection;
