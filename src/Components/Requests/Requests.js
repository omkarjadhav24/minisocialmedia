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
            console.log(this.state.myRequest)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render()
    {
      let requestData=null;
      requestData=this.state.myRequest.map((data,i)=>{
        console.log(data)
      }) 
      // return <Request key={data._id} name={data.sender_id.name} id={data._id}/>

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