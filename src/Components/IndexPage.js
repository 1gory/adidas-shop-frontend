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
      <main className="products-container">
        <div className="filters-bar">
          <img className="filter-button" src="./images/filter.png"/>
          <div className="filter-gender">
            <button className="filter-gender-button filter-gender-button-selected" to="/">man</button>
            <button className="filter-gender-button" to="/">woman</button>
          </div>
          <div className="filter-sizes">
            size
            <div className="filter-size-numbers">
              <Link className="filter-size-number" to="/">36</Link>
              <Link className="filter-size-number" to="/">37</Link>
              <Link className="filter-size-number" to="/">38</Link>
              <Link className="filter-size-number" to="/">39</Link>
              <Link className="filter-size-number" to="/">40</Link>
              <Link className="filter-size-number filter-size-selected" to="/">41</Link>
              <Link className="filter-size-number" to="/">42</Link>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="row">
            <div className="col-4">
              <div className="product-wrapper">
                <div className="product-card product-sale">
                  <span className="product-sale-label">sale</span>
                  <img className="product-img" src="./images/products/bitmap.jpg"/>
                  <Link className="product-buy-button" to="/product">$170</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="product-wrapper">
                <div className="product-card">
                  <img className="product-img" src="./images/products/bitmap-gray.jpg"/>
                  <Link className="product-buy-button" to="/product">$240.99</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="product-wrapper">
                <div className="product-card">
                  <img className="product-img" src="./images/products/bitmap.jpg"/>
                  <Link className="product-buy-button" to="/product">$1024</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="product-wrapper">
                <div className="product-card">
                  <img className="product-img" src="./images/products/bitmap.jpg"/>
                  <Link className="product-buy-button" to="/product">$170</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="product-wrapper">
                <div className="product-card product-sale">
                  <span className="product-sale-label">sale</span>
                  <img className="product-img" src="./images/products/shoes.jpg"/>
                  <Link className="product-buy-button" to="/product">$170</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="product-wrapper">
                <div className="product-card">
                  <img className="product-img" src="./images/products/bitmap-gray.jpg"/>
                  <Link className="product-buy-button" to="/product">$170</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
