import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// edit start
export const editProfileStart = () => {
    return {type: actionTypes.EDIT_PROFILE_START};
};
// when edit profile get successs
export const editProfileSuccess = (name,dob,gender,email,password) => {
    return {
        type: actionTypes.EDIT_PROFILE_SUCCESS,
        name:name,
        gender:gender,
        dob:dob,
        email:email,
        password:password
    };
};
// if edit profile get failed
export const editProfileFail = (error) => {
    return {
        type: actionTypes.SHOW_PROFILE_FAIL,
        error: error
    };
};
// for edit profile api
export const editProfile = (name,date,gender,email,password) => {
    const editData={
        name :name ,
        date:date,
        gender:gender,
        email:email,
        password:password
    }// send param through api
    return dispatch => {
        dispatch(editProfileStart());// edit profile api start
        let token = localStorage.getItem('token')
        console.log(token)
        axios.patch('http://885039200eb0.ngrok.io/user/update',editData,{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>dispatch(editProfileSuccess()))// api get success
        .catch(err=>dispatch(editProfileFail(err.response.data.error)))// if api gets failed
    };
};