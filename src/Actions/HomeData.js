import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
export const homeStart = () => {
    return {
        type: actionTypes.HOME_START
    };
};
export const homeSuccess = (data) => {
    return {
        type: actionTypes.HOME_SUCCESS,
        homedata:data
        // idToken: token,
        // userId: userId
    };
};
export const homeFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
export const HomeData = () => {
    let url='https://jsonplaceholder.typicode.com/photos';
    return dispatch => {
        dispatch(homeStart());
        // console.log(authData)
        axios.get(url)
        .then(res=>{
            // console.log(res.data);
            dispatch(homeSuccess(res.data));
        }).catch(err=>{
            dispatch(homeFail(err.response.data.error));

        })

    };
};