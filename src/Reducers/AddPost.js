import * as actionTypes from '../Actions/ActionType';
// initial state of registartion
const initialState = {
    token: null,
    uploadImage :'' ,
    description:'',
    loading: false,
};
// reducer
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_POST_START: return{...state,loading:true}// add post start
        case actionTypes.AUTH_SUCCESS: return{...state,token:action.token,uploadImage:action.uploadImage,description:action.description}// on success api
        case actionTypes.ADD_POST_FAIL: return{...state,error:action.error}// if api gets failed
        default:return state;
    }
};

export default reducer;