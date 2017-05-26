import React, { Component } from 'react';
import styled from 'styled-components';
import arrow from './nav-arrow.svg';

const Wrapper = styled.div`
    margin-bottom: 30px;
  `;

const Button = styled.button`
  text-transform: uppercase;
  text-indent: 20px;
  margin-right: 20px;
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-family: inherit;

  &:after {
    content: '';
    position: absolute;
    width: 14px;
    height: 9px;
    margin: 10px;
    background: url(${arrow});
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
      <Wrapper>
        <Button onClick={this.handleClick}>{this.props.title}</Button>
        {this.state.isOpened && this.props.children}
      </Wrapper>
    );
  }
}
