import React, { Component } from 'react';
import { SliderImages } from '../../data';
import styled from 'styled-components';

export default class Slider extends Component {
  state = {
    left: 1344,
    sliderImages: [],
    timer: 0,
    selected: 2
  }
  componentDidMount = () => {
    this.setSlider();
    const timer = setInterval(() => {
      this.moveRight();
    }, 4000);
    this.setState((state) => {
      return {
        timer: timer
      }
    });
  }
  moveLeft = () => {
    clearInterval(this.state.timer);
    let selected = this.state.selected;
    if (selected === 1) {
       selected = 7
    }
    this.setState((state) => {
      return {
        left: state.left + 1344,
        selected: selected - 1
      }
    }, () => {
      let sliderImages = this.state.sliderImages;
      let moveElement = sliderImages.shift();
      moveElement.id = moveElement.id + 6;
      sliderImages.push(moveElement);
    }
    );
  }
  moveRight = () => {
    let sliderImages = this.state.sliderImages;
    let moveElement = sliderImages.pop();
    moveElement.id = moveElement.id - 6;
    sliderImages.unshift(moveElement);
    let selected = this.state.selected;
    if (selected === 6) {
       selected = 0
    }
    this.setState((state) => {
      return {
        left: state.left - 1344,
        selected: selected + 1
      }
    });
  }
  setSlider = () => {
    let tempSlider = [];
    SliderImages.forEach((element) => {
      let tempElement = { ...element };
      tempSlider = [...tempSlider, tempElement];
    })
    this.setState(() => {
      return { sliderImages: tempSlider };
    })
  }
  render() {
    return (
      <SliderWrapper>
        <div className="container-fluid">
          {this.state.sliderImages.map(element => <img className="img" src={element.img} alt={element.alt} key={element.id} style={{ left: 1344 * element.id - this.state.left - 2688 }} />)}
          <button className="left" onClick={this.moveLeft}><i className="fas fa-angle-left"></i></button>
          <button className="right" onClick={this.moveRight}><i className="fas fa-angle-right"></i></button>
          <div className="blockWrapper">
            {SliderImages.map(item => <div className={this.state.selected === item.id ? "blocks active" : "blocks"} key = {item.id + 222}></div>)}
          </div>
        </div>
      </SliderWrapper>
    )
  }
}
const SliderWrapper = styled.div`
background: var(--MainBlack);
.container-fluid {
    height: 80vh;  
    position: relative;
    width: 100%;  
}
.left, .right {
  position: absolute;
  background: rgba(0,0,0,0.3);
  width: 60px;
  height: 60px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--MainWhite); 
  border: none;
  font-size: 30px;
}
.left:hover, .right:hover  {
  background: var(--MainAqua);
  font-size: 30px;
}
.right {
  right: 0;
}
.left {
  left: 0;
}
.img {
  position: absolute;
  transition: all 1s linear; 
}
.blockWrapper {
  position: absolute;
  left: 50%;
  bottom: 0.5%;
  transform: translate(-50%);
}
.blocks {
  width: 10px;
  height: 10px;
  background: rgba(0,0,0,0.8);
  display: inline-block;
  margin: 10px;
  transition: all 1s linear;
  border-radius: 50%;  
}
.active {
  background: var(--MainAqua);
}
`;