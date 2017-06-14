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
      <Link to="/products/football/cleats">cleats</Link>
      <Link to="/products/football/apparel">apparel</Link>
      <Link to="/products/football/accessories">accessories</Link>
    </Menu>
    <Menu title="running">
      <Link to="/products/running/shoes">shoes</Link>
      <Link to="/products/running/apparel">apparel</Link>
      <Link to="/products/running/accessories">accessories</Link>
    </Menu>
    <Menu title="basketball">
      <Link to="/products/basketball/shoes">shoes</Link>
      <Link to="/products/basketball/apparel">apparel</Link>
      <Link to="/products/basketball/accessories">accessories</Link>
    </Menu>
  </Wrapper>
);
