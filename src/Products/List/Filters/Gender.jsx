import React from 'react';
import styled from 'styled-components';

const FilterGenderButton = styled.button`
  border: none;
  font-size: 24px;
  font-family: 'AvenirNext';
  background: transparent;
  text-transform: uppercase;
  color: ${props => (props.isSelected ? '#4d42f8' : '#dedede')};
`;

const Filters = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 10px;
  margin-left: 10px;
`;

export default () => (
  <Filters>
    <FilterGenderButton isSelected>
      man
    </FilterGenderButton>
    <FilterGenderButton>woman</FilterGenderButton>
  </Filters>
);
