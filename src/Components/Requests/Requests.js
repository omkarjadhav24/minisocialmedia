import React ,{Component} from 'react'
import Request from '../Requests/Request/Request'
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
                        <ul>
                            <li>Home</li>
                            <li>Covid 19 Info. Center</li>
                            <li>Friends</li>
                            <li>Groups</li>
                            <li>MarketPlace</li>
                            <li>Watch</li>
                            <li>Events</li>
                            <li>Memories</li>
                            <li>Saved</li>
                        </ul>
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