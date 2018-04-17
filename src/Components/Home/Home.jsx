import React, { Component } from 'react';

import SideNav from '../SideNav/SideNav';
import ProductCard from '../Products/ProductCard';
import products from '../../Fixtures/products';

import { getProducts, sortProducts } from '../../Helpers/ApiManager';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      errors: '',
      size: '',
      price: '',
      productId: '',
      size: false,
      price: false,
      id: false,
      isLoading: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillMount() {
    this.setState({
      isLoading: true,
    })
    getProducts().then((products) => {
      this.setState({
        products: products.data,
        isLoading: false,
      });
    }).catch((err) => {
      this.setState({
        errors: err
      });
    });
  }

  callme() {
    console.log('shie')
  }

  clickHandler(event) {
    if (event.target.name === 'size') {
      this.setState({
        [event.target.name]: true,
        price: false,
        id: false,
        isLoading: true,
      });
    } else if (event.target.name === 'price') {
      this.setState({
        [event.target.name]: true,
        size: false,
        id: false,
        isLoading: true,
      });
    } else {
      this.setState({
        [event.target.name]: true,
        size: false,
        price: false,
        isLoading: true,
      });
    }
    sortProducts(event.target.name)
      .then((products) => {
        this.setState({
          products: products.data,
          isLoading: false
        })
      })
      .catch((err) => {
        this.setState({
          errors: err
        });
      });
  }

  render() {
    return (
      <main className="home-container">
        {
          this.state.isLoading &&
            ( <div className="before-loading">
                <div className="spin" id="spin3"></div>
              </div> )
        }
        <aside>
          <SideNav
            clickHandler={this.clickHandler}
            sizeChecked={this.state.size}
            priceChecked={this.state.price}
            idChecked={this.state.id}
          />
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
