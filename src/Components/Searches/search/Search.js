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

        <div className="mt-2 box bg-white">
            <div className="Search" >
               <p id="name">{this.props.name}</p>
               <button onClick={this.friendRequestHandler} type="button" class="btn btn-primary">
                   {this.state.addfriend ? 

                   <div onClick={this.props.cancelfriend}>
                    <i class="fa fa-user-times" aria-hidden="true"></i>
                    <span className="Follow">Cancel Request</span>
                   </div>

                   : 

                    <div onClick={this.props.addfriend} >
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                    <span  className="Follow">Add Friend</span>  
                    </div>
                    
                   }
                </button>
            </div>
        </div>
 
        );
    };
}
export default Search