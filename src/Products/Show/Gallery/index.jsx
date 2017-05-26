import React from 'react';
import styled from 'styled-components';

const MainImage = styled.img`
  width: 80%;
  max-width: 700px;
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

  &:hover {
    border: 5px solid #e8e8ea;
    margin: 5px;
  }
`;

export default () => (
  <div>
    <MainImage src={require('./product-big.jpg')} alt="" />
    <Thumbs>
      <Thumb src={require('./product-min-1.png')} alt="" />
      <Thumb src={require('./product-min-2.png')} alt="" />
      <Thumb src={require('./product-min-3.png')} alt="" />
      <Thumb src={require('./product-min-4.png')} alt="" />
    </Thumbs>
  </div>
);
