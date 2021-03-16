import React, { Component } from 'react'
import './Search.css'
class Search extends Component{
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
    render(){
        return(
<div className="container mt-2">
    <div className="justify-content-center row">
        <div className="col-md-4">
            <div className="Search" >
            <img className="rounded-circle image" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
               <p id="name">{this.props.name}</p>
               <button onClick={this.friendRequestHandler} type="button" class="btn btn-primary">
                   {this.state.addfriend ? 
                   <div>
                    <i class="fa fa-user-times" aria-hidden="true"></i>
                    <span className="Follow">Cancel Request</span>
                   </div>
                   : 
                    <div>
                         <i class="fa fa-user-plus" aria-hidden="true"></i>
                    <span className="Follow">Add Friend</span> 
                      
                    </div>
                   }
                </button>
            </div>
        </div>
    </div>
</div>
        );
    };
}
export default Search