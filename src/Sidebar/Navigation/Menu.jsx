/* eslint-disable global-require */
/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 30px;
  `;

const Button = styled.div`
  text-transform: uppercase;
  margin-right: 20px;
  color: white;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    width: 14px;
    height: 9px;
    margin-top: 12px;
    margin-left: 7px;
    background: url(${require('./nav-arrow.png')});
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
