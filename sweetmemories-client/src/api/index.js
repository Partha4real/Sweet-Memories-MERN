import axios from 'axios';

const API_ROOT = 'http://localhost:5000/'
const APIUrls = {
    fetchPostsURL: () => `${API_ROOT}/posts`,
}

export const fetchPosts = () => axios.get(APIUrls.fetchPosts);