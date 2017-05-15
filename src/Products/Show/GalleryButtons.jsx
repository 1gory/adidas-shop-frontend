import styled from 'styled-components';
import React from 'react';

const GalleryButton = styled.button`
  background-color: ${props => (props.color ? props.color : 'buttonface')}
  border: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 13px;
`;

export default () => (
  <div>
    <GalleryButton />
    <GalleryButton color={'#4d87ca'} />
    <GalleryButton color={'#4a4a4a'} />
    <GalleryButton />
  </div>
);
