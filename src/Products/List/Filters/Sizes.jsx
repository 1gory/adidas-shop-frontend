import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  margin-left: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  vertical-align: middle;

  @media (max-width: 768px) {
    margin-left: 0;
    display: block;
  }
`;

const SizeButtons = styled.div`
  padding-left: 14px;
  display: inline-block;
`;

const Button = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: ${props => (props.isActive === true ? '#4d42f8' : '#d6d6d6')};
`;

export default () => (
  <Wrapper>
    size
    <SizeButtons>
      <Button to="/">36</Button>
      <Button to="/">37</Button>
      <Button to="/">38</Button>
      <Button to="/">39</Button>
      <Button to="/">40</Button>
      <Button isActive to="/">41</Button>
      <Button to="/">42</Button>
    </SizeButtons>
  </Wrapper>
);
