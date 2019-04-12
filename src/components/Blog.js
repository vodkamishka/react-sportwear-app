import React, { Component } from 'react';
import styled from 'styled-components';
import {text} from '../data';

export default class Blog extends Component {
  render() {
    return (
      <BlogWrapper>
      <div className = "container-fluid p-5 ">
        <h5 className="mt-5 py-5 px-2 text-uppercase font-weight-bold">Rash guard</h5>
        <p>{text.rush}</p>
        </div>
        </BlogWrapper>

      
    )
  }
}
const BlogWrapper = styled.div`
font-size: 1.4rem;
font-family: "Frank Ruhl Libre", sans-serif;
`;