import React from 'react';
import { Component } from 'react';
class Comment extends Component{
    render(){
        return(
            <>
<div className="d-flex flex-row mb-2">
<div className="d-flex flex-column ml-2"> <small className="comment-text">{this.props.comment}</small>
</div>
</div>
            </>
        );
    };
}
export default Comment;