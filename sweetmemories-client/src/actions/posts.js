import {FETCH_ALL} from './actionTypes';
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

