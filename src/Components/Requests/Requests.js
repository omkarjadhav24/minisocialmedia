import React ,{Component} from 'react'
import Request from '../Requests/Request/Request'
import SideBar from '../Ui/Sidebar/Sidebar'
class Requests extends Component{
    state={
        name:[
            {name:"Omkar" ,age:29 },
            {name:"Rahul" ,age:30 },
            {name:"Pratik" ,age:31 },
            {name:"Akshay" ,age:32 },
            {name:"Avadhut" ,age:33 },
            {name:"Omkar" ,age:36 },
            {name:"Omkar" ,age:37 },

        ]
    }
    logout=()=>{
       alert("done")
    }
    render()
    {
        // let data=[];
        // let search=null;
        // let name=this.props.match.params.name;
        // let convertName=name.charAt(0).toUpperCase() + name.slice(1)
        // if(name)
        // {
        //     data=this.state.name.filter(data=>data.name==name)
        //     search=data.map(data=>{
        //       return <Request name={data.name} age={data.age}/>
        //     })
        // }
        return(
        // <div>
        //     <h3 id="people">People</h3>
        //     <Request/>
        // </div>
        <div class="row">
        <div class="sidebar col-sm bg-secondary">
        <SideBar clicked={this.logout} />
        </div>
        <div class="col-sm bg-secondary ">
        <h3 id="people">People</h3>
        <Request/>
        </div>
        <div class="col-sm bg-secondary"></div>
        </div>
        );
    };
}
export default Requests;