import React from 'react';
import { useSelector } from 'react-redux';
import EditorContainer from '../Editor/Editor.container';

const BlogSection: React.FC = () => {
    const { posts } = useSelector(state => state.posts)

    return (
        <div>
            <EditorContainer />
            {
                [...posts].reverse().map(post => (
                    <EditorContainer key={post.id} content={post.content} />
                ))
            }
        </div>
    );
}

export default BlogSection;
