import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import classes from './NewPost.module.css';
import log2 from '../../assets/log2.jpg'

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
            console.log(data)

            axios.post( 'https://jsonplaceholder.typicode.com/photos', data )
            .then( response => {
                console.log( response );
                this.props.history.replace('/profile');
                // this.setState( { submitted: true } );
            } );
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
       
        return (
            <div className={classes.NewPost} style={{ backgroundImage: `url(${log2})` }} >
                {/* {redirect} */}
                <h1 className="text-light" >Add a Post</h1>
                <div className="form-group">
                <label className="text-light">Image</label>
                <input className="form-control" type="file" value={this.state.image}  onChange={( event ) => this.setState( { image: event.target.value } )} />
                <span className="font-weight-bold text-danger font-italic">{this.state.imageError}</span>
                </div>
                <div className="form-group">
                <label className="text-light" >Description</label>
                <textarea className="form-control" rows="2" value={this.state.description} onChange={( event ) => this.setState( { description: event.target.value } )} />
                <span className="font-weight-bold text-danger font-italic">{this.state.descriptionError}</span><br/>
                <button  className="btn btn-outline-warning mt-0" onClick={this.postDataHandler}>Add Post</button>
                
                </div>
            </div>
        );
    }
}

export default NewPost;