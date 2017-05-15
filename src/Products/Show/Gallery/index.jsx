/* eslint-disable global-require */

import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  height: 480px;
  display: flex;
  align-items: flex-end;
`;

const MainImage = styled.img`
  position: absolute;
  z-index: -1;
  right: 150px;
  top: 50px;
`;

const Thumbs = styled.div`
  display: flex;
`;

const Thumb = styled.img`
  display: block;
`;

const MorePhoto = styled.button`
  display: block;
  border: none;
  background: none;
  color: #c0c0c0;
  width: 50px;
  text-align: left;
`;

export default () => (
  <Gallery>
    <MainImage src={require('./product-big.jpg')} alt="" />
    <Thumbs>
      <Thumb src={require('./product-min-1.png')} alt="" />
      <Thumb src={require('./product-min-2.png')} alt="" />
      <Thumb src={require('./product-min-3.png')} alt="" />
      <Thumb src={require('./product-min-4.png')} alt="" />
      <Thumb src={require('./hamburger.png')} alt="" />
      <MorePhoto>
        see more photos
      </MorePhoto>
    </Thumbs>
  </Gallery>
);
