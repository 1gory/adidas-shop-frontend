import React, { Component } from 'react';
import styled from 'styled-components';
import Description from './Description';
import Header from './Header';
import Gallery from './Gallery';
import get from '../../api/resources';

const Wrapper = styled.div`
  position: relative;
`;

const BuyNowButton = styled.button`
  font-family: 'AvenirNext';
  border: none;
  bottom: 0;
  position: fixed;
  width: 75%;
  font-size: 32px;
  color: white;
  text-transform: uppercase;
  padding: 35px;
  margin: 0;
  background-image: linear-gradient(107deg, #0c09bf, #966dd8);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    get(props.match.url).then((data) => {
      this.setState(data);
    });
  }

  render() {
    return (
      <main>
        <Wrapper>
          <Header name={this.state.title} price={this.state.price} />
          <Gallery />
          <Description description={this.state.description} />
        </Wrapper>
        <BuyNowButton>buy now</BuyNowButton>
      </main>
    );
  }
}
