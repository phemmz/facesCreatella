import React from 'react';

import ProductCard from './ProductCard';
import products from '../../Fixtures/products';

describe('ProductCard Component', () => {
  const wrapper = shallow(<ProductCard product={products[0]} />);
  it('should render a product card container', () => {
    
    expect(wrapper.find('.product-card')).toHaveLength(1);
  });

  it('should display the size, price, date and face of the product', () => {

    expect(wrapper.find('.product-size').text()).toBe(`Size: ${products[0].size}px`);
    expect(wrapper.find('.product-price').text()).toBe(`Price: $${products[0].price}`);
    expect(wrapper.find('.product-date').text()).toBe("Added: 7 days ago");
    expect(wrapper.find('.product-face').text()).toBe(products[0].face);
  });
});
