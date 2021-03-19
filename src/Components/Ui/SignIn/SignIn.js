import React ,{Component} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import classes from '../SignIn/Sign.module.css';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink, Redirect } from 'react-router-dom';
import {signInPage,signUpPage} from '../../../Actions/SignIn'
import {auth} from '../../../Actions/Auth'
import {connect} from 'react-redux'
import loginImage from '../../../assets/log3.jpg'

class SignIn extends Component{

    state={
        email:'',
        password:'',
        passworError:'',
        login:false,
        signUp:false
    }
    checkValidity(){
        if(!(this.state.password.length>=5))
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
            this.props.signIn()
            this.props.loginauth(this.state.email,this.state.password)
        }
    }
    signUp=()=>{
        this.props.signUp()
    }
    
    render(){
        if(this.props.login){
            return <Redirect to="/home" />
        }
        return(
            <div className={classes.SignIn} style={{ backgroundImage: `url(${loginImage})` }} >
                <form onSubmit={this.submitHandler}>
                     <div className="form-group" >
                     <label className="font-weight-bold" >Email address</label>
                     <input type="email" value={this.state.email}  onChange={( event ) => this.setState( { email: event.target.value } )} className="form-control"   placeholder="Enter email"/>
                     </div>
                     <div className="form-group">
                    <label className="font-weight-bold"  >Password</label>
                    <input type="password" value={this.state.password}  onChange={( event ) => this.setState( { password: event.target.value } )} className="form-control"  placeholder="Password"/>
                    <span className="font-weight-bold text-danger font-italic">{this.state.passworError}</span>
                    </div>
                    <button className="btn btn-success" >LOGIN</button>
                    <button onClick={this.signUp} className="btn btn-warning" ><NavLink to="/signup">SIGN UP</NavLink></button>
                    {/* <Button btnType="Success">SUBMIT</Button>
                    <Button clicked={this.signUp} > <NavLink to="/signup">SIGN UP</NavLink></Button> */}
                </form>
                {/* <form onSubmit={this.submitHandler}>
                    {form}
                   
                </form>
                {/* <Button 
                clicked={this.switchAuthModeHandler}
                btnType="Danger">SWITCH TO {this.state.isSignUp ? 'SIGNIN':'SIGNUP' }</Button>                 */}
            </div>
        );
    };
}
const mapStatetoProps=(state)=>{
    return{
       login:state.loginauth.returnSecureToken,
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