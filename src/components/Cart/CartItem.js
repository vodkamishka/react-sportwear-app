import React from 'react';
import styled from 'styled-components';

export default function CartItem({value, item}) {
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;
    
  return (
    <CartItemWrapper>
    <div className = "row my-2 text-capitalize text-center">

    <div className = "col-10 mx-auto col-lg-2">
    <img src = {img} style = {{width: '5rem', height: '5rem'}}
    className = "img-fluid" alt = "product" />
    </div>

    <div className = "col-10 mx-auto col-lg-2">
    <span className = "d-lg-none">product : </span> {title}
    </div>
    
    <div className = "col-10 mx-auto col-lg-2">
    <span className = "d-lg-none">price : </span> {price}
    </div>
     
    <div className = "col-10 mx-auto col-lg-2 my-2 my-2 my-lg-0">
    <div className  = "d-flex justify-content-center">
    <div>
    <span className = "py-2 px-3">{count}</span>
    <span className = "plus py-3 px-4" onClick = {() => decrement(id)}>-</span>
    <span className = "plus py-3 px-4" onClick = {() => increment(id)}>+</span>
    </div>
    </div>
    </div>
    
    <div className = "col-10 mx-auto col-lg-2">
    <div className = "cart-icon" onClick = {() => removeItem(id)}>
    <i className  = "fas fa-trash"></i>
    </div>
    </div>

    <div className = "col-10 mx-auto col-lg-2">
    <strong> item total: $ {total}</strong> 
    </div>

    </div>
    </CartItemWrapper>
  )
}

const CartItemWrapper = styled.div`
.plus {
  transition: all 1s linear;
}
.plus:hover {
  background: var(--MainAqua);
  border-radius: 0%;
  color: var(--MainWhite);
}
.fa-trash {
  color: var(--MainAqua);
}
`;