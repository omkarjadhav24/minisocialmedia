import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios'
export const ProfilePageContext = createContext();
const ProfilePageContextProvider = (props) => {
    const [name,setName]=useState(null);
    const [gender,setGender]=useState(null);
    const [dob,setDob]=useState(null);
    const [id,setId]=useState(null);
    const [email,setEmail]=useState(null);
    const [age,setAge]=useState(null);

    useEffect(()=>{
        let token = localStorage.getItem('token')
        axios.get('http://885039200eb0.ngrok.io/user/me',{  
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          })
        .then(res=>{
            console.log(res)
            setName(res.data.name);
            setGender(res.data.gender);
            setDob(res.data.dob);
            setId(res.data._id);
            setEmail(res.data.email);
            setAge(res.data.age);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    user={
        'name':name,
        'gender':gender,
        'dob':dob,
        'id':id,
        'email':email,
        'age':age
    }
    return (
        <ProfilePageContext.Provider value={{ 
            user: user,
        }}>
        	{props.children}
        </ProfilePageContext.Provider>
    );
}
export default ProfilePageContextProvider;