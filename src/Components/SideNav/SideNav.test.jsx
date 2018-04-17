import React from 'react';

import SideNav from './SideNav';
import { wrap } from 'module';

describe('SideNav Component', () => {
  const props = {
    sortProducts: jest.fn()
  };
  const wrapper = shallow(<SideNav {...props} />);
  it('should render three checkboxes inputs for size, price and id', () => {
    
    expect(wrapper.find('input')).toHaveLength(3);
  });

  it("should take one prop", () => {
    expect(Object.keys(wrapper.props()).length).toBe(1);
  });
});
