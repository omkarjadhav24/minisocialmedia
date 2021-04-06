import * as actions from '../Actions/ActionType'
// initial state
const initialState={
    login:false,
    signup:false
}
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        // clicked on sign in button it gets true
        case actions.SIGN_IN:return{...state,login:true}
        // clicked on sign up button it gets true
        case actions.SIGN_UP:return{...state,signup:true}
        default:return state;
    }
}
export default reducer;