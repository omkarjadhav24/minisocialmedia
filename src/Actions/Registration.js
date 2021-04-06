import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// registration start
export const registrationStart = () => {
    return {type: actionTypes.REGISTRATION_START};
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
// if registration failed
export const registrationFail = (error) => {
    return {
        type: actionTypes.REGISTRATION_FAIL,
        error: error
    };
};
export const registration = (name,dob,gender,email, password,age) => {
    const authData={
        name:name,
        dob:dob,
        gender:gender,
        email:email,
        password:password,
        age:age
    }// params send through api
    let url='http://885039200eb0.ngrok.io/user';
    return dispatch => {
        dispatch(registrationStart());// registration start
        console.log(authData)
        axios.post(url,authData)
        .then(res=>{
            console.log(res.data.token);
            console.log(res);
            localStorage.setItem('token',res.data.token ) // set token
            // if api get success
            dispatch(registrationSuccess(res.data.name,res.data.dob,res.data.gender,res.data.email,res.data.password,res.data.age,res.data.token));
        }).catch(err=>dispatch(registrationFail(err.response.data.error)))// if api failed

    };
};