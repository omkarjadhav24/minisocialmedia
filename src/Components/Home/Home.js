import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import SideBar from '../Ui/Sidebar/Sidebar'
import Homes from '../Home/Homes/Homes'
// import {connect} from 'react-redux';
// import {HomeData} from '../../Actions/HomeData'
// import axios from 'axios'
import './Home.css'
import axios from 'axios';
import { post } from 'jquery';
class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount(){
        // this.props.homeData();
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res=>{
            // console.log(res.data);
            const posts = res.data.slice( 0, 4 );
            console.log(posts);
                const updatedPosts = posts.map( post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                } );
                this.setState( { posts: updatedPosts } );
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        posts = this.state.posts.map( post => {
            return (
                // <Link to={'/posts/' + post.id} key={post.id}>
                <Homes
                    key={post.id}
                    title={post.title}
                    thumbnailUrl={post.thumbnailUrl}
                     />
                // </Link>
            );
        } );
        return (
            <div >
                <div className="row">
                    <div className="sidebar col-sm bg-secondary">
                        <SideBar/>
                    </div>
                    <div className="col-sm bg-secondary">
                    <div className="mt-2 box bg-white" >
                            <div className="home height">
                                <NavLink to="/newpost"><img className="addImage" height="29" src="https://img.icons8.com/fluent/48/000000/stack-of-photos.png" />
                                    <p id="addPhoto" >Add Photos</p>
                                </NavLink>
                            </div>
                        </div>
                       {posts}
                    </div>
                    <div className="rightsidebar col-sm bg-secondary">                        
                    </div>
                </div>
            </div>
        );
    };
}

export default Home;