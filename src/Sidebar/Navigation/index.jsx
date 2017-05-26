import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Link from './Link';

const Wrapper = styled.nav`
  padding: 150px 0;

  @media (max-width: 768px) {
    display: ${props => (props.isOpened ? 'block' : 'none')};
  }
`;

export default ({ isOpened }) => (
  <Wrapper isOpened={isOpened}>
    <Menu title="football">
      <Link to="/">shoes</Link>
      <Link to="/">clothing</Link>
      <Link to="/">accessories</Link>
    </Menu>
    <Menu title="running">
      <Link to="/">shoes</Link>
      <Link to="/">clothing</Link>
      <Link to="/">accessories</Link>
    </Menu>
    <Menu title="basketball">
      <Link to="/">shoes</Link>
      <Link to="/">clothing</Link>
      <Link to="/">accessories</Link>
    </Menu>
  </Wrapper>
);
