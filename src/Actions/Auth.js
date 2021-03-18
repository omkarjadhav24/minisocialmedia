import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};
export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
export const auth = (email, password) => {
    const authData={
        email:email,
        password:password,
        returnSecureToken:true
    }
    let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB5Hf5HbNNphVgeXqlCeuoMZENd6Dbt2Kg';
    return dispatch => {
        dispatch(authStart());
        console.log(authData)
        axios.post(url,authData)
        .then(res=>{
            console.log(res);
            dispatch(authSuccess(res.data.idToken, res.data.localId));
        }).catch(err=>{
            dispatch(authFail(err.response.data.error));

        })

    };
};