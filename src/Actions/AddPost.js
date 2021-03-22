import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// when sign in start
export const addPostStart = () => {
    return {
        type: actionTypes.ADD_POST_START
    };
};
// when sign in success then execute
export const addPostSuccess = (image,description) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        image: image,
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
// for calling in sign in page for getting email and password from there
export const addPost = (image, description) => {
    const postData={
        image:image,
        description:description
    }
    let url='';
    return dispatch => {
        dispatch(addPostStart());
        console.log(postData)
        axios.post(url,postData)
        .then(res=>{
            console.log(res);
            dispatch(addPostSuccess(res.data.image,res.data.description));
        }).catch(err=>{
            dispatch(addPostFail(err.response.data.error));

        })

    };
};