import axios from 'axios';
import React ,{Component} from 'react'
import Request from '../Requests/Request/Request'
import SideBar from '../Ui/Sidebar/Sidebar'
class Requests extends Component{
  state={
      myRequest:[],
      senderId:''
  }
    componentDidMount(){
        let token = localStorage.getItem('token')
        axios.get('http://63393b7cfaf0.ngrok.io/my-request',{
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
           console.log(res)
            this.setState({myRequest:[res.data]})
            // console.log(this.state.myRequest)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    acceptFriendHandler=(id)=>{
      // alert(id)
      
      let   friendData={
        id:id,
        status:"1"
          }
      console.log(friendData);

      let token = localStorage.getItem('token')
      axios.post('http://63393b7cfaf0.ngrok.io/request-status',friendData,{
          
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
    rejectFriendHandler=(id)=>{
      // alert(id)
      let   friendData={
        id:id,
        status:"2"
          }
          
      let token = localStorage.getItem('token')
      axios.post('http://63393b7cfaf0.ngrok.io/request-status',friendData,{
          
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
    render()
    {
      let requestData=null;
        requestData=this.state.myRequest.map((data,i)=>{
       return data.map((sdata)=>{
        return <Request key={sdata._id} accept={()=>{this.acceptFriendHandler(sdata.sender_id)}} reject={()=>{this.rejectFriendHandler(sdata.sender_id)}} name={sdata.sender_id.name} id={sdata._id}/>
      })
        }) 


      //   let requestData=null;
      //   requestData=this.state.myRequest.map((data,i)=>{
      //  return data.map((sdata)=>{
      //   return <Request key={sdata._id} accept={()=>{this.acceptFriendHandler(sdata.receiver_id)}} reject={()=>{this.rejectFriendHandler(sdata.receiver_id)}} name={sdata.sender_id.name} id={sdata._id}/>
      // })
      //   }) 

      // return <Request key={data[i]._id} name={data[i].sender_id.name} id={data[i]._id}/>
      // console.log(data[0].sender_id)
      // return data.map((sdata)=>{
      //   return <Request key={sdata._id} accept={()=>{this.acceptFriendHandler(sdata.receiver_id)}} reject={()=>{this.rejectFriendHandler(sdata.receiver_id)}} name={sdata.sender_id.name} id={sdata._id}/>
      // })
        return(
       
        <div class="row">
        <div class="sidebar col-sm bg-secondary">
        {/* <SideBar clicked={this.logout} /> */}
        </div>
        <div class="col-sm bg-secondary ">
        <h3 id="people">People</h3>
        {/* <Request/> */}
        {requestData}
        </div>
        <div class="col-sm bg-secondary"></div>
        </div>
        );
    };
}
export default Requests;