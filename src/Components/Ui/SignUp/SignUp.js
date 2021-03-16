import React,{Component} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import classes from '../SignUp/SignUp.module.css';
import 'font-awesome/css/font-awesome.min.css';


class SignUp extends Component{
 
    state={
        name:'',
        email:'',
        password:'',
        login:false
    }

    submitHandler = (event) => {
        event.preventDefault();
       console.log(this.state)
    }
    render(){
       
        return(
            <div className={classes.SignUp} >
                <form onSubmit={this.submitHandler}>
                    <div className="form-group" >
                    <label for="name">Name</label>
                    <input type="text" value={this.state.name}  onChange={( event ) => this.setState( { name: event.target.value } )} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Name"/>
                    </div>
                    <div className="form-group" >
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" value={this.state.email}  onChange={( event ) => this.setState( { email: event.target.value } )} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" value={this.state.password}  onChange={( event ) => this.setState( { password: event.target.value } )} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    <Button btnType="Success">SUBMIT</Button>
                    </div>
                </form>
            </div>
        );
    };
}
export default SignUp;