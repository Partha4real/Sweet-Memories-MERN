import {Auth_GOOGLE, LOGOUT} from './actionTypes';

export function googleLogin(result, token) {
    return {
        type: Auth_GOOGLE,
        data: {result, token}
    }
}

export function logoutUser() {
    return {
        type: LOGOUT
    }
}