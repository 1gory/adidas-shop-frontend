import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductSaleLabel from "./ProductSaleLabel";

export default class ProductCard extends Component {
  render() {
    let productSaleLabel = "";
    let productSaleClass = "";
    if (this.props.hasDiscount) {
      productSaleLabel = <ProductSaleLabel />;
      productSaleClass = "product-sale";
    }

    return (
      <div className="product-wrapper">
        <div className={`product-card ${productSaleClass}`}>
          {productSaleLabel}
          <img className="product-img" src={this.props.imgSrc} alt="" />
          <Link className="product-buy-button" to="/product">
            ${this.props.price}
          </Link>
        </div>
      </div>
    );
  }
}
