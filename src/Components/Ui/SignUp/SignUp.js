import React,{Component} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import classes from '../SignUp/SignUp.module.css';
import 'font-awesome/css/font-awesome.min.css';
import { withRouter } from 'react-router';


class SignUp extends Component{
 
    componentDidMount(){
        console.log(this.props);
        const {id} = this.props.match.params

console.log(id) // "foo"
    }
    state={
        name:'',
        date:'',
        gender:'',
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
                    <input type="text" value={this.state.name}  onChange={( event ) => this.setState( { name: event.target.value } )} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Name"/>
                    </div>
                    <div className="form-group ">
                    <label for="date-input">Date</label>
                    <input className="form-control form-control-sm" value={this.state.date}  onChange={( event ) => this.setState( { date: event.target.value } )} type="date" value="2021-02-24" />
                    </div>
                    <label for="date-input">Gender</label><br/>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={this.state.gender}  onChange={( event ) => this.setState( { gender: event.target.value } )}/>
                    <label className="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={this.state.gender}  onChange={( event ) => this.setState( { gender: event.target.value } )}/>
                    <label className="form-check-label" for="inlineRadio2">FeMale</label>
                    </div>
                    <div className="form-group" >
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" value={this.state.email}  onChange={( event ) => this.setState( { email: event.target.value } )} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" value={this.state.password}  onChange={( event ) => this.setState( { password: event.target.value } )} className="form-control form-control-sm" id="exampleInputPassword1" placeholder="Password"/>
                    <Button btnType="Success">SUBMIT</Button>
                    </div>
                </form>
            </div>
        );
    };
}
export default withRouter(SignUp);