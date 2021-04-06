import React,{useState,useReducer} from 'react'
import classes from '../SignUp/SignUp.module.css';
import 'font-awesome/css/font-awesome.min.css';
import signUpImage from '../../../assets/log3.jpg'
import {Redirect } from 'react-router-dom';
import * as actionType from '../../../Actions/ActionType'
import axios from 'axios'
// initila state for reducer
const initialState={
    token:null,
    error:null
}
// reducer for registration
const reducer =(state,action)=>{
    switch(action.type){
        case actionType.REGISTRATION_SUCCESS :return {...state, token:action.token} 
        case actionType.REGISTRATION_FAIL:return{...state,error:action.error}
        default:return true;
    }
    }
const SignUp=(props)=>{
    // created useReducer
    const [state,dispatch]=useReducer(reducer,initialState)
    // states
    const [name,setName]=useState('')
    const [nameError,setNameError]=useState('')
    const [age,setAge]=useState('')
    const [ageError,setAgeError]=useState('')
    const [date,setDate]=useState('')
    const [dateError,setDateError]=useState('')
    const [gender,setGender]=useState('')
    const [genderError,setGenderError]=useState('')
    const [email,setEmail]=useState('')
    const [emailError,setEmailError]=useState('')
    const [password,setPassword]=useState('')
    const [passworError,setPassworError]=useState('')

    // validation code for registration fields
    const checkValidity=()=>{
        if( !isNaN(name)) setNameError('Name contains only chars')
        else if(isNaN(age)) setAgeError('Age in Number')
        else if(date=="") setDateError('Date Is Empty')
        else if(gender=="") setGenderError('Gender Is Empty')
        else if(email=="") setEmailError('Email Is Empty')
        else if(!(password.length>=5)) setPassworError('Enter Password More than 5 char')
        else return true;
    }
    // on submit registration page
   const submitHandler = (event) => {
        event.preventDefault();
        // if checkValidity returns true then execute
        if(checkValidity())
        {
            // calling the function as a props from Actions/Registration.js-registration()
            // all inputs are from thisa component states
            // props.registrationsave(name,date,gender,email,password,age)

            // for sending data through post 
            const authData={
                name:name,
                date:date,
                gender:gender,
                email:email,
                password:password,
                age:age
            }
            // url link
            let url='http://885039200eb0.ngrok.io/user';
            axios.post(url,authData)
            .then(res=>{
                console.log(res);
                localStorage.setItem('token',res.data.token ) // token stored in locastorage
                // if api success then execute
                dispatch({type:actionType.REGISTRATION_SUCCESS,token:res.data.token});
            }).catch(err=>dispatch({type:actionType.REGISTRATION_FAIL,error:err.response.data.error})) // if api fails then execute
        }
    }
        // user register and then set token and if token set redirect to home page 
        let token = localStorage.getItem('token')
        if(token) (<Redirect to="/home" />)
        return(
            <div className={classes.SignUp} style={{ backgroundImage: `url(${signUpImage})` }} >
                <form onSubmit={(event)=>submitHandler(event)}>
                    <div className="form-group" >
                    <label className="font-weight-bold" >Name</label>
                    <input type="text" value={name}  onChange={( event ) => setName(event.target.value)} className="form-control form-control-sm"   placeholder="Enter your Name"/>
                    <span className="font-weight-bold text-danger font-italic">{nameError}</span>
                    </div>
                    <div className="form-group" >
                    <label className="font-weight-bold" >Age</label>
                    <input type="text" value={age}  onChange={( event ) =>setAge(event.target.value)} className="form-control form-control-sm"   placeholder="Enter your Age"/>
                    <span className="font-weight-bold text-danger font-italic">{ageError}</span>
                    </div>
                    <div className="form-group ">
                    <label className="font-weight-bold">Date of Birth</label>
                    <input className="form-control form-control-sm" value={date}  onChange={( event ) => setDate(event.target.value)} type="date"  />
                    <span className="font-weight-bold text-danger font-italic" >{dateError}</span>
                    </div>
                    <label className="font-weight-bold">Gender</label><br/>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="Male" name="inlineRadioOptions"    onChange={( event ) => setGender(event.target.value)}/>
                    <label className="form-check-label" >Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="FeMale" name="inlineRadioOptions"    onChange={( event ) => setGender(event.target.value)}/>
                    <label className="form-check-label" >FeMale</label><br/><br/>
                    </div>
                    <p className="font-weight-bold text-danger font-italic"> {genderError}</p>
                    <div className="form-group" >
                    <label className="font-weight-bold">Email address</label>
                    <input type="email" value={email}  onChange={( event ) => setEmail(event.target.value) } className="form-control form-control-sm"  placeholder="Enter email"/>
                    <span className="font-weight-bold text-danger font-italic" >{emailError}</span>
                    </div>
                    <div className="form-group">
                    <label className="font-weight-bold">Password</label>
                    <input type="password" value={password}  onChange={( event ) => setPassword(event.target.value)} className="form-control form-control-sm"  placeholder="Password"/>
                    <span>{passworError}</span>
                    <button  className="btn btn-outline-primary" >REGISTER</button>
                    </div>
                </form>
            </div>
        );
}
// const mapStatetoProps=(state)=>{
//     return{
//         // saving token from registration reducer for routing redirect to home 
//         token:state.registrationauth.token,
//     }
//    }
   // calling the funtion from Actions/Registration.js- registration()
//    const mapDispatchtoProps=(dispatch)=>{
//     return{
//         registrationsave:(name,dob,gender,email,password,age)=>{dispatch(registration(name,dob,gender,email,password,age))} 
//     }
// }
export default  SignUp;