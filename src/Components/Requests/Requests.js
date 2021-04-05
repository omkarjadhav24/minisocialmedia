import axios from 'axios';
import React ,{Component, useEffect, useState} from 'react'
import Request from '../Requests/Request/Request'
import SideBar from '../Ui/Sidebar/Sidebar'
const Requests =(props)=>{
 
  const [myRequest,setMyRequest]=useState([]);
  const [senderId,setSenderId]=useState('')
    
    useEffect(()=>{
      let token = localStorage.getItem('token')
      axios.get('http://885039200eb0.ngrok.io/my-request',{
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        })
      .then(res=>{
         console.log(res)
          setMyRequest([res.data])
      })
      .catch(err=>{
          console.log(err)
      })
    })

    const acceptFriendHandler=(id)=>{
      
      let   friendData={
        id:id,
        status:"1"
          }
      console.log(friendData);

      let token = localStorage.getItem('token')
      axios.post('http://885039200eb0.ngrok.io/request-status',friendData,{
          
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
   const rejectFriendHandler=(id)=>{
      let   friendData={
        id:id,
        status:"2"
          }
          
      let token = localStorage.getItem('token')
      axios.post('http://885039200eb0.ngrok.io/request-status',friendData,{
          
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

      let requestData=null;
        requestData=myRequest.map((data,i)=>{
       return data.map((sdata)=>{
        return <Request key={sdata._id} accept={()=>{acceptFriendHandler(sdata.sender_id)}} reject={()=>{rejectFriendHandler(sdata.sender_id)}} name={sdata.sender_id.name} id={sdata._id}/>
      })
        }) 
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