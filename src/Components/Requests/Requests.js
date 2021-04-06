import axios from 'axios';
import React ,{ useEffect, useState} from 'react'
import Request from '../Requests/Request/Request'
const Requests =(props)=>{
 
  //state 
  const [myRequest,setMyRequest]=useState([]);
  // const [senderId,setSenderId]=useState('')
    
    // for displaying all request of user
    useEffect(()=>{
      let token = localStorage.getItem('token')
      axios.get('http://885039200eb0.ngrok.io/my-request',{
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        })
      .then(res=>setMyRequest([res.data])) // updating myRequest state and store all request data
      .catch(err=>console.log(err))
    })

    // for accepting user friend request
    const acceptFriendHandler=(id)=>{
      let   friendData={
        id:id,
        status:"1"
          }// for sending param with api
      console.log(friendData);

      let token = localStorage.getItem('token')
      axios.post('http://885039200eb0.ngrok.io/request-status',friendData,{
          
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        })
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
    }

    // for rejecting friend request
   const rejectFriendHandler=(id)=>{
      let   friendData={
        id:id,
        status:"2"
          }// for sending param with api
      let token = localStorage.getItem('token')
      axios.post('http://885039200eb0.ngrok.io/request-status',friendData,{
          
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        })
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
    }
      // for displaying all request 
      let requestData=null;
      requestData=myRequest.map((data,i)=>data.map((sdata)=><Request key={sdata._id} accept={()=>{acceptFriendHandler(sdata.sender_id)}} reject={()=>{rejectFriendHandler(sdata.sender_id)}} name={sdata.sender_id.name} id={sdata._id}/>)) 

      //   requestData=myRequest.map((data,i)=>{
      //  return data.map((sdata)=>{
      //   return <Request key={sdata._id} accept={()=>{acceptFriendHandler(sdata.sender_id)}} reject={()=>{rejectFriendHandler(sdata.sender_id)}} name={sdata.sender_id.name} id={sdata._id}/>
      // })
      //   }) 
        return(
       
        <div class="row">
        <div class="sidebar col-sm bg-secondary">
        </div>
        <div class="col-sm bg-secondary ">
        <h3 id="people">People</h3>
        {requestData}
        </div>
        <div class="col-sm bg-secondary"></div>
        </div>
        );
}
export default Requests;