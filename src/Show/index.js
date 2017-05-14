import React from 'react';
import ProductSaleLabel from '../List/ProductCard/ProductSaleLabel';

export default () => (
  <main>
    <div className="product-container">
      <div className="product-header">
        <div className="product-left-header">
          <h1 className="product-name">Ultra<br /> boost</h1>
          <button className="product-save-button">Save</button>
        </div>
        <div className="product-right-header">
          <div className="product-right-header-top">
            <div>
              <button className="gallery-button" />
              <button className="gallery-button gallery-button-teal" />
              <button className="gallery-button gallery-button-black" />
              <button className="gallery-button" />
            </div>
            <ProductSaleLabel />
          </div>
          <h2 className="product-price">$170</h2>
        </div>
      </div>
      <div className="product-gallery">
        <img className="product-main-image" src="images/product-big.jpg" alt="" />
        <div className="product-gallery-thumbs">
          <img className="product-gallery-thumb" src="images/products/product-min-1.png" alt="" />
          <img className="product-gallery-thumb" src="images/products/product-min-2.png" alt="" />
          <img className="product-gallery-thumb" src="images/products/product-min-3.png" alt="" />
          <img className="product-gallery-thumb" src="images/products/product-min-4.png" alt="" />
          <img className="product-gallery-thumb" src="images/hamburger.png" alt="" />
          <button className="product-gallery-more-photo-button">
            see more photos
          </button>
        </div>
      </div>
      <div className="product-description">
        <p>
          <span className="product-brand">Adidas</span>
          is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.
        </p>
      </div>
    </div>
    <button className="product-buy-now-button">buy now</button>
  </main>
);
