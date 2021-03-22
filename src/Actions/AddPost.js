import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// when sign in start
export const addPostStart = () => {
    return {
        type: actionTypes.ADD_POST_START
    };
};
// when sign in success then execute
export const addPostSuccess = (uploadImage,description) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        uploadImage: uploadImage,
        description: description
    };
};
// wehen sign in fails 
export const addPostFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const addPost = (uploadImage , description) => {
    const postData={
        uploadImage :uploadImage ,
        description:description
    }
    let url='story/image';
    return dispatch => {
        let token=localStorage.getItem('token')
        dispatch(addPostStart());
        console.log(token)
        axios.post(url,postData, {
            headers: {
              'Authorization': `Bearer ${token}` 
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