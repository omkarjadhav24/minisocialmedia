import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// registration start
export const registrationStart = () => {
    return {
        type: actionTypes.REGISTRATION_START
    };
};
// if registration success
export const registrationSuccess = (name,dob,gender,email,password,age,token) => {
    return {
        type: actionTypes.REGISTRATION_SUCCESS,
        email: email,
        password: password,
        name:name,
        dob:dob,
        gender:gender,
        token:token,
        age:age

    };
};
// if registartion api fails
export const registrationFail = (error) => {
    return {
        type: actionTypes.REGISTRATION_FAIL,
        error: error
    };
};
//performed the registration api here
export const registration = (name,dob,gender,email, password,age) => {
    const authData={
        name:name,
        dob:dob,
        gender:gender,
        email:email,
        password:password,
        age:age
    }
    // let url='http://ed56ec64fc1f.ngrok.io/user';
    let url='http://bac3ac58be8b.ngrok.io/user';
    return dispatch => {
        dispatch(registrationStart());
        console.log(authData)
        axios.post(url,authData)
        .then(res=>{
            console.log(res.data.token);
            console.log(res);
            localStorage.setItem('token',res.data.token ) // token stored in localstorage
            dispatch(registrationSuccess(res.data.name,res.data.dob,res.data.gender,res.data.email,res.data.password,res.data.age,res.data.token));
        }).catch(err=>{
            console.log(err);
            dispatch(registrationFail(err.response.data.error));

        })

    };
};