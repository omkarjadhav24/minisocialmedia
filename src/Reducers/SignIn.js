import * as actions from '../Actions/ActionType'
const initialState={
    login:false,
    signup:false
}
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actions.SIGN_IN:return{
            ...state,
            login:true
        }
        case actions.SIGN_UP:return{
            ...state,
            signup:true
        }
        default:return state;
    }
}
export default reducer;