import React, { Component } from 'react';
import OurProducts from './OurProducts';
import { ProductConsumer } from '../../../context';
import Product from './Product';


export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <OurProducts title="our " products="products" />
    
            <div className="row">
              <ProductConsumer>
                {value => {
                  const {openModal} = value;
                  return value.products.map((product) => <Product key={product.id} product={product} openModal = {openModal}/>)
                }}
              </ProductConsumer>
              </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
