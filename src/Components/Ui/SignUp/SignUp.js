import React,{Component} from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import classes from '../SignUp/SignUp.module.css';
import 'font-awesome/css/font-awesome.min.css';
import { withRouter } from 'react-router';
import SignUpImage from '../../../assets/log3.jpg'


class SignUp extends Component{
 
    componentDidMount(){
    console.log(this.props);
    }
    state={
        name:'',
        nameError:'',
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
            console.log(this.state)
        }
    }
    render(){
       
        return(
            <div className={classes.SignUp} style={{ backgroundImage: `url(${SignUpImage})` }} >
                <form onSubmit={this.submitHandler}>
                    <div className="form-group" >
                    <label className="font-weight-bold" >Name</label>
                    <input type="text" value={this.state.name}  onChange={( event ) => this.setState( { name: event.target.value } )} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Name"/>
                    <span className="font-weight-bold text-danger font-italic">{this.state.nameError}</span>
                    </div>
                    <div className="form-group ">
                    <label className="font-weight-bold">Date</label>
                    <input className="form-control form-control-sm" value={this.state.date}  onChange={( event ) => this.setState( { date: event.target.value } )} type="date" value="2021-02-24" />
                    <span className="font-weight-bold text-danger font-italic" >{this.state.dateError}</span>
                    </div>
                    <label className="font-weight-bold">Gender</label><br/>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={this.state.gender}  onChange={( event ) => this.setState( { gender: event.target.value } )}/>
                    <label className="form-check-label text-light font-weight-bold" >Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value={this.state.gender}  onChange={( event ) => this.setState( { gender: event.target.value } )}/>
                    <label className="form-check-label  text-light font-weight-bold" >FeMale</label>
                    </div>
                    <p className="font-weight-bold text-danger font-italic" >{this.state.genderError}</p>
                    <div className="form-group" >
                    <label className="font-weight-bold">Email address</label>
                    <input type="email" value={this.state.email}  onChange={( event ) => this.setState( { email: event.target.value } )} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <span className="font-weight-bold text-danger font-italic" >{this.state.emailError}</span>
                    </div>
                    <div className="form-group">
                    <label className="font-weight-bold">Password</label>
                    <input type="password" value={this.state.password}  onChange={( event ) => this.setState( { password: event.target.value } )} className="form-control form-control-sm" id="exampleInputPassword1" placeholder="Password"/>
                    <span>{this.state.passworError}</span>
                    <button  className="btn btn-outline-primary" >REGISTER</button>
                    </div>
                </form>
            </div>
        );
    };
}
export default withRouter(SignUp);