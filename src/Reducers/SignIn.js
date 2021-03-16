import * as actions from '../Actions/ActionType'
const initialState={
    login:false
}
const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actions.SIGN_IN:return{
            ...state,
            login:true
        }
        default:return state;
    }
}
export default reducer;