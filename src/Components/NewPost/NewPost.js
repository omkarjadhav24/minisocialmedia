import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import classes from './NewPost.module.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false,
        titleError:'',
        contentError:''
    }
    checkValidity(){
        if(!(this.state.title.length>=2))
        {
            this.setState({
                titleError:'Tiitle is more than 2 char and less than 9 '
            });
        }
        else if(!(this.state.content.length>=5))
        {
            this.setState({
                contentError:'Content is more than 5 char and less than 20'

            })
        }
        else{
            return true;
        }
       
    }

    componentDidMount () {
        // If unauth => this.props.history.replace('/posts');
        console.log( this.props );
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        if(this.checkValidity())
        {

            axios.post( '/posts', data )
            .then( response => {
                console.log( response );
                this.props.history.replace('/posts');
                // this.setState( { submitted: true } );
            } );
        }
       
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
            redirect = <Redirect to="/posts" />;
        }
        return (
            <div className={classes.NewPost}>
                {redirect}
                <h1>Add a Post</h1>
                <label>Image</label>
                <input type="file" value={this.state.title} onChange={( event ) => this.setState( { title: event.target.value } )} />
                <span className={classes.error}>{this.state.titleError}</span>
                <label>Description</label>
                <textarea rows="4" value={this.state.content} onChange={( event ) => this.setState( { content: event.target.value } )} />
                <span className={classes.error}>{this.state.contentError}</span><br/>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;