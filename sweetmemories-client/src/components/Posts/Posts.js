import React from 'react';
import {useSelector} from 'react-redux';
import Post from './Post/Post';

function Posts(props) {
    const posts = useSelector((state) => state.posts);
    console.log("POSTS",posts)
    return (
        <div>
            <Post />
            <Post />
        </div>
    );
}
export default Posts;