import React from 'react';

const SideNav = ({ sortProducts }) => (
  <div>
    <h3>Ascii Faces</h3>
    <div>
      <h4>Sort By:</h4>
      <hr />
      <input type="checkbox" name="size" id="size" value="Size" onClick={sortProducts} />
      <label htmlFor="size">Size</label>
      <br />
      <input type="checkbox" name="price" id="price" value="Price" onClick={sortProducts} />
      <label htmlFor="price">Price</label>
      <br />
      <input type="checkbox" id="id" name="id" value="Id" onClick={sortProducts} />
      <label htmlFor="id">Id</label>
    </div>
  </div>
);

export default SideNav;
