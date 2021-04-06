import React, { useState } from 'react'
import './Search.css'
const Search =(props)=>{
    // states
    const [addfriend,setAddfriend]=useState(false)
    // toggle button add friend to cancel request
   const  friendRequestHandler=()=>{
        let prevState=null;
        prevState=addfriend
        setAddfriend(!prevState)
    }
        return (
        <div className="mt-2 box bg-white">
            <div className="Search" >
               <p id="name">{this.props.name}</p>
               <button onClick={()=>friendRequestHandler()} type="button" class="btn btn-primary">
                   {addfriend ? 

                   <div onClick={props.cancelfriend}>
                    <i class="fa fa-user-times" aria-hidden="true"></i>
                    <span className="Follow">Cancel Request</span>
                   </div>

                   : 

                    <div onClick={props.addfriend} >
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                    <span  className="Follow">Add Friend</span>  
                    </div>
                    
                   }
                </button>
            </div>
        </div>
 
        );
}
export default Search