import * as actionTypes from '../Actions/ActionType';
import axios from 'axios';
// execute when render home 
export const homeStart = () => {
    return {
        type: actionTypes.HOME_START
    };
};

// execute when suucessfully fetch data fro api for displaying posts on home
export const homeSuccess = (data, id) => {
    return {
        type: actionTypes.HOME_SUCCESS,
        homedata:data,
        homedataid:id
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
        dispatch(homeStart());
        // console.log(authData)
        axios.get(url)
        .then(res=>{
            // console.log(res.data);
            dispatch(homeSuccess(res.data,res.data.id));
        }).catch(err=>{
            dispatch(homeFail(err.response.data.error));

        })

    };
};