import * as action from '../Actions/ActionType';

export const signIn=()=>{
    return{
        type:action.SIGN_IN
    }
}
export const signUp=()=>{
    return{
        type:action.SIGN_UP
    }
}
export const signInPage=()=>{
    return dispatch=>{
        dispatch(signIn());
    }

}
export const signUpPage=()=>{
    return dispatch=>{
        dispatch(signUp());
    }

}