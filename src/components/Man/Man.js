import React, { Component } from 'react';
import ManTitle from './ManTitle';
import { ProductConsumer } from '../../context';
import ProductMan from './ProductMan';


export default class Man extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <ManTitle title="Rushguards " products="for man" />
    
            <div className="row">
              <ProductConsumer>
                {value => {
                  const {openModal} = value;
                  const manProducts = value.products.filter((elem) => elem.sex === "man");
                  return manProducts.map((product) => <ProductMan key={product.id} product={product} openModal = {openModal}/>)
                }}
              </ProductConsumer>
              </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
