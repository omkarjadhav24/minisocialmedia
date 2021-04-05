import React, { Component, useEffect, useState } from 'react'
import Search from '../Searches/search/Search'
import SideBar from '../Ui/Sidebar/Sidebar'
import axios from 'axios'
const Searches =(props)=>{
    const [users,setUsers]=useState([]);
    const [addFriendId,setAddFriendId]=useState('');
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
            setUsers([res.data])
            setAddFriendId(res.data._id)
        })
        .catch(err=>{
            console.log(err);
        })
    })
    
const addFriendHandler=()=>{
     let   friendData={
            id:addFriendId
        }
        let token = localStorage.getItem('token')
        axios.post('http://885039200eb0.ngrok.io/send-request',friendData,{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
 const  cancelFriendhandler=()=>{
        let   friendData={
            id:addFriendId
        }
        let token = localStorage.getItem('token')
        axios.post('http://885039200eb0.ngrok.io/cancel-request',friendData,{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
        let searchdata=null;
        searchdata=users.map(data=>{
            return <Search key={data._id } cancelfriend={()=>cancelFriendhandler()} addfriend={()=>addFriendHandler()} name={data.name} id={data._id}/>
        })
       
        return (
            <div class="row">
                <div class="sidebar col-sm bg-secondary">
                </div>
                <div class="col-sm bg-secondary">
                <h3 id="people">People</h3>
                    {searchdata}
                </div>
                <div class="col-sm bg-secondary"></div>
            </div>
        );
}
export default Searches;