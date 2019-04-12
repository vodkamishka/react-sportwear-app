import React, { Component } from 'react';
import styled from 'styled-components';


export default class Default extends Component {
  render() {
    return (
      <DefaultWrapper>
        <div className = "container">
        <div className  = "row">
        <div classname  = "col-10 mx-auto text-center text-title text-uppercase pt-5">
        <h1 className = "display-3">404</h1>
        <h1>error</h1>
        <h2>page not found</h2>
        <h3>
         teh requested URL
         <span className = "text-danger">
         {this.props.location.pathname}
         </span>{" "}
         was not found
        </h3>
        </div>
        </div>
        </div>
        
      </DefaultWrapper>
    )
  }
}

const DefaultWrapper = styled.div`
background: black;
color: white;
height: 100vh;
width: 1344px;
display: flex;
align-items: center;
`;