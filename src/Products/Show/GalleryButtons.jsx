import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.color ? props.color : 'buttonface')}
  border: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 13px;
`;

export default () => (
  <div>
    <Button />
    <Button color={'#4d87ca'} />
    <Button color={'#4a4a4a'} />
    <Button />
  </div>
);