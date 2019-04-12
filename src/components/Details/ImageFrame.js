import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class ImageFrame extends Component {
    state = {
        img: this.props.img
    }
    movePictureFrame = (path) => {
        this.setState(() => {
            return { img: path }
        })
    }
    render() {
        const img = this.props.img;
        const img1 = this.props.img1;
        const img2 = this.props.img2;
        const img3 = this.props.img3;
        return (
            <ImageFrameWrapper>
                <div className='container p-5'>
                    <div className="row">
                        <Link to="/">
                            <span><i className="fas fa-home"></i></span>
                        </Link>
                        <h5 className="title">
                            /  {this.props.title}
                        </h5>
                    </div>
                    <div className="row">
                        <div className="frame p-5">
                            <img src={this.state.img} alt="product" />
                        </div>
                    </div>
                    <div className="row imagesGallery mt-4">
                        <div className="block" onClick={() => this.movePictureFrame(img)}><img src={img} alt="product" /></div>
                        <div className="block" onClick={() => this.movePictureFrame(img1)}><img src={img1} alt="product" /></div>
                        <div className="block" onClick={() => this.movePictureFrame(img2)}><img src={img2} alt="product" /></div>
                        <div className="block" onClick={() => this.movePictureFrame(img3)}><img src={img3} alt="product" /></div>
                    </div>
                </div>
            </ImageFrameWrapper>

        )
    }
}

const ImageFrameWrapper = styled.div`
.frame {
    width: 100%;
    height: 57%;
    margin: 0 auto;
    overflow: hidden;
}
.frame:hover {
    border: 0.02px solid grey;
}
.title {
    font-family: "Lato", sans-serif;
}
.container {
    width: 100%;
    margin: 0 auto;
}
i {
    color: var(--MainBlack);
}
i:hover {
    color: var(--MainAqua);
}
.title:hover {
    color: var(--MainAqua);
}
.frame img {
    width: 100%;
    height: 100%;
}
.imagesGallery {
    width: 98%;
    height: 20%;
}
.block {
    width: 25%;
    height: 11.5%;
}
.block img {
    width: 80%;
    height: 80%;
}
`;