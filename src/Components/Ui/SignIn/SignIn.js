import React ,{ createContext,useReducer,useState} from 'react'
import classes from '../SignIn/Sign.module.css';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink, Redirect } from 'react-router-dom';
import loginImage from '../../../assets/log3.jpg'
import * as  actionType from '../../../Actions/ActionType'
import axios from 'axios'
//creating context api
const DisplaySignUpPage=createContext();
// creating initialState
const initialState={
    token:'',
    error:'',
    signup:false
}
// reducer for authentication and for signUp page displaying
    const reducer =(state,action)=>{
    switch(action.type){
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
const signIn=(props)=>{
    // state
    const [state,dispatch]=useReducer(reducer,initialState)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [passworError,setPassworError]=useState('')
    const [login,setLogin]=useState(false)
    const [signUp,setSignUp]=useState(false)
    // code for validating signIn page 
   const checkValidity=()=>{
        if(!(password.length>=5))
        {
            setPassword('Enter Password More than 5 char.')
        }
        else{
            return true;
        }
       
    }
    // for signUp page when signUp button clicks then show signUp page 
    const signUpPageHandle=()=>{
        // props.signUp()
        // for setting signUp state true
        dispatch({type:actionType.SIGN_UP});

    }
  // login button clicks
   const submitHandler = (event) => {
        event.preventDefault();
        // if all validation function  return true then enter 
        if(checkValidity())
        {
            // props.loginauth(email,password)
            // for sending data email,password
            const authData={
                email:email,
                password:password
            }
            // url link
            let url='user/login';
            axios.post(url,authData)
            .then(res=>{
                console.log(res);
                localStorage.setItem('token',res.data.token ) // token stored in locastorage
                // if request get res then 
                dispatch({type:actionType.AUTH_SUCCESS,token:res.data.token});
            }).catch(err=>{
                // when req failed
                dispatch({type:actionType.AUTH_FAIL,error:err.response.data.error});
    
            })
        }
    }
        // redirecting page to home page if token is set
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
                    {/* for sending  DisplaySignUpPage to childrean  */}
                    <DisplaySignUpPage.Provider value={signUp} >
                        {props.children}
                    </DisplaySignUpPage.Provider>
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
export default signIn;
// exporting context
export {DisplaySignUpPage}