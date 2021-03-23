import * as actionTypes from '../Actions/ActionType';
// import { updateObject } from '../Shared/utility';

const initialState = {
    token: null,
    loading: false,
    name:null,
    gender:null,
    dob:null,
    profileId:null,
    email:null
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SHOW_PROFILE_START: return{
            ...state,
            loading:true

        }
        case actionTypes.SHOW_PROFILE_SUCCESS: return{
            ...state,
            name:action.name,
            gender:action.gender,
            dob:action.dob,
            profileId:action.profileId,
            email:action.email

        }
        case actionTypes.SHOW_PROFILE_FAIL: return{
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