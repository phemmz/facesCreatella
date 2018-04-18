import React from 'react';

const SideNav = ({ clickHandler, sizeChecked, priceChecked, idChecked }) => (
  <div className="sidenav-container">
    <h2>Faces</h2>
    <hr />
    <div className="checkbox-form">
      <h4>Sort By</h4>
      <input type="checkbox" name="size" id="size" value="size" onClick={clickHandler} checked={sizeChecked}/>
      <label id="sizeLabel" htmlFor="size">Size</label>
      <br />
      <input type="checkbox" name="price" id="price" value="price" onClick={clickHandler} checked={priceChecked}/>
      <label id="priceLabel" htmlFor="price">Price</label>
      <br />
      <input type="checkbox" id="productId" name="id" value="id" onClick={clickHandler} checked={idChecked}/>
      <label id="idLabel" htmlFor="productId">Id</label>
    </div>
    <hr />
  </div>
);

export default SideNav;
