import React ,{Component}  from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import { Switch,NavLink , Route} from 'react-router-dom';
import  classes from '../Navigation/Navigation.module.css';
import NewPost from '../../NewPost/NewPost'
import 'font-awesome/css/font-awesome.min.css';


class Navigation extends Component{
    render(){
        return(
            <div className="Navigation">
                 <div>
                    <nav >
                        <ul className={classes.NavigationItems}>
                        <li>
                            <NavLink to="/newpost"><i class="fa fa-plus-square" aria-hidden="true"></i></NavLink>
                        </li>
                        <li >
                       
                        </li>
                       {/* <li><NavLink to="/signin">Sign In</NavLink></li> */}
                        </ul>
                    </nav>
                </div>
                <Switch>
                <Route path="/signup" exact component={SignUp} />
                    <Route path="/newpost" component={NewPost} />
                    <Route path="/" component={SignIn} />
                   

                    <Route render={() => <h1>Welcome In MovieLand</h1>}/>
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    };
}
export default Navigation;
