import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// code for when profile starts loading
export const showProfileStart = () => {
    return {type: actionTypes.SHOW_PROFILE_START};
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
// if api get failed
export const showProfileFail = (error) => {
    return {
        type: actionTypes.SHOW_PROFILE_FAIL,
        error: error
    };
};
export const showProfile = () => {
    
   let token = localStorage.getItem('token')
    return dispatch => {
        dispatch(showProfileStart());// show profile api start
       console.log(token)
        axios.get('http://885039200eb0.ngrok.io/user/me',{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>dispatch(showProfileSuccess(res.data.name,res.data.gender,res.data.dob,res.data._id,res.data.email,res.data.age)))// if succses api
        .catch(err=>dispatch(showProfileFail(err.response.data.error)))// if api get failed
    };
};