import React from "react";
import Gender from "./Gender";
import Sizes from "./Sizes";

export default () => (
  <div className="filters-bar">
    <img className="filter-button" src="./images/filter.png" alt="" />
    <Gender />
    <Sizes />
  </div>
);
