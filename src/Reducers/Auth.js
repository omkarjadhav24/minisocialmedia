import * as actionTypes from '../Actions/ActionType';
// import { updateObject } from '../Shared/utility';

const initialState = {
    token: null,
    email:'',
    password:'',
    returnSecureToken:false,
    loading: false
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return{
            ...state,
            loading:true

        }
        case actionTypes.AUTH_SUCCESS: return{
            ...state,
            email:action.email,
            password:action.password,
            token:action.token

        }
        case actionTypes.AUTH_FAIL: return{
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