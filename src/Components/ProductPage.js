import React from 'react';
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="main-container">
      <aside className="sidebar">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src="./images/logo.png"/>
          </Link>
        </div>
        <form className="search-form">
          <img className="search-icon" src="./images/search-icon.png"/>
          <input className="search-line"/>
        </form>
        <nav className="navigation">
          <Link className="navigation-link navigation-setcion-link navigation-link-selected" to="/">sports</Link>
          <nav className="navigation-section">
            <Link className="navigation-link" to="/">shoes</Link>
            <Link className="navigation-link" to="/">clothing</Link>
            <Link className="navigation-link" to="/">accesories</Link>
          </nav>
          <nav>
            <Link className="navigation-link navigation-setcion-link" to="/">brands</Link>
            <Link className="navigation-link navigation-setcion-link" to="/">micoach</Link>
          </nav>
        </nav>
      </aside>
      <main>
        <div className="product-container">
          <div className="product-header">
            <div className="product-left-header">
              <h1 className="product-name">Ultra<br/> boost</h1>
              <button className="product-save-button">Save</button>
            </div>
            <div className="product-right-header">
              <div className="product-right-header-top">
                <div>
                  <button className="gallery-button"></button>
                  <button className="gallery-button gallery-button-teal"></button>
                  <button className="gallery-button gallery-button-black"></button>
                  <button className="gallery-button"></button>
                </div>
                <span className="product-sale-label">sale</span>
              </div>
              <h2 className="product-price">$170</h2>
            </div>
          </div>
          <div className="product-gallery">
            <img className="product-main-image" src="images/product-big.jpg"/>
            <div className="product-gallery-thumbs">
              <img className="product-gallery-thumb" src="images/products/product-min-1.png"/>
              <img className="product-gallery-thumb" src="images/products/product-min-2.png"/>
              <img className="product-gallery-thumb" src="images/products/product-min-3.png"/>
              <img className="product-gallery-thumb" src="images/products/product-min-4.png"/>
              <img className="product-gallery-thumb" src="images/hamburger.png"/>
              <button className="product-gallery-more-photo-button">see more photos</button>
            </div>
          </div>
          <div className="product-description">
            <p>
              <span className="product-brand">Adidas</span> is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.
            </p>
          </div>
        </div>
        <button className="product-buy-now-button">buy now</button>
      </main>
    </div>
  );
}
