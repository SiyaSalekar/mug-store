import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class Navbar extends Component {
  render() {
    return (
     /* <div class="site-wrap">
   

    
    <div class="site-section site-section-sm site-blocks-1">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
            <div class="icon mr-4 align-self-start">
              <span class="icon-truck"></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">Free Shipping</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
            <div class="icon mr-4 align-self-start">
              <span class="icon-refresh2"></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">Free Returns</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
            <div class="icon mr-4 align-self-start">
              <span class="icon-help"></span>
            </div>
            <div class="text">
              <h2 class="text-uppercase">Customer Support</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    */
    <div className="site-wrap">
   <header className="site-navbar" role="banner">
    <div className="site-navbar-top">
    <div className="container">
      <div className="row align-items-center">

        <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
          <form action="" className="site-block-top-search">
            <span className="icon icon-search2"></span>
            <input type="text" className="form-control border-0" placeholder="Search"></input>
          </form>
        </div>

        <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
          <div className="site-logo">
            <a href="index.html" className="js-logo-clone">Maneki Mugs</a>
          </div>
        </div>

        <div className="col-6 col-md-4 order-3 order-md-3 text-right">
          <div className="site-top-icons">
            <ul>
              <li><a href="#"><span className="icon icon-person"></span></a></li>
              <li>
              <Link to="Cart" className="site-cart">
                  <span className="icon icon-shopping_cart"></span>
                  <span className="count">4</span>{/*cart count */}
              </Link>
              </li> 
              <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a></li>
            </ul>
          </div> 
        </div>

      </div>
    </div>
  </div> 
  <nav className="site-navigation text-right text-md-center">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
          <li><Link to="/">
            Home</Link>
            </li>
            <li><Link to="shop">Shop</Link></li>
            
            <li><Link to="Contact">Contact</Link></li>
          </ul>
        </div>
      
      </nav>
</header>
</div>
    
    )
  }
}


