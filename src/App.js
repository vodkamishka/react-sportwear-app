import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage/MainPage';
import Default from './components/Default';
import Details from './components/Details/Details';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal';
import Cart from './components/Cart/Cart';
import Blog from './components/Blog';
import Woman from './components/Woman/Woman';
import Man from './components/Man/Man';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className = "MainContainer">
        <div className = "navbar"><Navbar/></div>
        <div className = "wrapper">
        <Switch>
          <Route exact path="/react-sportwear-app" component = {MainPage} />
          <Route path="/details" component = {Details} />
          <Route path="/man" component = {Man} />
          <Route path="/woman" component = {Woman} />
          <Route path="/cart" component = {Cart} />
          <Route path="/blog" component = {Blog} />
          
          <Route component = {Default} />
        </Switch>
        <Modal />
        </div>
        
        </div>
      </React.Fragment>
    )
  }
}

export default App;
