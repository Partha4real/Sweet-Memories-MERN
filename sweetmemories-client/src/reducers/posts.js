import {FETCH_ALL} from '../actions/actionTypes';

export default function posts(posts= [], action) {
    switch (action.type) {
        case FETCH_ALL:
            return action.data;
    
        default:
            return posts;
    }
}