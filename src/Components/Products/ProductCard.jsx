import React from 'react';

const getDate = (date) => {
  let dateMoment = Math.trunc((Date.now() - Date.parse(date)) / 1000 / 60 / 60 / 24);
  if (dateMoment === 0) {
    return 'Today';
  }
  else if (dateMoment === 1) {
    return `${dateMoment} day ago`;
  }
  else if (dateMoment > 7) {
    return date;
  }
  return `${dateMoment} days ago`;
};

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-face" style={{ fontSize: product.size }}>{product.face}</div>
    <span className="product-size">Size: {product.size}px</span>
    <span className="product-date">Added: {getDate(product.date)}</span>
    <span className="product-price">Price: ${product.price}</span>
  </div>
);

export default ProductCard;
