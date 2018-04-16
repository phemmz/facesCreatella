import React from 'react';
import Home from './Home';

describe('Home Component', () => {
  it('should render a home container', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find('.home-container').exists()).toBe(true);
  });

  it('should render a sidenav', () => {
    const wrapper = mount(<Home />);

    expect(wrapper.find('SideNav').exists()).toBe(true);
  });

  it('should render an header with text content', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find('header').text()).toBe("Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.");
  });
});
