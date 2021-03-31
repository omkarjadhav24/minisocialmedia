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
      // for showing user all request
        let token = localStorage.getItem('token')
        axios.get('http://c0c58a590c5a.ngrok.io/my-request',{
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
    // accept frined
    acceptFriendHandler=(id)=>{
      // alert(id)
      
      let   friendData={
        id:id,
        status:"1"
          }
      console.log(friendData);

      let token = localStorage.getItem('token')
      axios.post('http://c0c58a590c5a.ngrok.io/request-status',friendData,{
          
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
    // reject friend
    rejectFriendHandler=(id)=>{
      // alert(id)
      let   friendData={
        id:id,
        status:"2"
          }
          
      let token = localStorage.getItem('token')
      axios.post('http://c0c58a590c5a.ngrok.io/request-status',friendData,{
          
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
      // for displaying user request
      let requestData=null;
        requestData=this.state.myRequest.map((data,i)=>{
       return data.map((sdata)=>{
        return <Request key={sdata._id} accept={()=>{this.acceptFriendHandler(sdata.sender_id)}} reject={()=>{this.rejectFriendHandler(sdata.sender_id)}} name={sdata.sender_id.name} id={sdata._id}/>
      })
        }) 
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