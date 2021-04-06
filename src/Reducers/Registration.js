import * as actionTypes from '../Actions/ActionType';
// initial state of registartion
const initialState = {
    token: null,
    email:'',
    password:'',
    name:'',
    dob:'',
    gender:'',
    age:'',
    returnSecureToken:false,
    loading: false,
};
// reducer
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        // case execute when registartion start
        // and loading updates and becomes true
        case actionTypes.REGISTRATION_START: return{...state,loading:true}
        // case execute when registration registrationSuccess() execute and 
        // updates payload send by registrationSuccess() 
        case actionTypes.REGISTRATION_SUCCESS: return{
            ...state,
                email:action.email,
                password:action.password,
                name:action.name,
                dob:action.dob,
                gender:action.gender,
                age:action.age,
                token:action.token,
                returnSecureToken:true

        }
        // case execute when registration fails means action registrationFail() execute and store 
        // error message in error state
        case actionTypes.REGISTRATION_FAIL: return{...state,error:action.error}
        // case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:return state;
    }
};

export default reducer;