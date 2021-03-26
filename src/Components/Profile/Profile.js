import React, { Component } from 'react'
import './Profile.css'
import profileImage from '../../../src/assets/profile.png';
import {NavLink} from 'react-router-dom'
import SideBar from '../Ui/Sidebar/Sidebar'
import Profiles from '../Profile/Profiles/Profiles'
class Profile extends Component{
    
    render(){
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