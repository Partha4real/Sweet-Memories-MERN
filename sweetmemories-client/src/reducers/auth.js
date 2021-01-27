import {Auth_GOOGLE, LOGOUT} from '../actions/actionTypes';

export default function authReducer(state= {authData: null}, action) {
    switch (action.type) {
        case Auth_GOOGLE:
            localStorage.setItem('profile', JSON.stringify({...action.data}))
            return {...state, authData: action.data};
        case LOGOUT:
            localStorage.clear();
            return {...state, authData: null};
        default:
            return state;
    }
}
