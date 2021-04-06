import * as actionTypes from '../Actions/ActionType';
// initial state of registartion
const initialState = {
    token: null,
    uploadImage :'' ,
    description:'',
    loading: false,
};
//reducer
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        // when edit profile start
        case actionTypes.EDIT_PROFILE_START: return{...state,loading:true}
        // when edit profile api success
        case actionTypes.EDIT_PROFILE_SUCCESS: return{
            ...state,       
                token:action.token,
                name:action.name,
                dob:action.dob,
                gender:action.gender,
                email:action.email,
                password:action.password
        }
        // if edit profile api failed
        case actionTypes.EDIT_PROFILE_FAIL: return{...state,error:action.error}
        default: return state;
    }
};

export default reducer;