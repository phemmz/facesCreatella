import React from 'react';
import Home from './Home';

describe('Home Component', () => {
  it('should render a header with text Hello world', () => {
    const wrapper = mount(<Home />);

    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Hello, world!');
  });
});
