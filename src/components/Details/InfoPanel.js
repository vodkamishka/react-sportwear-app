import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class InfoPanel extends Component {
  render() {
    const inCart = this.props.inCart;
    const id = this.props.id;
    const addToCart = this.props.addToCart;
    const openModal = this.props.openModal;
    const description = this.props.info;
    return (
      <InfoPanelWrapper>
        <div className="container m-3">

          <div className="textInfo text-uppercase">
            {this.props.title}
          </div>

          <div className="stars">
            <span> <i className="fas fa-star "></i></span>
            <span> <i className="fas fa-star "></i></span>
            <span> <i className="fas fa-star "></i></span>
            <span> <i className="far fa-star "></i></span>
            <span> <i className="far fa-star "></i></span>
          </div>

          <div className="info font-weight-bold">INFO</div>

          <div className="info-block">
            <p>- Brand: {this.props.company}</p>
            <p>- Weight: 165 g</p>
            <p>- Material: Spandex, Poliester</p>
            <p>- Availability: In Stock</p>

            <div className="price font-weight-bold ">
              ${this.props.price}
            </div>

          </div>

          <div className = 'description mt-3'>
          <p className="font-weight-bold">Description:</p>
          {description}
          </div>

          <div className="buttons">
            <Link to="/react-sportwear-app">
              <button className="back"><span><i className="fas fa-store"></i></span>Back to Products</button>
            </Link>
            <button disabled={inCart ? true : false}
              onClick={() => {
                addToCart(id);
                openModal(id);
              }}
              className="add"><span><i className="fas fa-shopping-cart"></i></span>
              {inCart ? "Rushguard in Cart" : "Add To Cart"} </button>
          </div>
        </div>
      </InfoPanelWrapper>
    )
  }
}
const InfoPanelWrapper = styled.div`
box-sizing: border-box;
.container {
  width: 100%;
}
.textInfo {
    font-family: "Lato", sans-serif;
    margin-top: 10%;
    font-size: 25px;  
}
.fa-star {
    color: gold; 
}
.stars {
   margin-top: 3%;
}
.info {
  font-size: 18px;
  font-family: "Lato", sans-serif;
  margin-top: 5%;
}
.info-block {
  font-family: "Lato", sans-serif;
  margin-top: 3%;
}
.price {
  font-size: 30px;
  margin-top: 3%;
  border-top: solid 1px black;
  border-bottom: solid 1px black;
  padding: 1% 0 1% 0;
  width: 90%;
}
.buttons {
  margin-top: 3%;
}
button {
  width: 90%;
  text-transform: capitalize;
  font-family: 'Indie Flower', sans-serif;;
  margin: 1% 0;
  padding: 2%;
  font-weight: bold;
  transition: all 1s ease;
  letter-spacing: 0.55rem;
  background: var(--MainBlack);
  color: var(--MainWhite);
  text-align: center;
}
.add:hover {
  background: var(--MainAqua);
  color: var(--MainBlack);
  border-radius: 5px;
}
.back:hover {
  background: darkorange;
  color: var(--MainBlack);
  border-radius: 5px;
}
.description {
 width: 90%;
 font-family: "Frank Ruhl Libre", sans-serif;
}
`;