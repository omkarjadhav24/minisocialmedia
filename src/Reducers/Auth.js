import * as actionTypes from '../Actions/ActionType';
// initial stae
const initialState = {
    token: null,
    email:'',
    password:'',
    returnSecureToken:false,
    loading: false
};
// reducer
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return{...state,loading:true}// auth start
        case actionTypes.AUTH_SUCCESS: return{...state,email:action.email,password:action.password,token:action.token}// if auth api success
        case actionTypes.AUTH_FAIL: return{...state,error:action.error}// if auth api failed
        default:return state;
    }
};

export default reducer;