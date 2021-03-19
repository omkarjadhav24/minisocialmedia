import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';

export const registrationStart = () => {
    return {
        type: actionTypes.REGISTRATION_START
    };
};
export const registrationSuccess = (name,dob,gender,email,password,token) => {
    return {
        type: actionTypes.REGISTRATION_SUCCESS,
        email: email,
        password: password,
        name:name,
        dob:dob,
        gender:gender,
        token:token

    };
};
export const registrationFail = (error) => {
    return {
        type: actionTypes.REGISTRATION_FAIL,
        error: error
    };
};
export const registration = (name,dob,gender,email, password) => {
    const authData={
        name:name,
        dob:dob,
        gender:gender,
        email:email,
        password:password
    }
    let url='user';
    return dispatch => {
        dispatch(registrationStart());
        console.log(authData)
        axios.post(url,authData)
        .then(res=>{
            console.log(res.data.token);
            console.log(res);
            localStorage.setItem('token',res.data.token )
            dispatch(registrationSuccess(res.data.name,res.data.dob,res.data.gender,res.data.email,res.data.password,res.data.token));
        }).catch(err=>{
            dispatch(registrationFail(err.response.data.error));

        })

    };
};