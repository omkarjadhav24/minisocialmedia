import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import SideBar from '../Ui/Sidebar/Sidebar'
import Homes from '../Home/Homes/Homes'
import './Home.css'
class Home extends Component {
    
    render() {
        return (
            <div >
                <div className="row">
                    <div className="sidebar col-sm bg-secondary">
                        <SideBar/>
                    </div>
                    <div className="col-sm bg-secondary">
                        <Homes/>
                    </div>
                    <div className="rightsidebar col-sm bg-secondary">
                                            
                    </div>
                </div>
            </div>
        );
    };
}
export default Home;