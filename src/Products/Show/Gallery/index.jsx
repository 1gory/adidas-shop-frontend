import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  //height: 480px;
  //display: flex;
  //align-items: flex-end;
`;

const MainImage = styled.img`
  border-style: none;
  width: 80%;
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
`;

export default () => (
  <Gallery>
    <MainImage src={require('./product-big.jpg')} alt="" />
    <Thumbs>
      <Thumb src={require('./product-min-1.png')} alt="" />
      <Thumb src={require('./product-min-2.png')} alt="" />
      <Thumb src={require('./product-min-3.png')} alt="" />
      <Thumb src={require('./product-min-4.png')} alt="" />
      <Thumb src={require('./product-min-2.png')} alt="" />
    </Thumbs>
  </Gallery>
);
