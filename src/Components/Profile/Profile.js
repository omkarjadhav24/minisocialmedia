import React, { Component } from 'react'
import './Profile.css'
import profileImage from '../../../src/assets/profile.png';
import {NavLink} from 'react-router-dom'
import SideBar from '../Ui/Sidebar/Sidebar'
import Profiles from '../Profile/Profiles/Profiles'
import axios from 'axios'
class Profile extends Component{
    
    state={
        userPosts:[]
    }

    componentDidMount(){
        let token=localStorage.getItem('token')
          // for showing all user posts
          axios.get('http://c0998ec2cdd0.ngrok.io/my-story',{
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            this.setState({
                userPosts:[res.data]
            })
            console.log(res)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render(){
        // let profile
        return(
            <div 
            class="row">
            <div class="sidebar col-sm bg-secondary">
                   {/* <SideBar/>     */}
            </div>
            <div class="col-sm bg-secondary">
                <Profiles/>
            </div>
            <div class="col-sm bg-secondary">

            </div>
          </div>
        );
    };
}
export default Profile;