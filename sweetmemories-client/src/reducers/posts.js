import {CREATE_POST, FETCH_ALL} from '../actions/actionTypes';

export default function posts(posts= [], action) {
    switch (action.type) {
        case FETCH_ALL:
            return action.data;
        case CREATE_POST:
            return [...posts, action.data];
        default:
            return posts;
    }
}