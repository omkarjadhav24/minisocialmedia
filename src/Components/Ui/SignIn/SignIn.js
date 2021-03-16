import React ,{Component} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import classes from '../SignIn/Sign.module.css';
import 'font-awesome/css/font-awesome.min.css';
import {NavLink, Redirect } from 'react-router-dom';
import {signInPage} from '../../../Actions/SignIn'
import {connect} from 'react-redux'


class SignIn extends Component{

    state={
        email:'',
        password:'',
        passworError:'',
        login:false
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
        this.props.signIn()
        // if(this.checkValidity())
        // {
        //     this.setState({login:true})
        // }
    }
    
    render(){
        if(this.props.login){
            return <Redirect to="/home" />
        }
        return(
            <div className={classes.SignIn} >
                <form onSubmit={this.submitHandler}>
                     <div className="form-group" >
                     <label for="exampleInputEmail1">Email address</label>
                     <input type="email" value={this.state.email}  onChange={( event ) => this.setState( { email: event.target.value } )} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                     </div>
                     <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" value={this.state.password}  onChange={( event ) => this.setState( { password: event.target.value } )} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    <span className="text-danger">{this.state.passworError}</span>
                    </div>
                    <Button btnType="Success">SUBMIT</Button>
                    <Button> <NavLink to="/signup">SIGN UP</NavLink></Button>
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
       login:state.login
    }
   }
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
       signIn:()=>{dispatch(signInPage())}  
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(SignIn);