import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// execute when render home 
export const homeStart = () => {
    return {type: actionTypes.HOME_START};
};

// execute when suucessfully fetch data fro api for displaying posts on home
export const homeSuccess = (data, id) => {
    return {
        type: actionTypes.HOME_SUCCESS,
        homeData:data,
        homeDataid:id
        // idToken: token,
        // userId: userId
    };
};

// When api is fail to fetch data then execute
export const homeFail = (error) => {
    return {
        type: actionTypes.HOME_FAIL,
        error: error
    };
};

//fro fetching data for home 
export const HomeData = () => {
    let url='https://jsonplaceholder.typicode.com/photos';
    return dispatch => {
        dispatch(homeStart());// api start
        // console.log(authData)
        axios.get(url)
        .then(res=>dispatch(homeSuccess(res.data,res.data.id)))// if api get success
        .catch(err=>dispatch(homeFail(err.response.data.error)))// if api get failed

    };
};