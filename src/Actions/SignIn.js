import * as action from '../Actions/ActionType';

export const signIn=()=>{
    return{
        type:action.SIGN_IN
    }
}
export const signInPage=()=>{
    return dispatch=>{
        dispatch(signIn());
    }

}