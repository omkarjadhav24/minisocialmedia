import React from 'react'
import { Component } from 'react';
import './Request.css'
class Request extends Component{
    state={
        addfriend:false
    }

    render()
    {
        return(
<div className="mt-2 box bg-white">
        <div >
            {/* <img className="rounded-circle image" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/> */}
               <p id="name">{this.props.name}</p>
               <button  type="button" class="btn btn-primary">
                    <div onClick={this.props.accept} >
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                    <span>Accept</span> 
                    </div>
                </button>
               <button  type="button" class="btn btn-primary">
                
                    <div onClick={this.props.reject} >
                    <i class="fa fa-user-times" aria-hidden="true"></i>
                    <span>Reject</span>
                   </div>
                </button>
        </div>
</div>
        );
    };
}
export default Request;