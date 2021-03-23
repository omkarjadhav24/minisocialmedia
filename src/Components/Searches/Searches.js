import React, { Component } from 'react'
import Search from '../Searches/search/Search'
import SideBar from '../Ui/Sidebar/Sidebar'
import axios from 'axios'
class Searches extends Component{
    componentDidMount(){
        console.log(this.props)
        console.log(this.props.match.params.name)
        // axios.get('user/'+this.props.match.params.name)
        // .then(res=>{
        //     console.log(res)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
         let token=localStorage.getItem('token')

        axios.get('https://v-social-media.herokuapp.com/user/'+this.props.match.params.name,{
            
            headers: {
              'Authorization': `Bearer ${token}` ,
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
              'Access-Control-Allow-Methods':'OPTIONS, GET, POST, PUT, PATCH, DELETE'
            }
          })
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        // let data=[];
        // let search=null;
        // let name=this.props.match.params.name; 
        // let convertName=name.charAt(0).toUpperCase() + name.slice(1)
        

        // if(convertName)
        // {
        //     data=this.state.name.filter(data=>data.name==convertName)
        //     search=data.map(data=>{
        //       return <Search name={data.name} age={data.age}/>
        //     })
        // }
        // console.log(search);
        return(
            <div class="row">
                <div class="sidebar col-sm bg-secondary">
                      <SideBar/>
                </div>
                <div class="col-sm bg-secondary">
                <h3 id="people">People</h3>
                {/* {search} */}
                </div>
                <div class="col-sm bg-secondary"></div>
            </div>
            // <div>
            //     <h3 id="people">People</h3>
            //     {search}
            // </div>
        );
    };
}
export default Searches;