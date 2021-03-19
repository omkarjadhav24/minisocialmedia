import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// when sign in start
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};
// when sign in success then execute
export const authSuccess = (email,password) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        email: email,
        password: password
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
    let url='https://jsonplaceholder.typicode.com/users';
    return dispatch => {
        dispatch(authStart());
        console.log(authData)
        axios.post(url,authData)
        .then(res=>{
            console.log(res.data.email);
            dispatch(authSuccess(res.data.email,res.data.password));
        }).catch(err=>{
            dispatch(authFail(err.response.data.error));

        })

    };
};