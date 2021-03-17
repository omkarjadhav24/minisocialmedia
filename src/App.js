import logo from './logo.svg';
import './App.css';
import Navigation from '../src/Components/Ui/Navigation/Navigation'
import {connect} from 'react-redux';
import SignIn from '../src/Components/Ui/SignIn/SignIn'
import SignUp from '../src/Components/Ui/SignUp/SignUp'
import {Route} from 'react-router'

function App(props) {
  return (
    <div className="App">
      {props.login  ?<Navigation/>:<div>
        {props.signup ?
       <Route to='/signup' exact  component={SignUp} />

        :<Route to='/' exact component={SignIn}/>
      }
      </div>}
    </div>
  );
}
const mapStatetoProps=(state)=>{
  return{
     login:state.login,
     signup:state.signup
     
  }
 }

export default connect(mapStatetoProps,null)(App);
{/* <Route to='/'  component={SignIn}/>
<Route to='/signup'  component={SignUp} /> */}