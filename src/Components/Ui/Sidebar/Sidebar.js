import React from 'react'
import { Component } from 'react';
import './Sidebar.css'
class SideBar extends Component{
    logout(){
        console.log("work");
    }
    render(){
        return(
        <div>
            <ul>
                <li>Home</li>
                <li>Covid 19 Info. Center</li>
                <li>Friends</li>
                <li>Groups</li>
                <li>MarketPlace</li>
                <li>Watch</li>
                <li>Events</li>
                <li>Memories</li>
                <li onClick={this.props.clicked} >Logout</li>
            </ul>
            </div>
        );
    };
}
export default SideBar;