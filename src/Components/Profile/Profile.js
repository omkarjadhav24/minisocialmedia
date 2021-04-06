import React, { useEffect, useState } from 'react'
import './Profile.css'
import profileImage from '../../../src/assets/profile.png';
import {NavLink} from 'react-router-dom'
import Profiles from '../Profile/Profiles/Profiles'
import axios from 'axios'
import moment from 'moment'

const Profile =(props)=>{
    //state
    const [userPosts,setUserPosts]=useState([]);
    const [tFriends,setTFriends]=useState(null)
    const [name,setName]=useState(null);
    const [gender,setGender]=useState(null);
    const [dob,setDob]=useState(null);
    const [id,setId]=useState(null);
    const [email,setEmail]=useState(null);
    const [age,setAge]=useState(null);
    // for fetching user posts
    useEffect(()=>{
        let token=localStorage.getItem('token')// token get
        axios.get('http://885039200eb0.ngrok.io/my-story',{
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        })
      .then(res=>{
        // update posts for displaying user post by map function
          setUserPosts([res.data])
          console.log(res.data)
      })
      .catch(err=>{
          console.log(err);
      })
      // for  getting total friends of user
      axios.get('http://885039200eb0.ngrok.io/my-frinds',{
          
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        })
      .then(res=>{
        // updating tFriends for displaying Total friends of user
          setTFriends(res.data.length)
          console.log(res)
      })
      .catch(err=>{
          console.log(err);
      })
    })
    // profile displaying user info in profile page
    useEffect(()=>{
      let token = localStorage.getItem('token') // token get
      axios.get('http://885039200eb0.ngrok.io/user/me',{  
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        })
      .then(res=>{
          console.log(res)
          // getting values from res and stored in state
          setName(res.data.name);
          setGender(res.data.gender);
          setDob(res.data.dob);
          setId(res.data._id);
          setEmail(res.data.email);
          setAge(res.data.age);
      })
      .catch(err=>{
          console.log(err);
      })
    })

    // for displaying user post and sending data with props to Profiles Component
        let profileData=null;
        profileData=userPosts.map((data,i)=>data.map((sdata)=><Profiles key={sdata._id}  name={name} owner={sdata.owner} likesCount={sdata.likes.length} comments={sdata.comments.length} uploadImage={sdata.uploadImage} description={sdata.description} id={sdata._id}/>)) 
        // profileData=userPosts.map((data,i)=>{
        //   return data.map((sdata)=>{
        //    return <Profiles key={sdata._id}  name={name} owner={sdata.owner} likesCount={sdata.likes.length} comments={sdata.comments.length} uploadImage={sdata.uploadImage} description={sdata.description} id={sdata._id}/>
        //  })
        //    }) 
        return(
            <div 
            class="row">
            <div class="sidebar col-sm bg-secondary">
            </div>
            <div class="col-sm bg-secondary">
                <div className="mt-1 box bg-white" >
                    <div  className="profile">
                        <img  src={profileImage} width="40"/>
                        <p>UserName: {email}</p>
                        <p>Name :  {name}</p>
                        <p>Age : {age}</p>
                        <p>Date Of Birth : {moment.utc(dob).format('MM/DD/YYYY')}</p>
                        <p>Gender : {gender} </p>
                        <button type="button" class="btn btn-outline-primary">Total Friends : {tFriends}</button>
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
}
// const mapStatetoProps=(state)=>{
//     return{
//             name:state.showprofile.name,
//             gender:state.showprofile.gender,
//             dob:state.showprofile.dob, 
//             email:state.showprofile.email,
//             age:state.showprofile.age
//     }
//    }
export default Profile;