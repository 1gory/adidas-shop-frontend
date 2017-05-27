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
  require('./product-1.jpg'),
  require('./product-2.jpg'),
  require('./product-3.jpg'),
  require('./product-4.jpg'),
];

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageIndex: 3,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({
      selectedImageIndex: index,
    });
  }

  render() {
    return (
      <div>
        <MainImage src={images[this.state.selectedImageIndex]} alt="" />
        <Thumbs>
          {images.map((image, index) => (
            <Thumb
              isSelected={this.state.selectedImageIndex === index}
              onClick={() => this.handleClick(index)}
              src={images[index]}
              alt=""
            />
          ))}
        </Thumbs>
      </div>
    );
  }
}
