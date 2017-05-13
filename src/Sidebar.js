import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <aside className="sidebar">
    <div className="logo-container">
      <Link to="/">
        <img className="logo" src="./images/logo.png" alt="" />
      </Link>
    </div>
    <form className="search-form">
      <img className="search-icon" src="./images/search-icon.png" alt="" />
      <input className="search-line" />
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
)
