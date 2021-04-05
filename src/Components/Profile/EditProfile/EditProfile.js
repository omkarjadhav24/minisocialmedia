import React, { useState } from 'react';
import { Component } from 'react';
import classes from './EditProfile.module.css'
import  Button from '../../Ui/Button/Button'
import background from '../../../assets/log3.jpg'
import {connect} from 'react-redux'
import {editProfile} from '../../../Actions/EditProfile'
import axios from 'axios';
import moment from 'moment'
import {Redirect } from 'react-router-dom';

const EditProfile =(props)=>{

    const [name,setName]=useState(props.name);
    const [nameError,setNameError]=useState('');
    const [age,setAge]=useState(props.age);
    const [ageError,setAgeError]=useState('')
    const [date,setDate]=useState(props.dob)
    const [dateError,setDateError]=useState('');
    const [gender,setGender]=useState(props.gender);
    const [genderError,setGenderError]=useState('')
    const [email,setEmail]=useState(props.email);
    const [emailError,setEmailError]=useState('');
    const [password,setPassword]=useState('');
    const [passworError,setPassworError]=useState('');
    const [login,setLogin]=useState(false);
    const [redirect,setRedirect]=useState(false);
    const checkValidity=()=>{
        if( !isNaN(name))
        {
            setNameError('Name contains only chars')
        }
        else if(isNaN(age))
        {
            setAgeError('Age in Number')
        }
        else if(date=="")
        {
            setDateError('Date Is Empty')
        }
        else if(gender=="")
        {
            setGenderError('Gender Is Empty')
        }
        else if(email=="")
        {
            setEmailError('Email Is Empty')
        }
        else if(!(password.length>=5))
        {
            setPassworError('Enter Password More than 5 char.')
        }
        else{
            return true;
        }
       
    }
   
   const  submitHandler = (event) => {
        event.preventDefault();
        const editData={
            name :name ,
            dob:date,
            gender:gender,
            email:email,
            password:password,
            age:age
        }
       if(checkValidity())
       {
        let token = localStorage.getItem('token')
        console.log(editData)
        axios.patch(`http://885039200eb0.ngrok.io/user/update`,editData,{
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            console.log(res)
            setRedirect(true)
        })
        .catch(err=>{
            console.log(err);
        })
       }

        // if(checkValidity())
        // {
        //     this.props.editdataProfile(this.state.name,this.state.date,this.state.gender,this.state.email,this.state.password)
        //     console.log(this.state)
        // }
      
    }
    
        if(redirect){
            return <Redirect to="/profile" />
        }
        return(
            <div className={classes.SignUp} style={{ backgroundImage: `url(${background})` }} >
                <form onSubmit={(event)=>submitHandler(event)}>
                    <div className="form-group" >
                    <label className="font-weight-bold" >Name</label>
                    <input className="form-control-sm" type="text" value={name}  onChange={( event ) => setName(event.target.value)} className="form-control"  placeholder="Enter your Name"/>
                    <span className=" font-weight-bold text-danger font-italic">{nameError}</span>
                    </div>
                    <div className="form-group" >
                    <label className="font-weight-bold" >Age</label>
                    <input type="text" value={age}  onChange={( event ) => setAge(event.target.value)} className="form-control form-control-sm"   placeholder="Enter your Age"/>
                    <span className="font-weight-bold text-danger font-italic">{ageError}</span>
                    </div>
                    <div className="form-group ">
                    <label className="font-weight-bold">Date of Birth</label>
                    <input className="form-control" value={moment.utc(date).format('DD/MM/YYYY')}  onChange={( event ) => setDate(event.target.value)} type="date"  />
                    <span className=" font-weight-bold text-danger font-italic" >{dateError}</span>
                    </div>
                    <label className="font-weight-bold">Gender</label><br/>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio"   value="Male" name="inlineRadioOptions"    onChange={( event ) => setGender(event.target.value)}/>
                    <label className="form-check-label" >Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio"   value="FeMale" name="inlineRadioOptions"    onChange={( event ) => setGender(event.target.value)}/>
                    <label className="form-check-label" >FeMale</label><br/><br/>
                    </div>
                    <p className="font-weight-bold text-danger font-italic"> {genderError}</p>
                    <div className="form-group" >
                    <label  className="font-weight-bold" >Email address</label>
                    <input type="email" value={email} onChange={( event ) => setEmail(event.target.value)} className="form-control"   placeholder="Enter email"/>
                    <span className="font-weight-bold text-danger font-italic"> {emailError}</span>
                    </div>
                    <div className="form-group">
                    <label className="font-weight-bold" >Password</label>
                    <input type="password" value={password}  onChange={( event ) => setPassword(event.target.value)} className="form-control"  placeholder="Password"/>
                    <span className=" font-weight-bold text-danger font-italic">{ passworError}</span>
                    <button className="btn btn-primary">SAVE</button>
                    </div>
                </form>
            </div>
        );
}
const mapStatetoProps=(state)=>{
    return{
       name:state.showprofile.name,
       gender:state.showprofile.gender,
       dob:state.showprofile.dob, 
       email:state.showprofile.email,
       age:state.showprofile.age,
       token:state.loginauth.token
    }
   }
// const mapDispatchtoProps=(dispatch)=>{
//     return{
//        editdataProfile:(name,date,gender,email,password)=>{dispatch(editProfile(name,date,gender,email,password))} 


//     }
// }
export default connect(mapStatetoProps,null)(EditProfile);