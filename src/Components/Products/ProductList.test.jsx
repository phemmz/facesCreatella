import React from 'react';
import ProductList from './ProductList';

describe('Home Component', () => {
  it('should render a list of products', () => {
    const wrapper = mount(<ProductList />);

    expect(wrapper.find('.product-grid')).to.have.length(15);
  })
})