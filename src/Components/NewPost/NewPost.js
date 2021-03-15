import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import classes from './NewPost.module.css';

class NewPost extends Component {
    state = {
        image:'',
        description: '',
        submitted: false,
        titleError:'',
        contentError:''
        
    }
    checkValidity(){
        if(!(this.state.image!=""))
        {
            this.setState({
                imageError:'Please Select Image'
            });
        }
        else if(!(this.state.description.length>=5))
        {
            this.setState({
                descriptionError:'Content is more than 5 char and less than 20'

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
        console.log(this.state.image)

        const data = {
            image: this.state.image,
            description: this.state.description
        };
        if(this.checkValidity())
        {

            // axios.post( '/posts', data )
            // .then( response => {
            //     console.log( response );
            //     this.props.history.replace('/posts');
            //     // this.setState( { submitted: true } );
            // } );
        }
       
    }
    // upload(e)
    // {
    //     // console.log(e.target.files)
    //     this.setState( { image: e.target.files[0].name } )
    // }


    render () {
        // let redirect = null;
        // if (this.state.submitted) {
        //     redirect = <Redirect to="/posts" />;
        // }
        console.log(this.state.image)
        return (
            <div className={classes.NewPost}>
                {/* {redirect} */}
                <h1>Add a Post</h1>
                <label>Image</label>
                <input type="file" value={this.state.image}  onChange={( event ) => this.setState( { image: event.target.value } )} />
                <span className={classes.error}>{this.state.imageError}</span>
                <label>Description</label>
                <textarea rows="4" value={this.state.description} onChange={( event ) => this.setState( { description: event.target.value } )} />
                <span className={classes.error}>{this.state.descriptionError}</span><br/>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;