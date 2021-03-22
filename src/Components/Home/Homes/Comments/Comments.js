import React from 'react';
import { Component } from 'react';
class Comment extends Component{
    render(){
        return(
            <>
<div className="d-flex flex-row mb-2">
<div className="d-flex flex-column ml-2"> <small className="comment-text">I like this alot! thanks alot</small>
</div>
</div>
<div className="d-flex flex-row mb-2">
<div className="d-flex flex-column ml-2"> <small className="comment-text">Thanks for sharing!</small>
</div>
</div>
            </>
        );
    };
}
export default Comment;