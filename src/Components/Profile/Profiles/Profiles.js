import React, { useEffect, useState } from 'react'
import { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {showProfile} from '../../../Actions/ShowProfile'
import CommentDiv from '../../Home/Homes/Comments/Comments'

const Profiles =(props)=>{
    const [name,setName]=useState('')
    const [dateOfBirth,setDateOfBirth]=useState('');
    const [gender,setGender]=useState('');
    const [userPosts,setUserPosts]=useState();
    const [like,setLike]=useState(true);
    const [totalLikes,setTotalLikes]=useState(props.likesCount);
    const [commentInput,setCommentInput]=useState('');
    const [comment,setComment]=useState(false)


    // useEffect(()=>{
    //     props.showProfileInfo()
    // })
    
    const coomentHandler=()=>{
       let prevComment=comment;
        setComment(!prevComment)
       
    }
    const cancelHandler=()=>{
        setComment(false)
    }

//    const readCommenthandler=()=>{
//         let token = localStorage.getItem('token')

//         axios.get('')
//         .then(res=>{
//             console.log(res)
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     }
   const likeHandler=()=>{
        setLike(false)
        let   likeData={
            story_id:props.id,
            like:1
              }
          console.log(likeData);
          let token = localStorage.getItem('token')
          axios.post('http://885039200eb0.ngrok.io/story/like',likeData,{
              
              headers: {
                'Authorization': `Bearer ${token}` 
              }
            })
          .then(res=>{
              console.log(res)
              setTotalLikes(totalLikes + 1)
          })
          .catch(err=>{
              console.log(err)
          })
    }
  const  dislikeHandler=()=>{
        setLike(true)
        let    likeData={
            story_id:props.id,
            like:0
              }
          console.log(likeData);
          let token = localStorage.getItem('token')
          axios.post('http://885039200eb0.ngrok.io/story/unlike',likeData,{
              headers: {
                'Authorization': `Bearer ${token}` 
              }
            })
          .then(res=>{
          
              console.log(res)
              setTotalLikes(totalLikes - 1)
          })
          .catch(err=>{
              console.log(err)
          })

    }
    const commentHandler=()=>{
        let data={
            comment:commentInput,
            story_id:props.id
        }
        let token = localStorage.getItem('token')
        axios.post('http://885039200eb0.ngrok.io/story/comment',data,{
            
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

    
        let dob =null
        dob=new Date(props.dob);
        return(
            <>
           
               
                        <div className="box mt-3 bg-white">
                            <div className=" home">
                                <div className="d-flex flex-column comment-section">
                                    <div className="bg-white ">
                                        <div className="d-flex flex-row user-info">
                                            {/* <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /> */}
                                            <div className="d-flex flex-column justify-content-start ml-2">
                                                <span className="d-block font-weight-bold name">{props.name}</span>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <img src="https://img.icons8.com/fluent/48/000000/stack-of-photos.png" />
                                            <p className="comment-text">{props.description}</p>
                                        </div>
                                    </div>
                                    <div className="bg-white">
                                        <div className="d-flex flex-row fs-12">
                                            {like   ?
                                            <div className="like  cursor"  onClick={() => {likeHandler() }}><i className="fa fa-thumbs-up" aria-hidden="true"></i><span className="ml-1">Like | {totalLikes} </span></div>
                                                :
                                            <div className="like  cursor"  onClick={() => {dislikeHandler() }}><i className="fa fa-thumbs-down" aria-hidden="true"></i><span className="ml-1">DisLike | {totalLikes}</span></div>
                                            }

                                            <div onClick={() => {coomentHandler() }} className="like  poiner "><i className="fa fa-commenting-o"></i><span className="ml-1">Comment | {props.comments}</span></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="comments">
                                     
                                            <CommentDiv/>
                                    </div>

                                    <div className="bg-light ">
                                        {comment ?
                                            <div>
                                                <div className="d-flex flex-row align-items-start">
                                                    {/* <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /> */}
                                                    <textarea onChange={( event ) => setCommentInput(event.target.value)} className="form-control ml-1 shadow-none textarea"></textarea>
                                                </div>
                                                <div className="mt-2 text-right">
                                                    <button onClick={()=>commentHandler} className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button>
                                                    <button onClick={()=>cancelHandler()} className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
                                                </div>
                                            </div>
                                            : null}
                                    </div>
                                </div>
                            </div>
                        </div>
            </>
        );
}
// const mapStatetoProps=(state)=>{
//     return{
//             name:state.showprofile.name
//     }
//    }

// const mapDispatchtoProps=(dispatch)=>{
//     return{
//        showProfileInfo:()=>{dispatch(showProfile())} 
//     }
// }
export default Profiles