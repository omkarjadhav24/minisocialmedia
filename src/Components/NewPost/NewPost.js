import React, {  useState } from 'react';
// import { Redirect } from 'react-router-dom';
import classes from './NewPost.module.css';
import log2 from '../../assets/log2.jpg'
import axios from 'axios'
const NewPost =(props)=> {
    // state
    const [image,setImage]=useState('')
    const [description,setDescription]=useState('')
    const [descriptionError,setDescriptionError]=useState('')
    const [imageError,setImageError]=useState(false);
    // for getting image name 
   const imageFileHandler=(event)=>setImage(event.target.files[0].name)
    // for validating filds
    const checkValidity=()=>{ 
        // if(!(image!="")) setImageError('Please Select Image')
        if(!(description.length>=5)) setDescriptionError('Content is more than 5 char and less than 20')
        else return true;
    }
   // on click add post then send with post method 
   const  postDataHandler = (event) => {
        event.preventDefault();

        // if checkValidity() returns true
        if(checkValidity())
        {
            // console.log(data)

            // let imgData = new FormData();
            // let imagedata = document.querySelector('input[type="file"]').files[0];
            // imgData.append("inputname", imagedata);
            // let poData=imgData.get('inputname')

            // for sending data through post method
            const postData={
                uploadImage :image ,
                description:description
            }
            // url link
            let url='http://885039200eb0.ngrok.io/story/image';
            let token=localStorage.getItem('token') // token get
            console.log(token)
            console.log(postData);
            axios.post(url,postData, {
                headers: {
                  'Authorization': `Bearer ${token}`,
                  "Accept": "application/json",
                  "type": "formData"
                }
              })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))

            // props.addPost(image,description)
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
                <input className="form-control" type="file"  onChange={(event)=>imageFileHandler(event)} />
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

//    const mapDispatchtoProps=(dispatch)=>{
//     return{
//        addPost:(uploadImage ,description)=>{dispatch(addPost(uploadImage,description))}
//     }
// }
export default NewPost;