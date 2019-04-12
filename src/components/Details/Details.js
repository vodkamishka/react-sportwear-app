import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
import styled from 'styled-components';
import ImageFrame from './ImageFrame';
import InfoPanel from './InfoPanel';



export default class Details extends Component {
  render() {
    return (
      <WrapperDetails>
      <ProductConsumer>
        {value => {
          const {id, company, img, img1, img2, img3, info, price, title, inCart} = value.detailProduct;
          const {addToCart,  openModal} = value;
          return (
            <div className = "detail">
            <div className = "left  ">
            <ImageFrame title = {title} img = {img} img1 = {img1} img2 = {img2} img3 = {img3} />
            </div>
            <div className = "right">
            <InfoPanel id = {id} info = {info} title = {title} company = {company}  price = {price} inCart = {inCart} addToCart = {addToCart} openModal = {openModal}/>
            </div>
            </div>
          )
        }}
       
      </ProductConsumer>
      </WrapperDetails>
    )
  }
}

const WrapperDetails = styled.div`
.left, .right {
  width: 50%;
  display: inline-block;
}
@media screen and (max-width: 1200px) {
  .right, .left {
  display: block;
  width: 100%;
  }
}
`;