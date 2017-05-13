import React from "react";
import { Link } from "react-router-dom";

export default () => (
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
);
