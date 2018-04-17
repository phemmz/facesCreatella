import React from 'react';

const SideNav = ({ clickHandler, sizeChecked, priceChecked, idChecked }) => (
  <div className="sidenav-container">
    <h3>Ascii Faces</h3>
    <div className="checkbox-form">
      <h4>Sort By:</h4>
      <hr />
      <input type="checkbox" name="size" id="size" value="size" onClick={clickHandler} checked={sizeChecked}/>
      <label htmlFor="size">Size</label>
      <br />
      <input type="checkbox" name="price" id="price" value="price" onClick={clickHandler} checked={priceChecked}/>
      <label htmlFor="price">Price</label>
      <br />
      <input type="checkbox" id="productId" name="id" value="id" onClick={clickHandler} checked={idChecked}/>
      <label htmlFor="productId">Id</label>
    </div>
  </div>
);

export default SideNav;
