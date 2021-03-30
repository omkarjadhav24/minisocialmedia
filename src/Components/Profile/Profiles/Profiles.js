import React from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'


class Profiles extends Component{
    state={
        name:'',
        dateOfBirth:'',
        gender:'',
        username:'',
        userPosts:[],
        like:true,
        owner:this.props.owner,
        story_id:this.props.id,
        totalLikes:this.props.likesCount,
        commentInput:''
    }


    componentDidMount(){
        let token = localStorage.getItem('token')

        // axios.get('http://63393b7cfaf0.ngrok.io/readcomment/'+this.props.id,{
        //     headers: {
        //         'Authorization': `Bearer ${token}` 
        //       }
        // })
        // .then(res=>{
        //     console.log(res)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
    }
    
    // for toggle button comment
    coomentHandler=()=>{
       let prevComment=this.state.comment;
    this.setState({
            comment:!prevComment
        })
       
    }
    // post like handler
    likeHandler=()=>{
        this.setState({like:false})
        let   likeData={
            story_id:this.props.id,
            like:1
              }
          console.log(likeData);
          let token = localStorage.getItem('token')
          axios.post('http://63393b7cfaf0.ngrok.io/story/like',likeData,{
              
              headers: {
                'Authorization': `Bearer ${token}` 
              }
            })
          .then(res=>{
              console.log(res)
              this.setState({
                totalLikes: this.state.totalLikes + 1
              })
              
          })
          .catch(err=>{
              console.log(err)
          })
    }
    dislikeHandler=()=>{
        this.setState({like:true})
        let    likeData={
            story_id:this.props.id,
            like:0
              }
          console.log(likeData);
          let token = localStorage.getItem('token')
          axios.post('http://63393b7cfaf0.ngrok.io/story/unlike',likeData,{
              headers: {
                'Authorization': `Bearer ${token}` 
              }
            })
          .then(res=>{
          
              console.log(res)
              this.setState({
                totalLikes: this.state.totalLikes - 1
              })
          })
          .catch(err=>{
              console.log(err)
          })

    }
    commentHandler=()=>{
        let data={
            comment:this.state.commentInput,
            story_id:this.props.id
        }
        let token = localStorage.getItem('token')
        axios.post('http://63393b7cfaf0.ngrok.io/story/comment',data,{
            
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    
    render(){
        let dob =null
        dob=new Date(this.props.dob);
        return(
            <>
<div className="box mt-3 bg-white">
<div className=" home">
<div className="d-flex flex-column comment-section">
<div className="bg-white ">
<div className="d-flex flex-row user-info">
    {/* <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /> */}
    <div className="d-flex flex-column justify-content-start ml-2">
        <span className="d-block font-weight-bold name">{this.props.name}</span>
    </div>
</div>
<div className="mt-1">
    <img src="https://img.icons8.com/fluent/48/000000/stack-of-photos.png" />
    <p className="comment-text">{this.props.description}</p>
</div>
</div>
<div className="bg-white">
<div className="d-flex flex-row fs-12">
    {this.state.like   ?
    <div className="like  cursor"  onClick={() => {this.likeHandler() }}><i className="fa fa-thumbs-up" aria-hidden="true"></i><span className="ml-1">Like | {this.state.totalLikes} </span></div>
        :
    <div className="like  cursor"  onClick={() => {this.dislikeHandler() }}><i className="fa fa-thumbs-down" aria-hidden="true"></i><span className="ml-1">DisLike | {this.state.totalLikes}</span></div>
    }
    <div onClick={() => { this.coomentHandler() }} className="like  poiner "><i className="fa fa-commenting-o"></i><span className="ml-1">Comment | {this.props.commentsCount} </span></div>
</div>
</div>
<hr />
<div className="comments">
<div className="d-flex flex-row mb-2">
    <div className="d-flex flex-column ml-2"><small className="comment-text">Hello This is just Demo</small>
    </div>
</div>
<div className="d-flex flex-row mb-2"> 
    <div className="d-flex flex-column ml-2"><small className="comment-text">Thanks for sharing!</small>
    </div>
</div>

</div>

<div className="bg-light ">
{this.state.comment ?
    <div>
        <div className="d-flex flex-row align-items-start">
            {/* <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /> */}
            <textarea onChange={( event ) => this.setState( { commentInput: event.target.value } )} className="form-control ml-1 shadow-none textarea"></textarea>
        </div>
        <div className="mt-2 text-right">
            <button onClick={this.commentHandler} className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button>
            <button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
        </div>
    </div>
    : null}
</div>
</div>
</div>
</div>
</>
        );
    };
}
const mapStatetoProps=(state)=>{
    return{
            name:state.showprofile.name
    }
   }

// const mapDispatchtoProps=(dispatch)=>{
//     return{
//        showProfileInfo:()=>{dispatch(showProfile())} 
//     }
// }
export default connect(mapStatetoProps,null)(Profiles)