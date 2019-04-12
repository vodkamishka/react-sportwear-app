import React, { Component } from 'react';
import Text from './Text';
import Fab from './Fab';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';

export default class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper >
        <ProductConsumer>
          {value => {
             const { cart, Logo, NavbarList, Fa} = value;
            return (<div className="container">
              
              <div className="image">
                <Link to="/react-sportwear-app">
                  <img className = "img" src={Logo.runner}  alt="runner" />
                </Link>
              </div>
              <h2>Sportwear</h2>
              <div className="list">
                <ul>
                  {NavbarList.map((element) =>
                    <Link to={element.path} key = {element.id +23}>
                      <Text text={element.text} key={element.id} />
                    </Link>
                  )}
                </ul>
              </div>
              <Link to="/cart">
                <div className="button">
                <div>Shopping Cart  <span><i className="fas fa-shopping-cart"></i>{ cart.length === 0 ? (null) : (cart.length) }</span></div>
                  </div>
              </Link>
              <div className="socialNetwork">
                <ul>
                  {Fa.map((element) => {
                    return <a href={element.path} key={element.id + 1} rel="noopener noreferrer" target="_blank" >
                      <Fab fab={element.fab} key={element.id} />
                    </a>
                  })
                  }
                </ul>
              </div>
            </div>
            
            )
          }}
        </ProductConsumer>
      </NavbarWrapper>
    )
  }
}
const NavbarWrapper = styled.div`

.container {
  position: absolute;
  text-transform: uppercase;
  letter-spacing: 0.8rem;
  height: 100vh;
  width: 100%;
  background: black;
  color: white;
  top: 0;
  left: 50%;
  transform: translate(-50%); 
}
.image, .list, button, .socialNetwork  {
  margin: auto;
}
.image {
  margin-top: 5%;
  width: 75%;
  height: 28vh;
}
.image img {
  width: 100%;
  height: 100%;
}
.image:hover {
  mix-blend-mode: luminosity;
}
h2 { 
  text-align: center; 
  font-size: 3.6vh;
  margin-top: 10%;
}
h2:hover {
  color: var(--MainRed);
  transition: all 0.5s linear;
}
.list {
  margin-top: 10%;
  font-size: 1,8vh;
  letter-spacing: 0.8rem;
  font-family: "Lato", sans-serif;
  text-align: left;  
}
ul {
  padding: 0;
}
.list li{
  list-style-type: none;
  padding: 0.6rem;
  border-top: 0.02px solid gray;
  border-bottom: 0.02px solid gray;
  color: var(--MainAqua);
  letter-spacing: 0.8rem;
}
li:hover {
  color: var(--MainWhite);
  transform: scale(1.02); 
}
.button {
  border: 1px solid var(--MainWhite);
  text-transform: capitalize;
  letter-spacing: 0.55rem;
  padding: 1.98vh;
  transition: all 0.5s linear; 
  width: 97%;
  display: flex;
  font-family: 'Indie Flower', sans-serif;
  color: var(--MainWhite);
  justify-content: center;
  margin-top: 20%;
  font-size: 1.8vh;
}
.button:hover{
  background: var(--MainAqua);
  color: var(--MainBlack);
  font-weight: 600;
  border-radius: 5px;
}
.socialNetwork{
  display: flex;
  justify-content: center;
  margin-top: 20%
}
.socialNetwork li {
  display: inline;
  letter-spacing: 1.2rem; 
  font-size: 2.2vh; 
  color: var(--MainAqua);
  width: 100%;
}
.socialNetwork li:hover {
  color: var(--MainRed);
}
a {
  text-decoration: none;
}
@media screen and (max-height: 890px) {
  .button {
    margin-top: 5%;
  }
  .socialNetwork {
    margin-top: 5%;
  }
}
@media screen and (max-height: 670px) {
  .image {
    margin-top: 2%;
    width: 38%;
    height: 14vh;
  }
  h2 {
    margin-top: 10%;
  }
}
@media screen and (max-height: 500px) {
  .button {
    margin-top: 3%;
  }
  .socialNetwork {
    margin-top: 3%;
  }
}
@media screen and (max-height: 400px) {
  .image {
    display: none;
    position: absolute;
  }
  h2 {
    margin-top: 5%;
  }
  .list {
    margin-top: 5%;
  }
}
`;
