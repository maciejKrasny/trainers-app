import React from 'react';
import {useSelector} from 'react-redux';
import {User} from '../../../redux/modules/Users/types';
import PostCard from "../PostCard/PostCard";

interface BlogSectionProps {
    userId?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ userId }) => {
    const { posts } = useSelector(state => state.posts)
    return (
        <div style={{padding: '1.5rem'}}>
            {posts.filter(post => post.author._id === userId).length
                ? posts.filter(post => post.author._id === userId).reverse().map(post => (
                    <PostCard
                        key={post._id}
                        id={post._id}
                        title={post.title}
                        content={post.content}
                        image={'post.image'}
                        comments={post.comments}
                        commentsCount={post.commentsCount}
                    />
                ))
                : <div style={{display: 'flex', justifyContent: "center", marginTop: '2rem'}}>Brak postów</div>   
            }
        </div>
    );
}

export default BlogSection;
