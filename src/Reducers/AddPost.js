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
      
        case actionTypes.ADD_POST_START: return{
            ...state,
            loading:true
           
        }
      
        case actionTypes.AUTH_SUCCESS: return{
            ...state,       
                token:action.token,
                uploadImage:action.uploadImage,
                description:action.description
        }
       
        case actionTypes.ADD_POST_FAIL: return{
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