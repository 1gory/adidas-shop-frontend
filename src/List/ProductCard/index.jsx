import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductSaleLabel from './ProductSaleLabel';

const ProductCard = props => (
  <div className="product-wrapper">
    <div className={`product-card ${props.hasDiscount && 'product-sale'}`}>
      {props.hasDiscount && <ProductSaleLabel />}
      <img className="product-img" src={props.imgSrc} alt="" />
      <Link className="product-buy-button" to="/product">
        ${props.price}
      </Link>
    </div>
  </div>
);

ProductCard.propTypes = {
  hasDiscount: PropTypes.string,
  price: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

ProductCard.defaultProps = {
  hasDiscount: false,
};

export default ProductCard;
