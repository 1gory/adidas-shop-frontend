import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.color}
  outline: none;
  cursor: pointer;
  border: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 13px;
`;

export default ({ handleClick, colors }) => (
  <div>
    {colors.map((color, index) => <Button onClick={() => handleClick(index)} color={color} />)}
  </div>
);
