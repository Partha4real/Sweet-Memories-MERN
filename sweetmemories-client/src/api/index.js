import axios from 'axios';

// const API_ROOT = 'http://localhost:5000'
const APIUrls = {
    fetchPostsURL: () => "http://localhost:5000/posts/getposts",
    createPostsURL: () => "http://localhost:5000/posts/createpost",
}

export const fetchPosts = () => axios.get(APIUrls.fetchPostsURL());
export const createPost = (newPost) => axios.post(APIUrls.createPostsURL(), newPost);