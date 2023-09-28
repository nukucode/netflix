import React from "react";
import "./TrendingItem.css";
import { Link } from "react-router-dom";

function TrendingItem({ index, type, src, alt, id }) {
  return (
    <Link to={`/details/${type}/${id}`} className="trendingItem">
      <span className="number">{index + 1}</span>
      <img src={src} alt={alt} />
    </Link>
  );
}

export default TrendingItem;
