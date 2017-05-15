import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Filters from './Filters';
import Card from './Card';

const List = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  flex-wrap: wrap;
`;

const Wrapper = styled.main`
  width: 75%;
`;

export default () => (
  <Wrapper>
    <Filters />
    <List>
      <Row>
        <Col lg={4}>
          <Card price={170} hasDiscount imgSrc={'./images/products/shoes3.jpg'} />
        </Col>
        <Col lg={4}>
          <Card price={240.99} imgSrc={'./images/products/shoes1.jpg'} />
        </Col>
        <Col lg={4}>
          <Card price={1024} imgSrc={'./images/products/shoes2.jpg'} />
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <Card price={170} imgSrc={'./images/products/shoes3.jpg'} />
        </Col>
        <Col lg={4}>
          <Card price={170} hasDiscount imgSrc={'./images/products/shoes2.jpg'} />
        </Col>
        <Col lg={4}>
          <Card price={170} imgSrc={'./images/products/shoes1.jpg'} />
        </Col>
      </Row>
    </List>
  </Wrapper>
);
