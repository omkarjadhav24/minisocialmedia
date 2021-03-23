import axios from 'axios';
import React from 'react'
import { Component } from 'react';
import {NavLink} from 'react-router-dom'
import profileImage from '../../../assets/profile.png';
import {connect} from 'react-redux'
import {showProfile} from '../../../Actions/ShowProfile'
import moment from 'moment'


class Profiles extends Component{
    state={
        name:'',
        dateOfBirth:'',
        gender:'',
        username:''
    }

    componentDidMount(){
        // let token=localStorage.getItem('token')

        // axios.get('user/me',{
            
        //     headers: {
        //       'Authorization': `Bearer ${token}` 
        //     }
        //   })
        // .then(res=>{
        //     console.log(res.data)
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        this.props.showProfileInfo();
    }
    
    coomentHandler=()=>{
       let prevComment=this.state.comment;
    this.setState({
            comment:!prevComment
        })
       
    }
    
    render(){
        let dob =null
        dob=new Date(this.props.dob);
        return(
            <>
            <div className="mt-1 box bg-white" >
                    <div  className="profile">
                        <img  src={profileImage} width="40"/>
                        <p>UserName: {this.props.email}</p>
                        <p>Name :  {this.props.name}</p>
                        <p>Date Of Birth : {moment.utc(this.props.dob).format('MM/DD/YYYY')}</p>
                        <p>Gender : {this.props.gender} </p>
                        <button type="button" class="btn btn-outline-primary">Total Friends : </button>
                        <button className="btn btn-outline-warning"><NavLink to="/edit-profile" > Edit Profile </NavLink>  </button> 
                    </div>
                </div>
                <div className="mt-2 box bg-white" >
                            <div className="home height">
                                <NavLink to="/newpost"><img className="addImage" height="29" src="https://img.icons8.com/fluent/48/000000/stack-of-photos.png" />
                                    <p id="addPhoto" >Add Photos</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="box mt-3 bg-white">
                            <div className=" home">
                                <div className="d-flex flex-column comment-section">
                                    <div className="bg-white ">
                                        <div className="d-flex flex-row user-info">
                                            <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                            <div className="d-flex flex-column justify-content-start ml-2">
                                                <span className="d-block font-weight-bold name">Marry Andrews</span>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <img src="https://img.icons8.com/fluent/48/000000/stack-of-photos.png" />
                                            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white">
                                        <div className="d-flex flex-row fs-12">
                                            <div className="like  cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                                            <div onClick={() => { this.coomentHandler() }} className="like  poiner "><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="comments">
                                        <div class="d-flex flex-row mb-2">
                                            <div className="d-flex flex-column ml-2"><small className="comment-text">I like this alot! thanks alot</small>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row mb-2"> 
                                            <div className="d-flex flex-column ml-2"><small className="comment-text">Thanks for sharing!</small>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="bg-light ">
                                        {this.state.comment ?
                                            <div>
                                                <div className="d-flex flex-row align-items-start">
                                                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                                    <textarea className="form-control ml-1 shadow-none textarea"></textarea>
                                                </div>
                                                <div className="mt-2 text-right">
                                                    <button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button>
                                                    <button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
                                                </div>
                                            </div>
                                            : null}
                                    </div>
                                </div>
                            </div>
                        </div>
            </>
        );
    };
}
const mapStatetoProps=(state)=>{
    return{
            name:state.showprofile.name,
            gender:state.showprofile.gender,
            dob:state.showprofile.dob, 
            email:state.showprofile.email
    }
   }

const mapDispatchtoProps=(dispatch)=>{
    return{
       showProfileInfo:()=>{dispatch(showProfile())} 
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Profiles)