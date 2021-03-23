import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
export const editProfileStart = () => {
    return {
        type: actionTypes.EDIT_PROFILE_START
    };
};
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
export const editProfileFail = (error) => {
    return {
        type: actionTypes.SHOW_PROFILE_FAIL,
        error: error
    };
};
export const editProfile = (name,date,gender,email,password) => {
    const editData={
        name :name ,
        date:date,
        gender:gender,
        email:email,
        password:password
    }
   let token = localStorage.getItem('token')
    return dispatch => {
        dispatch(editProfileStart());
       console.log(token)
        axios.patch('user/update',editData,{
            
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