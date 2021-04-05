import React, { Component, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Homes from '../Home/Homes/Homes'
import {connect} from 'react-redux'
import {HomeData} from '../../Actions/HomeData'
import './Home.css'
const Home=(props)=> {

    const [posts,setPosts]=useState([])
    useEffect(()=>{
        props.homeCompodata()
             
        // axios.get('https://jsonplaceholder.typicode.com/photos')
        // .then(res=>{
        //     // console.log(res.data);
        //     const posts = res.data.slice( 0, 4 );
        //     console.log(res.data.id);
        //     // permittedValues = posts.map(value => value.id);
        //     const updatedPosts = posts.map( post => {
        //             return {
        //                 ...post
        //             }
        //         } );
        //         setPosts(updatedPosts)
        // }).catch(err=>{
        //     console.log(err);
        // }) 
    })
  
        const dataOfHome =posts.slice( 0, 4 );
        let homeDataPosts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        
        homeDataPosts =dataOfHome.map( post => {
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
                       {homeDataPosts}
                    </div>
                    <div className="rightsidebar col-sm bg-secondary">                        
                    </div>
                </div>
            </div>
        );
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