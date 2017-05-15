import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import React from 'react';
import Filters from './Filters';
import ProductCard from './Card';

const Products = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  flex-wrap: wrap;
`;

const ProductsContainer = styled.main`
  width: 75%;
`;

export default () => (
  <ProductsContainer>
    <Filters />
    <Products>
      <Row>
        <Col lg={4}>
          <ProductCard price={170} hasDiscount imgSrc={'./images/products/bitmap.jpg'} />
        </Col>
        <Col lg={4}>
          <ProductCard price={240.99} imgSrc={'./images/products/bitmap-gray.jpg'} />
        </Col>
        <Col lg={4}>
          <ProductCard price={1024} imgSrc={'./images/products/bitmap-gray.jpg'} />
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <ProductCard price={170} imgSrc={'./images/products/bitmap.jpg'} />
        </Col>
        <Col lg={4}>
          <ProductCard price={170} hasDiscount imgSrc={'./images/products/shoes.jpg'} />
        </Col>
        <Col lg={4}>
          <ProductCard price={170} imgSrc={'./images/products/bitmap-gray.jpg'} />
        </Col>
      </Row>
    </Products>
  </ProductsContainer>
);
