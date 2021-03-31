import React from 'react'
import { Component } from 'react';
import {NavLink} from "react-router-dom"
import CommentDiv from '../../Home/Homes/Comments/Comments';
import {connect} from 'react-redux'
import axios from 'axios'
class Homes extends Component{
    state = {
        comment: false
    }
    // state = {
    //     posts: []
    // }
    // componentDidMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/comments/'+2)
    //     .then(res=>{
    //         console.log(res.data);
    //         const posts = res.data.slice( 0, 4 );
    //         console.log(res.data.id);
    //         const updatedPosts = posts.map( post => {
    //                 return {
    //                     ...post
    //                 }
    //             } );
    //             this.setState( { posts: updatedPosts } );
    //     }).catch(err=>{
    //         console.log(err);
    //     }) 
    // }

    coomentHandler = () => {
        //  toggling comment button
        
        let prevComment = this.state.comment;
        this.setState({
            comment: !prevComment
        })
    }
    cancelHandler=()=>{
        this.setState({
            comment:false
        })
    }

    render(){
        // for displaying comments
        // let allComments = <p style={{ textAlign: 'center' }}>Something went wrong!</p>; 
        // //  fetching comments and send to Comment as CommentDiv component in props
        // allComments =this.state.posts.map( comment => {
        //     return (
        //         <CommentDiv
        //             key={comment.id}
        //             comment={comment.body}
        //              />
        //     );
        // } );
        return(
            <>
                <div className="box mt-3 bg-white">
                            <div className=" home">
                                <div className="d-flex flex-column comment-section">
                                    <div className="bg-white ">
                                        <div className="d-flex flex-row user-info">
                                            {/* <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" /> */}
                                            <div className="d-flex flex-column justify-content-start ml-2">
                                                <span className="d-block font-weight-bold name">Marry Andrews</span>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <img src={this.props.thumbnailUrl} />
                                            <p className="comment-text">{this.props.title}</p>
                                        </div>
                                    </div>
                                    <div className="bg-white">
                                        <div className="d-flex flex-row fs-12">
                                            <div className="like  cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like : T Likes:</span></div>
                                            <div onClick={() => { this.coomentHandler() }} className="like  poiner "><i className="fa fa-commenting-o"></i><span className="ml-1">Comment: T Comments: </span></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="comments"> 
                                       {/* {allComments} */}
                                       <CommentDiv/>
                                    </div>

                                    <div className="bg-light ">
                                        {this.state.comment ?
                                            <div>
                                                <div className="d-flex flex-row align-items-start">
                                                    <textarea className="form-control ml-1 shadow-none textarea"></textarea>
                                                </div>
                                                <div className="mt-2 text-right">
                                                    <button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button>
                                                    <button onClick={this.cancelHandler} className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button>
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

// for comment comment getting id of post 

// const mapStatetoProps=(state)=>{
//     return{
//         // fetch post id 
//        homedataid:state.homeCompData.homedataid
//     }
//    }
export default Homes;