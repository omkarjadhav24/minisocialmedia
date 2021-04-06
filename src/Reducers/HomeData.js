import * as actionTypes from '../Actions/ActionType';
// initial state
const initialState = {
    token: null,
    homeDataid:null,
    loading:false,
    error: null,
    home:[]
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        // updates when home starting
        case actionTypes.HOME_START: return {...state,loading:true}
        // state updates when api succesfully fetch data and storing the fetched data in home array
        case actionTypes.HOME_SUCCESS: return{...state,home:action.homeData,homeDataid:action.homeDataid}
        //when api get failed then update state error and store error message
        case actionTypes.REGISTRATION_FAIL: return{...state,error:action.error}
        default:return state;
    }
};

export default reducer;