import * as actionTypes from '../Actions/ActionType';
import { updateObject } from '../Shared/utility';

const initialState = {
    token: null,
    signin:[],
    userId: null,
    error: null,
    home:[]
};

const homeStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const homeSuccess = (state, action) => {
    return updateObject( state, { 
       home:action.data
     } );
};

const homeFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return homeStart(state, action);
        case actionTypes.AUTH_SUCCESS: return homeSuccess(state, action);
        case actionTypes.AUTH_FAIL: return homeFail(state, action);
        // case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;