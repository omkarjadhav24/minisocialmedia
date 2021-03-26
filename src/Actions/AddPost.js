import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
export const addPostStart = () => {
    return {
        type: actionTypes.ADD_POST_START
    };
};
export const addPostSuccess = (uploadImage,description) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        uploadImage: uploadImage,
        description: description
    };
};
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
    let url='http://be113eb45e0a.ngrok.io/story/image';
    return dispatch => {
        let token=localStorage.getItem('token')
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