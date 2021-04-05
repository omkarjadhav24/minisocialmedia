import React, { Component } from 'react'
import Search from '../Searches/search/Search'
import SideBar from '../Ui/Sidebar/Sidebar'
import axios from 'axios'
class Searches extends Component{
    state={
        users:[],
        addFriendId:''
    }
    componentDidMount(){
         let token=localStorage.getItem('token')
        axios.get('http://885039200eb0.ngrok.io/user/'+this.props.match.params.name,{    
            headers: {
              'Authorization': `Bearer ${token}` ,
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Methods':'OPTIONS, GET, POST, PUT, PATCH, DELETE'
            }
          })
        .then(res=>{
            console.log(res.data._id)
            this.setState({users:[res.data],addFriendId:res.data._id})
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    addFriendHandler=()=>{
     let   friendData={
            id:this.state.addFriendId
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
    cancelFriendhandler=()=>{
        let   friendData={
            id:this.state.addFriendId
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
    render(){
        let searchdata=null;
        searchdata=this.state.users.map(data=>{
            return <Search key={data._id } cancelfriend={this.cancelFriendhandler} addfriend={this.addFriendHandler} name={data.name} id={data._id}/>
        })
       
        return(
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
    };
}
export default Searches;