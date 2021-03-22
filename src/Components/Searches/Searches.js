import React, { Component } from 'react'
import Search from '../Searches/search/Search'
import SideBar from '../Ui/Sidebar/Sidebar'
import axios from 'axios'
class Searches extends Component{
    // state={
    //     name:[
    //         {name:"Omkar" ,age:29 },
    //         {name:"Rahul" ,age:30 },
    //         {name:"Pratik" ,age:31 },
    //         {name:"Akshay" ,age:32 },
    //         {name:"Avadhut" ,age:33 },
    //         {name:"Omkar" ,age:36 },
    //         {name:"Omkar" ,age:37 },

    //     ]
    // }
    componentDidMount(){
        // console.log(this.props)
        console.log(this.props.match.params.name)
        axios.get('user/'+this.props.match.params.name)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
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