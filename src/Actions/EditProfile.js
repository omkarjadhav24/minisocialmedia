import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
//  edit start
export const editProfileStart = () => {
    return {
        type: actionTypes.EDIT_PROFILE_START
    };
};
// when edit success
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
// edit api fail
export const editProfileFail = (error) => {
    return {
        type: actionTypes.SHOW_PROFILE_FAIL,
        error: error
    };
};
// edit profile api call
export const editProfile = (name,date,gender,email,password) => {
    const editData={
        name :name ,
        date:date,
        gender:gender,
        email:email,
        password:password
    }
    return dispatch => {
        dispatch(editProfileStart());
        let token = localStorage.getItem('token')
        console.log(token)
        axios.patch('http://bac3ac58be8b.ngrok.io/user/update',editData,{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            console.log(res)
        dispatch(editProfileSuccess());

        })
        .catch(err=>{
            console.log(err);
        dispatch(editProfileFail(err.response.data.error));

        })
    };
};