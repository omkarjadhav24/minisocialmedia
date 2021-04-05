import React ,{ useEffect,useReducer,useState} from 'react'
import classes from '../SignIn/Sign.module.css';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink, Redirect } from 'react-router-dom';
import {signInPage,signUpPage} from '../../../Actions/SignIn'
import {auth} from '../../../Actions/Auth'
import {connect} from 'react-redux'
import loginImage from '../../../assets/log3.jpg'
import axios from 'axios'
const initialstate={
    
}
const SignIn=(props)=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [passworError,setPassworError]=useState('')
    const [login,setLogin]=useState(false)
    const [signUp,setSignUp]=useState(false)

   const checkValidity=()=>{
        if(!(password.length>=5))
        {
            setPassword('Enter Password More than 5 char.')
        }
        else{
            return true;
        }
       
    }
    const signUpPageHandle=()=>{
        props.signUp()
    }
  
   const submitHandler = (event) => {
        event.preventDefault();
        
        if(checkValidity())
        {
            props.loginauth(email,password)
        }
    }
 
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
                </form>
              
            </div>
        );
}
const mapStatetoProps=(state)=>{
    return{
       token:state.loginauth.token,
    }
   }
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
       signIn:()=>{dispatch(signInPage())} ,
       signUp:()=>{dispatch(signUpPage())} ,
       loginauth:(email,password)=>{dispatch(auth(email,password))} 


    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(SignIn);