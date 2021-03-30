import React, { Component } from 'react'
import './Profile.css'
import profileImage from '../../../src/assets/profile.png';
import {NavLink} from 'react-router-dom'
import SideBar from '../Ui/Sidebar/Sidebar'
import Profiles from '../Profile/Profiles/Profiles'
import axios from 'axios'
import moment from 'moment'
import {connect} from 'react-redux'

class Profile extends Component{
    
    state={
        userPosts:[],
        tFriends:null
    }

    componentDidMount(){
        let token=localStorage.getItem('token')
          // for showing all user posts
          axios.get('http://6902c639d64e.ngrok.io/my-story',{
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            this.setState({
                userPosts:[res.data]
            })
            // console.log(res.data)
        })
        .catch(err=>{
            console.log(err);
        })

        axios.get('http://6902c639d64e.ngrok.io/my-frinds',{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            this.setState({
                tFriends:res.data.length
            })
            console.log(res)
        })
        .catch(err=>{
            console.log(err);
        })

    }

    render(){

        let profileData=null;
        profileData=this.state.userPosts.map((data,i)=>{
       return data.map((sdata)=>{
        return <Profiles key={sdata._id} uploadImage={sdata.uploadImage} description={sdata.description} id={sdata._id}/>
      })
        }) 
        return(
            <div 
            class="row">
            <div class="sidebar col-sm bg-secondary">
                   {/* <SideBar/>     */}
            </div>
            <div class="col-sm bg-secondary">
                <div className="mt-1 box bg-white" >
                    <div  className="profile">
                        <img  src={profileImage} width="40"/>
                        <p>UserName: {this.props.email}</p>
                        <p>Name :  {this.props.name}</p>
                        <p>Age : {this.props.age}</p>
                        <p>Date Of Birth : {moment.utc(this.props.dob).format('MM/DD/YYYY')}</p>
                        <p>Gender : {this.props.gender} </p>
                        <button type="button" class="btn btn-outline-primary">Total Friends : {this.state.tFriends}</button>
                        <button className="btn btn-outline-warning"><NavLink to="/edit-profile" > Edit Profile </NavLink>  </button> 
                    </div>
                </div>
                <div className="mt-1 box bg-white" >
                            <div className="home height">
                                <NavLink to="/newpost"><img className="addImage" height="29" src="https://img.icons8.com/fluent/48/000000/stack-of-photos.png" />
                                    <p id="addPhoto" >Add Photos</p>
                                </NavLink>
                            </div>
                        </div>
               
                {profileData}
            </div>
            <div class="col-sm bg-secondary">

            </div>
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
export default connect(mapStatetoProps,null)(Profile);