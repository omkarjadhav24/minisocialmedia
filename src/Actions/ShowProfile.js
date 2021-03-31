import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// code for when profile starts loading
export const showProfileStart = () => {
    return {
        type: actionTypes.SHOW_PROFILE_START
    };
};
// code for when api loads susscessfully data and storing the data
export const showProfileSuccess = (name,gender,dob,profileId,email,age) => {
    return {
        type: actionTypes.SHOW_PROFILE_SUCCESS,
        name:name,
        gender:gender,
        dob:dob,
        profileId:profileId,
        email:email,
        age:age
    };
};
// code if show profile
export const showProfileFail = (error) => {
    return {
        type: actionTypes.SHOW_PROFILE_FAIL,
        error: error
    };
};
// code for performing api functionality
export const showProfile = () => {
    
   let token = localStorage.getItem('token')
    return dispatch => {
        dispatch(showProfileStart());
       console.log(token)
        axios.get('http://bac3ac58be8b.ngrok.io/user/me',{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            // console.log(res)
        dispatch(showProfileSuccess(res.data.name,res.data.gender,res.data.dob,res.data._id,res.data.email,res.data.age));

        })
        .catch(err=>{
            console.log(err);
        dispatch(showProfileFail(err.response.data.error));

        })
    };
};