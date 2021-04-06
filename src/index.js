import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {createStore, combineReducers,applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import SignInReducer from '../src/Reducers/SignIn';
import Auth from '../src/Reducers/Auth';
import RegistrationAuth from '../src/Reducers/Registration'
import HomeData from '../src/Reducers/HomeData'
import AddPost from '../src/Reducers/AddPost'
import ShowProfile from '../src/Reducers/ShowProfile'
import EditProfile from '../src/Reducers/EditProfile'
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// added all reducer here
const rootReducer = combineReducers({
  authsignin: SignInReducer,
  loginauth:Auth,
  registrationauth:RegistrationAuth,
  homeCompData:HomeData,
  addpost:AddPost,
  showprofile:ShowProfile,
  editprofile:EditProfile
});
// crrated store and added middleware
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
