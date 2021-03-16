import React ,{Component}  from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import { Switch,NavLink , Route} from 'react-router-dom';
import './Navigation.css'
import NewPost from '../../NewPost/NewPost'
import Home from '../../Home/Home'
import Searches from '../../../Components/Searches/Searches'
import Search from '../../Searches/search/Search'
import 'font-awesome/css/font-awesome.min.css';
import { withRouter } from 'react-router';
import Profile from '../../Profile/Profile'


class Navigation extends Component{
    state={
        search:''
    }
    searchUser=(event)=>{
        event.preventDefault();
        console.log(this.state)
        let search=this.state.search;
        if(this.state.search!="")
        {
            this.props.history.push({pathname:'/search/' + search})
            this.setState({search:''})
        }
        else
        {
            alert('Serach Is Empty')
        }
    }
    render(){
        return(
            
            <div>
            <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
            <form  onSubmit={this.searchUser} class="form-inline">
            <input className="form-control mr-sm-2" type="text" value={this.state.search}  onChange={( event ) => this.setState( { search: event.target.value } )} placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ml-5">
            <li title="Home" className="nav-item active ml-5" >
            <NavLink to="/home" ><img  height="29px" src="https://img.icons8.com/ios-filled/50/000000/home.png"/></NavLink>
            </li>
            <li id="user" title="Profile" className="nav-item ml-5">
            <NavLink to="/profile" >
            <img   height="34px" src="https://img.icons8.com/color/96/000000/circled-user-male-skin-type-3--v2.png"/>
   
            </NavLink>
            </li>
            </ul>
            </div>
            </nav>
            <Switch>
            <Route path="/signup" exact component={SignUp} />
            <Route path="/newpost" component={NewPost} />
            <Route path="/home" component={Home} />
            <Route path="/searches" component={Search} />
            <Route path="/profile" component={Profile} />
            <Route path="/search/:name" component={Searches} />
            <Route path="/" component={SignIn} />
            <Route render={() => <h1>Welcome In MovieLand</h1>}/>
            </Switch>
            </div>
        );
    };
}
export default withRouter(Navigation);
