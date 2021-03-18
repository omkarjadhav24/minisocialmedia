import React from 'react'
import { Component } from 'react';
import {NavLink} from "react-router-dom"
class Homes extends Component{
    state = {
        comment: false
    }
    coomentHandler = () => {
        let prevComment = this.state.comment;
        this.setState({
            comment: !prevComment
        })
    }
    render(){
        return(
            <>
                <div className="box mt-3 bg-white">
                            <div className=" home">
                                <div className="d-flex flex-column comment-section">
                                    <div className="bg-white ">
                                        <div className="d-flex flex-row user-info">
                                            <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                            <div className="d-flex flex-column justify-content-start ml-2">
                                                <span className="d-block font-weight-bold name">Marry Andrews</span>
                                                <span className="date text-black-50">Shared publicly - Jan 2020</span>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <img src={this.props.thumbnailUrl} />
                                            <p className="comment-text">{this.props.title}</p>
                                        </div>
                                    </div>
                                    <div className="bg-white">
                                        <div className="d-flex flex-row fs-12">
                                            <div className="like  cursor"><i className="fa fa-thumbs-o-up"></i><span className="ml-1">Like</span></div>
                                            <div onClick={() => { this.coomentHandler() }} className="like  poiner "><i className="fa fa-commenting-o"></i><span className="ml-1">Comment</span></div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="comments">
                                        <div class="d-flex flex-row mb-2"> <img src="https://i.imgur.com/9AZ2QX1.jpg" width="40" className="rounded-image" />
                                            <div className="d-flex flex-column ml-2"> <span className="comment-text">Daniel Frozer</span> <small className="comment-text">I like this alot! thanks alot</small>
                                                <div className="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>18 mins</small> </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row mb-2"> <img src="https://i.imgur.com/1YrCKa1.jpg" width="40" className="rounded-image" />
                                            <div className="d-flex flex-column ml-2"> <span className="comment-text">Elizabeth goodmen</span> <small className="comment-text">Thanks for sharing!</small>
                                                <div className="d-flex flex-row align-items-center status"> <small>Like</small> <small>Reply</small> <small>Translate</small> <small>8 mins</small> </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="bg-light ">
                                        {this.state.comment ?
                                            <div>
                                                <div className="d-flex flex-row align-items-start">
                                                    <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40" />
                                                    <textarea className="form-control ml-1 shadow-none textarea"></textarea>
                                                </div>
                                                <div className="mt-2 text-right">
                                                    <button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button>
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
export default Homes;