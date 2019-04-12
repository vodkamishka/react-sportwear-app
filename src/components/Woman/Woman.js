import React, { Component } from 'react';
import WomanTitle from './WomanTitle';
import { ProductConsumer } from '../../context';
import ProductWoman from './ProductWoman';


export default class Woman extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <WomanTitle title="Rushguards " products="for woman" />
    
            <div className="row">
              <ProductConsumer>
                {value => {
                  const {openModal} = value;
                  const womanProducts = value.products.filter((elem) => elem.sex === "woman");
                  return womanProducts.map((product) => <ProductWoman key={product.id} product={product} openModal = {openModal}/>)
                }}
              </ProductConsumer>
              </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
