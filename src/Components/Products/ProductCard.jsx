import React from 'react';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-face" style={{ fontSize: product.size }}>{product.face}</div>
    <span className="product-size">Size: {product.size}</span>
    <span className="product-price">Price: {product.price}</span>
    <span className="product-date">{product.date}</span>
  </div>
);

export default ProductCard;
