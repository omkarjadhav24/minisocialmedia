import React, {  useEffect, useState } from 'react'
import Search from '../Searches/search/Search'
import axios from 'axios'
const Searches =(props)=>{
    //state
    const [users,setUsers]=useState([]);
    const [addFriendId,setAddFriendId]=useState('');
    // for displaying search name
    useEffect(()=>{
        let token=localStorage.getItem('token')
        axios.get('http://885039200eb0.ngrok.io/user/'+props.match.params.name,{    
            headers: {
              'Authorization': `Bearer ${token}` ,
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Methods':'OPTIONS, GET, POST, PUT, PATCH, DELETE'
            }
          })
        .then(res=>{
            console.log(res.data._id)
            // storing fetched data in users state
            setUsers([res.data])
            // storing id of user in addFriendId
            setAddFriendId(res.data._id)
        })
        .catch(err=>console.log(err))
    })
    // for adding friend 
const addFriendHandler=()=>{
     let   friendData={
            id:addFriendId
        }// for sending param through api
        let token = localStorage.getItem('token')
        axios.post('http://885039200eb0.ngrok.io/send-request',friendData,{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    // for cancel friend request
 const  cancelFriendhandler=()=>{
        let   friendData={
            id:addFriendId
        }// // for sending param through api
        let token = localStorage.getItem('token') // token get
        axios.post('http://885039200eb0.ngrok.io/cancel-request',friendData,{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
        // showing all  users of serached name 
        let searchData=null;
        searchData=users.map(data=><Search key={data._id } cancelfriend={()=>cancelFriendhandler()} addfriend={()=>addFriendHandler()} name={data.name} id={data._id}/>)
        // searchData=users.map(data=>{
        //     return <Search key={data._id } cancelfriend={()=>cancelFriendhandler()} addfriend={()=>addFriendHandler()} name={data.name} id={data._id}/>
        // })
       
        return (
            <div class="row">
                <div class="sidebar col-sm bg-secondary">
                </div>
                <div class="col-sm bg-secondary">
                <h3 id="people">People</h3>
                    {searchData}
                </div>
                <div class="col-sm bg-secondary"></div>
            </div>
        );
}
export default Searches;