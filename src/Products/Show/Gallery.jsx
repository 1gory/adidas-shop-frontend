import React, { Component } from 'react';
import styled from 'styled-components';
import getImage from '../../functions/getImage';

const MainImage = styled.img`
  width: 50%;
  min-width: 350px;
  display: block;
  margin: 0 auto;
  padding 30px;
  padding-top: 50px;
`;

const Thumbs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
      selectedImageIndex: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState({
      selectedImageIndex: index,
    });
  }

  render() {
    if (!this.props.images) return false;
    return (
      <div>
        <MainImage
          src={getImage(
            this.props.images[this.state.selectedImageIndex].id,
            this.props.images[this.state.selectedImageIndex].fileName,
            512,
          )}
          alt=""
        />
        <Thumbs>
          {this.props.images.map((image, index) => (
            <Thumb
              isSelected={this.state.selectedImageIndex === index}
              onClick={() => this.handleClick(index)}
              src={getImage(this.props.images[index].id, this.props.images[index].fileName, 128)}
              alt=""
            />
          ))}
        </Thumbs>
      </div>
    );
  }
}
