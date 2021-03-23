import React from 'react';
import { Component } from 'react';
import classes from './EditProfile.module.css'
import  Button from '../../Ui/Button/Button'
import background from '../../../assets/log3.jpg'
import {connect} from 'react-redux'
import {editProfile} from '../../../Actions/EditProfile'
import axios from 'axios';
class EditProfile extends Component{
  
    componentDidMount(){
        console.log(this.props);
    }
    state={
        name:'',
        nameError:'',
        age:'',
        ageError:'',
        date:'',
        date:'',
        dateError:'',
        gender:'',
        genderError:'',
        email:'',
        emailError:'',
        password:'',
        passworError:'',
        login:false
    }
    checkValidity(){
        if( !isNaN(this.state.name))
        {
            this.setState({
                nameError:'Name contains only chars '
            });
        }
        else if(isNaN(this.state.age))
        {
            this.setState({
                ageError:'Age in Number'
            });
        }
        else if(this.state.date=="")
        {
            this.setState({
                dateError:'Date Is Empty'
            });
        }
        else if(this.state.gender=="")
        {
            this.setState({
                genderError:'Gender Is Empty'
            });
        }
        else if(this.state.email=="")
        {
            this.setState({
                emailError:'Email Is Empty'
            });
        }
        else if(!(this.state.password.length>=5))
        {
            this.setState({
                passworError:'Enter Password More than 5 char.'
            })
        }
        else{
            return true;
        }
       
    }

    submitHandler = (event) => {
        event.preventDefault();
        const editData={
            name :this.state.name ,
            dob:this.state.date,
            gender:this.state.gender,
            email:this.state.email,
            password:this.state.password,
            age:this.state.age
        }
        let token = localStorage.getItem('token')
        console.log(editData)
        axios.patch(`user/update`,editData,{
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err);
        })

        // if(this.checkValidity())
        // {
        //     this.props.editdataProfile(this.state.name,this.state.date,this.state.gender,this.state.email,this.state.password)
        //     console.log(this.state)
        // }
      
    }
    
    render(){
       
        return(
            <div className={classes.SignUp} style={{ backgroundImage: `url(${background})` }} >
                <form onSubmit={this.submitHandler}>
                    <div className="form-group" >
                    <label className="font-weight-bold" >Name</label>
                    <input className="form-control-sm" type="text" value={this.props.name ?    this.props.name :this.state.name}  onChange={( event ) => this.setState( { name: event.target.value } )} className="form-control"  placeholder="Enter your Name"/>
                    <span className=" font-weight-bold text-danger font-italic">{this.state.nameError}</span>
                    </div>
                    <div className="form-group" >
                    <label className="font-weight-bold" >Age</label>
                    <input type="text" value={this.props.age ?    this.props.age :this.state.age}  onChange={( event ) => this.setState( { age: event.target.value } )} className="form-control form-control-sm"   placeholder="Enter your Age"/>
                    <span className="font-weight-bold text-danger font-italic">{this.state.ageError}</span>
                    </div>
                    <div className="form-group ">
                    <label className="font-weight-bold">Date of Birth</label>
                    <input className="form-control" value={this.props.dob ?    this.props.dob :null}  onChange={( event ) => this.setState( { date: event.target.value } )} type="date"  />
                    <span className=" font-weight-bold text-danger font-italic" >{this.state.dateError}</span>
                    </div>
                    <label className="font-weight-bold">Gender</label><br/>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="Male" name="inlineRadioOptions"    onChange={( event ) => this.setState( { gender: event.target.value } )}/>
                    <label className="form-check-label" >Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value="FeMale" name="inlineRadioOptions"    onChange={( event ) => this.setState( { gender: event.target.value } )}/>
                    <label className="form-check-label" >FeMale</label><br/><br/>
                    </div>
                    <p className="font-weight-bold text-danger font-italic"> {this.state.genderError}</p>
                    <div className="form-group" >
                    <label  className="font-weight-bold" >Email address</label>
                    <input type="email" value={this.state.email}  onChange={( event ) => this.setState( { email: event.target.value } )} className="form-control"   placeholder="Enter email"/>
                    <span className="font-weight-bold text-danger font-italic"> {this.state.emailError}</span>
                    </div>
                    <div className="form-group">
                    <label className="font-weight-bold" >Password</label>
                    <input type="password" value={this.state.password}  onChange={( event ) => this.setState( { password: event.target.value } )} className="form-control"  placeholder="Password"/>
                    <span className=" font-weight-bold text-danger font-italic">{ this.state.passworError}</span>
                    <button className="btn btn-primary">SAVE</button>
                    </div>
                </form>
            </div>
        );
    };
}
const mapStatetoProps=(state)=>{
    return{
       name:state.showprofile.name,
       gender:state.showprofile.gender,
       dob:state.showprofile.dob, 
       email:state.showprofile.email,
       age:state.showprofile.age
    }
   }
// const mapDispatchtoProps=(dispatch)=>{
//     return{
//        editdataProfile:(name,date,gender,email,password)=>{dispatch(editProfile(name,date,gender,email,password))} 


//     }
// }
export default connect(mapStatetoProps,null)(EditProfile);