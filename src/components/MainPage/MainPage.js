import React, { Component } from 'react';
import ProductList from './ProductList/ProductList';
import Slider from './Slider';

export default class MainPage extends Component {
  render() {
    return (
    <React.Fragment>
     <div className = "mainPage">
     <div className = "slider"><Slider /></div>
     <div className = "productList"><ProductList /></div>
     </div>
    </React.Fragment>
    )
  }
}


