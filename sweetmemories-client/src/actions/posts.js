import {FETCH_ALL, CREATE_POST} from './actionTypes';
import * as api from '../api';

export const getPosts= () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts(); // from reaponse we extract data
        dispatch(fetchall(data));
    } catch (error) {
        console.log(error.message);
    }
}

export function fetchall(data) {
    return {
        type: FETCH_ALL,
        data
    }
}

export const createPost= (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post); // from reaponse we extract data
        dispatch(fetchall(data));
    } catch (error) {
        console.log(error.message);
    }
}

export function creatingPost(data) {
    return {
        type: CREATE_POST,
        data
    }
}
