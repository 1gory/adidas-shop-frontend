import React from "react";
import Filters from "./Filters";
import { Row, Col } from "react-flexbox-grid";
import ProductCard from "./ProductCard";

export default () => (
  <main className="products-container">
    <Filters />
    <div className="products">
      <Row>
        <Col lg={4}>
          <ProductCard
            price={170}
            hasDiscount={true}
            imgSrc={"./images/products/bitmap.jpg"}
          />
        </Col>
        <Col lg={4}>
          <ProductCard
            price={240.99}
            imgSrc={"./images/products/bitmap-gray.jpg"}
          />
        </Col>
        <Col lg={4}>
          <ProductCard
            price={1024}
            imgSrc={"./images/products/bitmap-gray.jpg"}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <ProductCard price={170} imgSrc={"./images/products/bitmap.jpg"} />
        </Col>
        <Col lg={4}>
          <ProductCard
            price={170}
            hasDiscount={true}
            imgSrc={"./images/products/shoes.jpg"}
          />
        </Col>
        <Col lg={4}>
          <ProductCard
            price={170}
            imgSrc={"./images/products/bitmap-gray.jpg"}
          />
        </Col>
      </Row>
    </div>
  </main>
);
