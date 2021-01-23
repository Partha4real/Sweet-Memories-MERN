import axios from 'axios';

const API_ROOT = 'http://localhost:5000'
const APIUrls = {
    fetchPostsURL: `${API_ROOT}/posts/getposts`,
    createPostsURL: `${API_ROOT}/posts/createpost`,
    updatePostURL: `${API_ROOT}/posts/updatepost`,
}

// const APIUrls = {
//     fetchPostsURL: () => "http://localhost:5000/posts/getposts",
//     createPostsURL: () => "http://localhost:5000/posts/createpost",
//     updatePostURL: () => "http://localhost:5000/posts/updatepost/",
// }

export const fetchPosts = () => axios.get(APIUrls.fetchPostsURL);
export const createPost = (newPost) => axios.post(APIUrls.createPostsURL, newPost);
export const updatePost = (id, updatedPost) => axios.post(`${APIUrls.updatePostURL}/${id}`, updatedPost);