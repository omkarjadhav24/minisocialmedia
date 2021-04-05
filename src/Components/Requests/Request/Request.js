import React, { useState } from 'react'
import './Request.css'
const Request =(props)=>{
   
    const [addfriend,setAddfriend]=useState(false);
   
    // friendRequestHandler=()=>{
    //     let prevState=null;
    //     prevState=this.state.addfriend
    //     this.setState({
    //         addfriend:!prevState
    //     })
    // }
   
        return(
<div className="mt-2 box bg-white">
        <div >
            {/* <img className="rounded-circle image" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/> */}
               <p id="name">{props.name}</p>
               <button  type="button" class="btn btn-primary">
                    <div onClick={props.accept} >
                    <i class="fa fa-user-plus" aria-hidden="true"></i>
                    <span>Accept</span> 
                    </div>
                </button>
               <button  type="button" class="btn btn-primary">
                
                    <div onClick={props.reject} >
                    <i class="fa fa-user-times" aria-hidden="true"></i>
                    <span>Reject</span>
                   </div>
                </button>
        </div>
</div>
        );
}
export default Request;