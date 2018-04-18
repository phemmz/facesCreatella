import React from 'react';
import Home from './Home';

describe('Home Component', () => {
  const wrapper = shallow(<Home />);

  it('should render a home container', () => {
    expect(wrapper.find('.home-container').exists()).toBe(true);
  });

  it('should render a sidenav', () => {
    expect(wrapper.find('SideNav').exists()).toBe(true);
  });

  it('should render an header with text content', () => {
    expect(wrapper.find('header').text()).toBe("Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.");
  });

  it('should display preloader when api call is loading', () => {
    wrapper.setState({ isLoading: true });
    expect(wrapper.find('.before-loading').exists()).toBe(true);
  });

  it('should not display end of Catalogue when there are more products', () => {
    expect(wrapper.find('.end-of-catalogue').exists()).toBe(false);
  });

  it('should display end of Catalogue when there are no more products', () => {
    wrapper.setState({ endOfCatalogue: true });
    expect(wrapper.find('.end-of-catalogue').exists()).toBe(true);
  });
});
