import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import classes from './NewPost.module.css';
import log2 from '../../assets/log2.jpg'
import {connect} from 'react-redux'
import {addPost} from '../../Actions/AddPost'
class NewPost extends Component {
    state = {
        image:'',
        description: '',
        submitted: false,
        titleError:'',
        contentError:''
        
    }
    //image file
    imageFileHandler=(e)=>
    {
        this.setState({image:e.target.files})
    }
    checkValidity(){ 
        // if(!(this.state.image!=""))
        // {
        //     this.setState({
        //         imageError:'Please Select Image'
        //     });
        // }
        // else 
        if(!(this.state.description.length>=5))
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
        console.log( this.props );
    }

    postDataHandler = (event) => {
        event.preventDefault();
        console.log(this.state.image)

        const data = {
            image: this.state.image,
            description: this.state.description
        };
        if(this.checkValidity())
        {
            console.log(data)

            // for image 

            // let imgData = new FormData();
            // let imagedata = document.querySelector('input[type="file"]').files[0];
            // imgData.append("inputname", imagedata);
            // let poData=imgData.get('inputname')

            this.props.addPost(this.state.image,this.state.description)
        }
       
    }
    render () {
       
        return (
            <div className={classes.NewPost} style={{ backgroundImage: `url(${log2})` }} >
                <form encType="multipart/form-data" action="">
                <h1 className="text-light" >Add a Post</h1>
                <div className="form-group">
                <label className="text-light">Image</label>
                <input className="form-control" type="file"  onChange={this.imageFileHandler} />
                <span className="font-weight-bold text-danger font-italic">{this.state.imageError}</span>
                </div>
                <div className="form-group">
                <label className="text-light" >Description</label>
                <textarea className="form-control" rows="2" value={this.state.description} onChange={( event ) => this.setState( { description: event.target.value } )} />
                <span className="font-weight-bold text-danger font-italic">{this.state.descriptionError}</span><br/>
                <button  className="btn btn-outline-warning mt-0" onClick={this.postDataHandler}>Add Post</button>
                </div>
                </form>
            </div>
        );
    }
}

   const mapDispatchtoProps=(dispatch)=>{
    return{
       addPost:(uploadImage ,description)=>{dispatch(addPost(uploadImage,description))}
    }
}
export default connect(null,mapDispatchtoProps)(NewPost);