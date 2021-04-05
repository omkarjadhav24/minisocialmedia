import React, {  useState } from 'react';
import { Redirect } from 'react-router-dom';
import classes from './NewPost.module.css';
import log2 from '../../assets/log2.jpg'
import {connect} from 'react-redux'
import {addPost} from '../../Actions/AddPost'
const NewPost =(props)=> {
    const [image,setImage]=useState('')
    const [description,setDescription]=useState('')
    const [descriptionError,setDescriptionError]=useState('')
    const [imageError,setImageError]=useState(false);
   const imageFileHandler=(e)=>
    {
        setImage(e.target.files[0].name)
    }
    const checkValidity=()=>{ 
        // if(!(image!=""))
        // {
        //    setImageError('Please Select Image')
        // }
        // else 
        if(!(description.length>=5))
        {
            setDescriptionError('Content is more than 5 char and less than 20')
        }
        else{
            return true;
        }
       
    }
   
   const  postDataHandler = (event) => {
        event.preventDefault();

        const data = {
            image: image,
            description: description
        };
        if(checkValidity())
        {
            console.log(data)

            var imgData = new FormData();
            var imagedata = document.querySelector('input[type="file"]').files[0];
            imgData.append("inputname", imagedata);
            let poData=imgData.get('inputname')

            props.addPost(image,description)
        }
       
    }
        // let redirect = null;
        // if (submitted) {
        //     redirect = <Redirect to="/posts" />;
        // }
       
        return (
            <div className={classes.NewPost} style={{ backgroundImage: `url(${log2})` }} >
                {/* {redirect} */}
                {/* <form encType="multipart/form-data" action=""> */}
                <h1 className="text-light" >Add a Post</h1>
                <div className="form-group">
                <label className="text-light">Image</label>
                <input className="form-control" type="file"  onChange={()=>imageFileHandler()} />
                <span className="font-weight-bold text-danger font-italic">{imageError}</span>
                </div>
                <div className="form-group">
                <label className="text-light" >Description</label>
                <textarea className="form-control" rows="2" value={description} onChange={( event ) => setDescription(event.target.value)} />
                <span className="font-weight-bold text-danger font-italic">{descriptionError}</span><br/>
                <button  className="btn btn-outline-warning mt-0" onClick={(event)=>postDataHandler(event)}>Add Post</button>
                </div>
                {/* </form> */}
            </div>
        );
}

   const mapDispatchtoProps=(dispatch)=>{
    return{
       addPost:(uploadImage ,description)=>{dispatch(addPost(uploadImage,description))}
    }
}
export default connect(null,mapDispatchtoProps)(NewPost);