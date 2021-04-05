import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import SideBar from '../Ui/Sidebar/Sidebar'
import Homes from '../Home/Homes/Homes'
import {connect} from 'react-redux'
import {HomeData} from '../../Actions/HomeData'
import {showProfile} from '../../Actions/ShowProfile'

import './Home.css'
import axios from 'axios';
import { post } from 'jquery';
class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount(){
        this.props.homeCompodata()
        //  this.props.showProfileInfo();
    }
    logout=()=>{
        alert("hi")
        localStorage.removeItem('token');
    }
    // componentDidMount(){
    //     // this.props.homeData(); //fetching all friend  users post
        
    //     axios.get('https://jsonplaceholder.typicode.com/photos')
    //     .then(res=>{
    //         // console.log(res.data);
    //         const posts = res.data.slice( 0, 4 );
    //         console.log(res.data.id);
    //         // permittedValues = posts.map(value => value.id);
    //         const updatedPosts = posts.map( post => {
    //                 return {
    //                     ...post
    //                 }
    //             } );
    //             this.setState( { posts: updatedPosts } );
    //     }).catch(err=>{
    //         console.log(err);
    //     }) 
    // }

    render() {
        const dataOfHome =this.props.homePosts.slice( 0, 4 );
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        
        posts =dataOfHome.map( post => {
            return (
                <Homes
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    thumbnailUrl={post.thumbnailUrl}
                     />
                //
            );
        } );
        return (
            <div >
                <div className="row">
                    <div className="sidebar col-sm bg-secondary">
                    </div>
                    <div className="col-sm bg-secondary">
                    <div className="mt-2 box bg-white" >
                            <div className="home height">
                                <NavLink to="/newpost"><img className="addImage" height="29" src="https://img.icons8.com/fluent/48/000000/stack-of-photos.png" />
                                    <p id="addPhoto" >Add Photos</p>
                                </NavLink>
                            </div>
                        </div>
                       {posts}
                    </div>
                    <div className="rightsidebar col-sm bg-secondary">                        
                    </div>
                </div>
            </div>
        );
    };
}
const mapStatetoProps=(state)=>{
    return{
       homePosts:state.homeCompData.home,
       homedataid:state.homeCompData.homedataid
    }
   }
   
   const mapDispatchtoProps=(dispatch)=>{
    return{
       homeCompodata:()=>{dispatch(HomeData())}
    //    showProfileInfo:()=>{dispatch(showProfile())} 

    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Home);