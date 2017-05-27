import React, { Component } from 'react';
import styled from 'styled-components';

const MainImage = styled.img`
  width: 80%;
  min-width: 350px;
  display: block;
  margin: 0 auto;
  padding 30px;
  padding-top: 50px;
`;

const Thumbs = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const Thumb = styled.img`
  display: block;
  width: 20%;
  height: 20%;
  cursor: pointer;
  margin: 10px;
  border: ${props => props.isSelected && '5px solid #e8e8ea'};
  margin: ${props => props.isSelected && '5px'};

  &:hover {
    border: 5px solid #e8e8ea;
    margin: 5px;
  }
`;

const images = [
  {
    src: require('./product-1.jpg'),
  },
  {
    src: require('./product-2.jpg'),
  },
  {
    src: require('./product-3.jpg'),
  },
  {
    src: require('./product-4.jpg'),
  },
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: require('./product-4.jpg'),
    };

    this.setImageSrc = this.setImageSrc.bind(this);
  }

  setImageSrc(imageSrc) {
    this.setState({
      imageSrc,
    });
  }

  render() {
    return (
      <div>
        <MainImage src={this.state.imageSrc} alt="" />
        <Thumbs>
          {images.map(image => (
            <Thumb
              isSelected={this.state.imageSrc === image.src}
              onClick={() => this.setImageSrc(image.src)}
              src={image.src}
              alt=""
            />
          ))}
        </Thumbs>
      </div>
    );
  }
}
