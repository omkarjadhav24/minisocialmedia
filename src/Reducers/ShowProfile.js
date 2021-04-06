import * as actionTypes from '../Actions/ActionType';
// initial state
const initialState = {
    token: null,
    loading: false,
    name:null,
    gender:null,
    dob:null,
    profileId:null,
    email:null,
    age:null
};
// reducer
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        // when it start
        case actionTypes.SHOW_PROFILE_START: return{...state,loading:true}
        // when api get success
        case actionTypes.SHOW_PROFILE_SUCCESS: return{
            ...state,
            name:action.name,
            gender:action.gender,
            dob:action.dob,
            profileId:action.profileId,
            email:action.email,
            age:action.age
        }
        // when api get failed
        case actionTypes.SHOW_PROFILE_FAIL: return{...state,error:action.error}
        default:
            return state;
    }
};

export default reducer;