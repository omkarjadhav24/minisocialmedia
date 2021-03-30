import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'
import {showProfile} from '../../../Actions/ShowProfile'


class Profiles extends Component{
    state={
        name:'',
        dateOfBirth:'',
        gender:'',
        username:'',
        userPosts:[]
    }

    componentDidMount(){
        // showing profie info like  name , dob,gender
        this.props.showProfileInfo();
    }
    
    // for toggle button comment
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
           
               
                        <div className="box mt-3 bg-white">
                            <div className=" home">
                                <div className="d-flex flex-column comment-section">
                                    <div className="bg-white ">
                                        <div className="d-flex flex-row user-info">
                                            {/* <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /> */}
                                            <div className="d-flex flex-column justify-content-start ml-2">
                                                <span className="d-block font-weight-bold name">{this.props.name}</span>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <img src="https://img.icons8.com/fluent/48/000000/stack-of-photos.png" />
                                            <p className="comment-text">{this.props.description}</p>
                                        </div>
                                    </div>
                                    <div className="bg-white">
                                        <div className="d-flex flex-row fs-12">
                                            <div className="like  cursor"><i class="fa fa-thumbs-up" aria-hidden="true"></i><span className="ml-1">Like</span></div>
                                            <div className="like  cursor"><i class="fa fa-thumbs-down" aria-hidden="true"></i><span className="ml-1">DisLike</span></div>

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
            name:state.showprofile.name
    }
   }

const mapDispatchtoProps=(dispatch)=>{
    return{
       showProfileInfo:()=>{dispatch(showProfile())} 
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Profiles)