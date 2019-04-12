import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export default class extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">

                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4">
                                            <button onClick={() => closeModal()} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                            <h5 className = "font-weight-bold"> item added to the cart</h5>
                                            <img src={img} className="img-fluid m-1" alt="product" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : $ {price}</h5>
                                            <Link to="/details">
                                                <div><button className="button" onClick={() => closeModal()}><i className="fas fa-tshirt"></i> See Details</button></div>
                                            </Link>
                                            <Link to="/cart">
                                                <div><button className="button" onClick={() => closeModal()}><i className="fas fa-shopping-cart"></i>  Go To Cart</button></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
    background: var(--MainWhite);
}
.button {
 width: 95%;
 background: var(--MainBlack);
 color: var(--MainWhite);
 padding: 2%;
 margin: 1%;
 font-family: 'Indie Flower', sans-serif;
 font-size: 1.1rem;
 text-transform: capitalize;
}
.button:hover {
    background: var(--MainAqua);
    color: var(--MainBlack);
    border-radius: 5%;
}
i {
    font-size: 0.8rem;
}
`;