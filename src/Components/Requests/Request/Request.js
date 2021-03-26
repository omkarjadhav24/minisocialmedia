import React from 'react'
import { Component } from 'react';
import './Request.css'
class Request extends Component{
    state={
        addfriend:false
    }
   
    friendRequestHandler=()=>{
        let prevState=null;
        prevState=this.state.addfriend
        this.setState({
            addfriend:!prevState
        })
    }
    render()
    {
        return(
<div className="mt-2 box bg-white">
        <div >
            <img className="rounded-circle image" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
               <p id="name">{this.props.name}</p>
               <button onClick={this.friendRequestHandler} type="button" class="btn btn-primary">
                   {this.state.addfriend ? 
                   <div>
                    <i class="fa fa-user-times" aria-hidden="true"></i>
                    <span>Reject</span>
                   </div>
                   : 
                    <div>
                         <i class="fa fa-user-plus" aria-hidden="true"></i>
                    <span>Accept Friend</span> 
                    </div>
                   }
                </button>
        </div>
</div>
        );
    };
}
export default Request;