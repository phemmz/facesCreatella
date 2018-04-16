import React, { Component } from 'react';

import SideNav from '../SideNav/SideNav';
import ProductCard from '../Products/ProductCard';
import products from '../../Fixtures/products';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: products
    };
  }

  callme() {
    console.log('shie')
  }

  render() {
    return (
      <main className="home-container">
        <aside>
          <SideNav />
        </aside>
        <section>
          <header>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</header>
          <div className="product-list" onScroll={this.callme.bind(this)}>
          {
            this.state.products.map((product) => {
              return (
                <ProductCard key={product.id} product={product} />
              );
            })
          }
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
