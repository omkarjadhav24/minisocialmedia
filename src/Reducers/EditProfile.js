import * as actionTypes from '../Actions/ActionType';
// import { updateObject } from '../Shared/utility';


// initial state of registartion
const initialState = {
    token: null,
    uploadImage :'' ,
    description:'',
    loading: false,
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
      
        case actionTypes.EDIT_PROFILE_START: return{
            ...state,
            loading:true
           
        }
      
        case actionTypes.EDIT_PROFILE_SUCCESS: return{
            ...state,       
                token:action.token,
                name:action.name,
                dob:action.dob,
                gender:action.gender,
                email:action.email,
                password:action.password
        }
       
        case actionTypes.EDIT_PROFILE_FAIL: return{
            ...state,
            error:action.error
        }
        // case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;