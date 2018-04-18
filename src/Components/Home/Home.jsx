import React, { Component } from 'react';

import SideNav from '../SideNav/SideNav';
import ProductCard from '../Products/ProductCard';
import products from '../../Fixtures/products';

import { getPaginatedProducts, getSortedPaginatedProducts } from '../../Helpers/ApiManager';

/**
 * @class Home
 * @extends Component
 */
class Home extends Component {
  productContainer;
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
      isPreFetchScrollLoading: false,
      nextPage: 2,
      preProductsFetched: [],
      scrolledTop: 0,
      targetHeight: 181,
      endOfCatalogue: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  /**
   * componentWillMount Lifecycle method
   *
   * @returns {null}
   */
  componentWillMount() {
    this.setState({
      isLoading: true,
    })
    getPaginatedProducts(1).then((products) => {
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

  /**
   * This method handles loading of more products on scroll
   *
   * @returns {null}
   * @param {null}
   */
  scrollHandler() {
    const scrollHeight = this.productContainer.scrollHeight;
    const clientHeight = this.productContainer.clientHeight;
    const scrollTop = this.productContainer.scrollTop;
    const mainScrollTop = this.productContainer.scrollTop - this.state.scrolledTop;
    
    const preFetchTargetReached = (mainScrollTop > 181) && (mainScrollTop < 250);

    if (this.state.nextPage < 35 ) {
      if (preFetchTargetReached && !this.state.isPreFetchScrollLoading) {
        this.preFetchProducts();
      }
  
      const scrolledToBottom = (scrollHeight - clientHeight) === scrollTop;
      if (scrolledToBottom) {
        this.displayMoreProducts(scrollTop);
      }
    } else {
      this.setState({
        endOfCatalogue: true
      })
    }
  }

  /**
   * This method handles prefetching of products for sorting and normal product display
   *
   * @returns {null}
   * @param {null}
   */
  preFetchProducts() {
    this.setState({
      isPreFetchScrollLoading: true,
    });

    if (this.state.size) {
      this.sortProducts("size");
    } else if (this.state.price) {
      this.sortProducts("price");
    } else if (this.state.id) {
      this.sortProducts("id");
    } else {
      getPaginatedProducts(this.state.nextPage)
        .then((products) => {
          this.setState({
            preProductsFetched: products.data,
          });
        })
        .catch((err) => {
          this.setState({
            errors: err
          });
        });
    }
  }

  /**
   * This method concatenates products
   *
   * @param {number} scrollTop
   * @returns {null}
   */
  displayMoreProducts(scrollTop) {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        products: [...this.state.products, ...this.state.preProductsFetched],
        isLoading: false,
        nextPage: this.state.nextPage + 1,
        isPreFetchScrollLoading: false,
        preProductsFetched: [],
        scrolledTop: scrollTop,
      });
    }, 3000);
  }

  /**
   * This method handles on click of size, price and id checkboxes
   *
   * @param {*} event
   */
  clickHandler(event) {
    this.productContainer.scrollTop = 0;
    const initialState = {
      size: false,
      price: false,
      id: false,
      isLoading: true,
      nextPage: 2,
      scrolledTop: 0,
      preProductsFetched: [],
    }
    if (event.target.name === 'size') {
      this.setState({
        ...initialState,
        size: true,
      });
    } else if (event.target.name === 'price') {
      this.setState({
        ...initialState,
        price: true,
      });
    } else {
      this.setState({
        ...initialState,
        id: true,
      });
    }
    getSortedPaginatedProducts(1, event.target.name)
      .then((products) => {
        this.setState({
          products: products.data,
          isLoading: false,
        })
      })
      .catch((err) => {
        this.setState({
          errors: err
        });
      });
  }

  /**
   * This method fires the action to get sorted paginated products from the api
   *
   * @param {string} sortType
   * @returns {null}
   */
  sortProducts(sortType) {
    getSortedPaginatedProducts(this.state.nextPage, sortType)
      .then((products) => {
        this.setState({
          preProductsFetched: products.data,
          isLoading: false,
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
                <span className="loading-text">Loading</span>
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
          <div className="product-list" onScroll={this.scrollHandler} ref={(element) => this.productContainer = element}>
          {
            this.state.products.map((product) => {
              return (
                <ProductCard key={product.id} product={product} />
              );
            })
          }
          </div>
          { this.state.endOfCatalogue && <span className="end-of-catalogue">~End of Catalogue~</span>}
        </section>
      </main>
    );
  }
}

export default Home;
