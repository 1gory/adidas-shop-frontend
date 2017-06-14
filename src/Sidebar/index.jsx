import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Hamburger from './Hamburger';
import Navigation from './Navigation';

const Aside = styled.aside`
  text-align: center;
  min-width: 375px;
  width: 414px;
  background-color: black;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 17px 15px;
  }
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isOpened: !state.isOpened,
    }));
  }

  render() {
    return (
      <Aside>
        <Wrapper>
          <Logo />
          <Hamburger onClick={this.handleClick} />
        </Wrapper>
        <Navigation isOpened={this.state.isOpened} />
      </Aside>
    );
  }
}
