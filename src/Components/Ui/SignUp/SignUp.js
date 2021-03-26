import React,{Component} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import classes from '../SignUp/SignUp.module.css';
import 'font-awesome/css/font-awesome.min.css';
import { withRouter } from 'react-router';
import SignUpImage from '../../../assets/log3.jpg'
import {connect} from 'react-redux'
import {registration} from '../../../Actions/Registration'
import {Redirect } from 'react-router-dom';


class SignUp extends Component{
 
    componentDidMount(){
    console.log(this.props);
    }
    state={
        name:'',
        nameError:'',
        age:'',
        ageError:'',
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
        if(this.checkValidity())
        {
            // calling the function as a props from Actions/Registration.js-registration()
            // all inputs are from thisa component states
            this.props.registrationsave(this.state.name,this.state.date,this.state.gender,this.state.email,this.state.password,this.state.age)
        }
    }
    render(){
        let token = localStorage.getItem('token')
        if(token){
            return <Redirect to="/home" />
        }
        return(
            <div className={classes.SignUp} style={{ backgroundImage: `url(${SignUpImage})` }} >
                <form onSubmit={this.submitHandler}>
                    <div className="form-group" >
                    <label className="font-weight-bold" >Name</label>
                    <input type="text" value={this.state.name}  onChange={( event ) => this.setState( { name: event.target.value } )} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Name"/>
                    <span className="font-weight-bold text-danger font-italic">{this.state.nameError}</span>
                    </div>
                    <div className="form-group" >
                    <label className="font-weight-bold" >Age</label>
                    <input type="text" value={this.state.age}  onChange={( event ) => this.setState( { age: event.target.value } )} className="form-control form-control-sm"   placeholder="Enter your Age"/>
                    <span className="font-weight-bold text-danger font-italic">{this.state.ageError}</span>
                    </div>
                    <div className="form-group ">
                    <label className="font-weight-bold">Date of Birth</label>
                    <input className="form-control form-control-sm" value={this.state.date}  onChange={( event ) => this.setState( { date: event.target.value } )} type="date"  />
                    <span className="font-weight-bold text-danger font-italic" >{this.state.dateError}</span>
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
                    <label className="font-weight-bold">Email address</label>
                    <input type="email" value={this.state.email}  onChange={( event ) => this.setState( { email: event.target.value } )} className="form-control form-control-sm"  placeholder="Enter email"/>
                    <span className="font-weight-bold text-danger font-italic" >{this.state.emailError}</span>
                    </div>
                    <div className="form-group">
                    <label className="font-weight-bold">Password</label>
                    <input type="password" value={this.state.password}  onChange={( event ) => this.setState( { password: event.target.value } )} className="form-control form-control-sm"  placeholder="Password"/>
                    <span>{this.state.passworError}</span>
                    <button  className="btn btn-outline-primary" >REGISTER</button>
                    </div>
                </form>
            </div>
        );
    };
}
const mapStatetoProps=(state)=>{
    return{
        // saving token from registration reducer for routing redirect to home 
        token:state.registrationauth.token,
    }
   }
   // calling the funtion from Actions/Registration.js- registration()
   const mapDispatchtoProps=(dispatch)=>{
    return{
        registrationsave:(name,dob,gender,email,password,age)=>{dispatch(registration(name,dob,gender,email,password,age))} 
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps) (SignUp);