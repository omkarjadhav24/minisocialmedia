import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// add post start
export const addPostStart = () => {
    return {type: actionTypes.ADD_POST_START}
};
// add post api gets success then 
export const addPostSuccess = (uploadImage,description) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        uploadImage: uploadImage,
        description: description
    };
};
// if add post api gets failed then
export const addPostFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
// for add post api
export const addPost = (uploadImage , description) => {
    const postData={
        uploadImage :uploadImage ,
        description:description
    }// param send with api
    let url='http://885039200eb0.ngrok.io/story/image';
    return dispatch => {
        let token=localStorage.getItem('token') 
        dispatch(addPostStart());// when add post start
        console.log(token)
        console.log(postData);
        axios.post(url,postData, {
            headers: {
              'Authorization': `Bearer ${token}`,
              "Accept": "application/json",
              "type": "formData"
            }
          })
        .then(res=>dispatch(addPostSuccess(res.data.image,res.data.description)))// gets  res then execute
        .catch(err=>dispatch(addPostFail(err.response.data.error)))// if api get failed

    };
};