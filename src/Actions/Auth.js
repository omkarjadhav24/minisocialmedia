import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// when sign in start
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};
// when sign in success then execute
export const authSuccess = (email,password,token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        email: email,
        password: password,
        token:token
    };
};
// wehen sign in fails 
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
// for calling in sign in page for getting email and password from there
export const auth = (email, password) => {
    const authData={
        email:email,
        password:password
    }
    let url='http://885039200eb0.ngrok.io/user/login';
    return dispatch => {
        dispatch(authStart());
        console.log(authData)
        axios.post(url,authData)
        .then(res=>{
            console.log(res);
            localStorage.setItem('token',res.data.token ) // token stored in locastorage
            dispatch(authSuccess(res.data.user.email,res.data.user.password,res.data.token));
        }).catch(err=>{
            dispatch(authFail(err.response.data.error));

        })

    };
};