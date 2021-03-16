import logo from './logo.svg';
import './App.css';
import Navigation from '../src/Components/Ui/Navigation/Navigation'
import {connect} from 'react-redux';
import SignIn from '../src/Components/Ui/SignIn/SignIn'

function App(props) {
  return (
    <div className="App">
      {props.login  ?<Navigation/>:<SignIn/>}
    </div>
  );
}
const mapStatetoProps=(state)=>{
  return{
     login:state.login
  }
 }

export default connect(mapStatetoProps,null)(App);
