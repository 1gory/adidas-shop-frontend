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

const colors = ['#c5c5c5', '#4d87ca', '#4a4a4a', '#e0e0e0'];

export default ({ setColor }) => (
  <div>
    {colors.map(color => <Button onClick={() => setColor(color)} color={color} />)}
  </div>
);
