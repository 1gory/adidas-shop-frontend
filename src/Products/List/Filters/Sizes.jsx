import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FilterSizes = styled.div`
  display: inline-block;
  margin-left: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  vertical-align: middle;
`;

const FilterSizeNumbers = styled.div`
  padding-left: 14px;
  display: inline-block;
`;

const FilterSizeNumber = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: ${props => (props.isActive === true ? '#4d42f8' : '#d6d6d6')};
`;

export default () => (
  <FilterSizes>
    size
    <FilterSizeNumbers>
      <FilterSizeNumber to="/">36</FilterSizeNumber>
      <FilterSizeNumber to="/">37</FilterSizeNumber>
      <FilterSizeNumber to="/">38</FilterSizeNumber>
      <FilterSizeNumber to="/">39</FilterSizeNumber>
      <FilterSizeNumber to="/">40</FilterSizeNumber>
      <FilterSizeNumber isActive to="/">41</FilterSizeNumber>
      <FilterSizeNumber to="/">42</FilterSizeNumber>
    </FilterSizeNumbers>
  </FilterSizes>
);
