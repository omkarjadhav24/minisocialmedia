import * as action from '../Actions/ActionType';

// for sign up
export const signUp=()=>{return{type:action.SIGN_UP}}
// clicked on sign up button  then go to sign up page
export const signUpPage=()=>{
    return dispatch=>{
        dispatch(signUp());
    }
}