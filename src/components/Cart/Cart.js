import React, { Component } from 'react';
import CartColumns from './CartColumns';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <CartWrapper>
          <div className="shopping">
            <Link to="/">
              <i className="fas fa-home mr-2"></i>
            </Link>
            <h5 className="title"> / Shopping Cart</h5>
          </div>
        </CartWrapper>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </React.Fragment>
              )
            }
            else { return <EmptyCart /> }
          }}
        </ProductConsumer>
      </section>
    )
  }
}

const CartWrapper = styled.div`
font-family: "Lato", sans-serif;
.shopping {
  margin: 3% 0 3% 10%;
}
i, .title {
  transition: 0.5s all linear;
  display: inline-block;
}
i {
  color: black;
}
i:hover, .title:hover {
  color: var(--MainAqua);
}
`