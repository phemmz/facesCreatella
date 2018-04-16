import React from 'react';
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
  const wrapper = mount(<ProductCard />);

  it('should render a product card container', () => {

    expect(wrapper.find('.product-container').exist()).toBe(true);
  });

  it('should display the size, price, date and face of the product', () => {

    expect(wrapper.find('.product-size').exist()).toBe(true);
    expect(wrapper.find('.product-price').exist()).toBe(true);
    expect(wrapper.find('.product-date').exist()).toBe(true);
    expect(wrapper.find('.product-face').exist()).toBe(true);
  });
});
