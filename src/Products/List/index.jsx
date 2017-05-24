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

export default () => (
  <main>
    <Filters />
    <List>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card price={170} hasDiscount imgSrc={'./images/products/shoes3.jpg'} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card price={240.99} imgSrc={'./images/products/shoes1.jpg'} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card price={1024} imgSrc={'./images/products/shoes2.jpg'} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card price={1024} imgSrc={'./images/products/shoes2.jpg'} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card price={170} imgSrc={'./images/products/shoes3.jpg'} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card price={170} hasDiscount imgSrc={'./images/products/shoes2.jpg'} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card price={170} imgSrc={'./images/products/shoes1.jpg'} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card price={170} imgSrc={'./images/products/shoes1.jpg'} />
        </Col>
      </Row>
    </List>
  </main>
);
