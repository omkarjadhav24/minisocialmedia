import React ,{ createContext,useEffect,useReducer,useState} from 'react'
import classes from '../SignIn/Sign.module.css';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink, Redirect } from 'react-router-dom';
import loginImage from '../../../assets/log3.jpg'
import * as  actionType from '../../../Actions/ActionType'
import axios from 'axios'
// creating context api
const DisplayingSignUpPage=createContext();
// initial state for reducer
const initialState={
    token:'',
    error:'',
    signup:false

}
// reducer 
const reducer =(state,action)=>{
switch(action.type)
{
    case actionType.AUTH_SUCCESS:
        return{
            ...state,
            token:action.token
        }
    case actionType.AUTH_FAIL:
        return{
            ...state,
            error:action.error
        }
    case actionType.SIGN_UP:
        return{
            ...state,
            signup:true
        }
    default:
        return true;
}
}
const SignIn=(props)=>{
    // states
    const [state,dispatch]=useReducer(reducer,initialState)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [passworError,setPassworError]=useState('')
    const [login,setLogin]=useState(false)
    const [signUp,setSignUp]=useState(false)

    // validation on fields
   const checkValidity=()=>{
        if(!(password.length>=5))
        {
            setPassword('Enter Password More than 5 char.')
        }
        else{
            return true;
        }
       
    }
    // for displaying SignUp page when signUp state sets to true
    const signUpPageHandle=()=>{
        // props.signUp()
        dispatch({type:actionType.SIGN_UP});

    }
  // when user clicks to log in then execute
   const submitHandler = (event) => {
        event.preventDefault();
        // if checkvalidity returns true then execute
        if(checkValidity())
        {
            // props.loginauth(email,password)
            // for sending data with post method
            const authData={
                email:email,
                password:password
            }
            //url link
            let url='user/login';
            axios.post(url,authData)
            .then(res=>{
                console.log(res);
                localStorage.setItem('token',res.data.token ) // token stored in locastorage
                // if api get res then execute 
                dispatch({type:actionType.AUTH_SUCCESS,token:res.data.token});
            }).catch(err=>{
                // if api get failed then 
                dispatch({type:actionType.AUTH_FAIL,error:err.response.data.error});
    
            })
        }
    }
            // if token set then redirect to home page
        if(localStorage.getItem('token')){
            return <Redirect to="/home" />
        }
        return(
            <div className={classes.SignIn} style={{ backgroundImage: `url(${loginImage})` }} >
                <form onSubmit={(event)=>submitHandler(event)}>
                     <div className="form-group" >
                     <label className="font-weight-bold" >Email address</label>
                     <input type="email" value={email}  onChange={( event ) => setEmail(event.target.value)} className="form-control"   placeholder="Enter email"/>
                     </div>
                     <div className="form-group">
                    <label className="font-weight-bold"  >Password</label>
                    <input type="password" value={password}  onChange={( event ) => setPassword( event.target.value)} className="form-control"  placeholder="Password"/>
                    <span className="font-weight-bold text-danger font-italic">{passworError}</span>
                    </div>
                    <button className="btn btn-success" >LOGIN</button>
                    <button onClick={()=>signUpPageHandle()} className="btn btn-warning" ><NavLink to="/signup">SIGN UP</NavLink></button>
                    <DisplayingSignUpPage.Provider value={signUp} >
                        {props.children}
                    </DisplayingSignUpPage.Provider>
                </form>
              
            </div>
        );
}
// const mapStatetoProps=(state)=>{
//     return{
//        token:state.loginauth.token,
//     }
//    }
   
//    const mapDispatchtoProps=(dispatch)=>{
//     return{
//        signIn:()=>{dispatch(signInPage())} 
//     //    signUp:()=>{dispatch(signUpPage())} 
//     //    loginauth:(email,password)=>{dispatch(auth(email,password))} 
//     }
// }
export default SignIn;
export{DisplayingSignUpPage}