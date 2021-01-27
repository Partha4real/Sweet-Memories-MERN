import {Auth_GOOGLE, SIGNIN, SIGNUP, LOGOUT} from './actionTypes';

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

export const signin = (formData, history) => async (dispatch) => {
    try {
        
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}