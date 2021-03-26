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
        axios.get('http://be113eb45e0a.ngrok.io/my-request',{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
           
            this.setState({myRequest:[res.data]})
            // console.log(this.state.myRequest)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    acceptFriendHandler=(id)=>{
      alert(id)
    }
    rejectFriendHandler=(id)=>{
      alert(id)
    }
    render()
    {
      let requestData=null;
        requestData=this.state.myRequest.map((data,i)=>{
         return data.map((sdata)=>{
            return <Request key={sdata._id} accept={()=>{this.acceptFriendHandler(sdata._id)}} reject={()=>{this.rejectFriendHandler(sdata._id)}} name={sdata.sender_id.name} id={sdata._id}/>
          })
        }) 
      // return <Request key={data[i]._id} name={data[i].sender_id.name} id={data[i]._id}/>
      // console.log(data[0].sender_id)

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