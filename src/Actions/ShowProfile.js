import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
export const showProfileStart = () => {
    return {
        type: actionTypes.SHOW_PROFILE_START
    };
};
export const showProfileSuccess = (name,gender,dob,profileId,email) => {
    return {
        type: actionTypes.SHOW_PROFILE_SUCCESS,
        name:name,
        gender:gender,
        dob:dob,
        profileId:profileId,
        email:email
    };
};
export const showProfileFail = (error) => {
    return {
        type: actionTypes.SHOW_PROFILE_FAIL,
        error: error
    };
};
export const showProfile = () => {
    
   let token = localStorage.getItem('token')
    return dispatch => {
        dispatch(showProfileStart());
       console.log(token)
        axios.get('user/me',{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            console.log(res.data._id)
        dispatch(showProfileSuccess(res.data.name,res.data.gender,res.data.dob,res.data._id,res.data.email));

        })
        .catch(err=>{
            console.log(err);
        dispatch(showProfileFail(err.response.data.error));

        })
    };
};