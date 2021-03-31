import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// add post starts then execute
export const addPostStart = () => {
    return {
        type: actionTypes.ADD_POST_START
    };
};
// add post sussessfully runs
export const addPostSuccess = (uploadImage,description) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        uploadImage: uploadImage,
        description: description
    };
};
// add post api falis
export const addPostFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
// for performing add post api functionality
export const addPost = (uploadImage , description) => {
    const postData={
        uploadImage :uploadImage ,
        description:description
    }
    let url='http://bac3ac58be8b.ngrok.io/story/image';
    return dispatch => {
        let token=localStorage.getItem('token') // token fetch from localstorage
        dispatch(addPostStart());
        console.log(token)
        console.log(postData);
        axios.post(url,postData, {
            headers: {
              'Authorization': `Bearer ${token}`,
              "Accept": "application/json",
              "type": "formData"
            }
          })
        .then(res=>{
            console.log(res);
            dispatch(addPostSuccess(res.data.image,res.data.description));
        }).catch(err=>{
            console.log(err)
            dispatch(addPostFail(err.response.data.error));

        })

    };
};