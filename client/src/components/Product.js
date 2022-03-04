import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {

  render() {

    const {id, title, img, price, inCart, color, material, capacity} = this.props.product;

    return (
      
      <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
      <div className="block-4 text-center border">
                  <figure className="block-4-image">
                  <Link to="/details">
                  <img src = {img} alt="Image placeholder" className="img-fluid"/>
                  </Link>
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">{title}</a></h3>
                    <h4>{material}</h4>
                    <h4>{color}</h4>
                    <h4>{capacity}</h4>
                    <button className='cart-btn' disabled={inCart?true:false} onClick={()=>console.log('added to cart')}>
      {inCart?<p className='text-capitalize' disabled>in cart</p>:(<p>add to cart</p>)}
      </button>
                    <p className="text-primary font-weight-bold">${price}</p>
                  </div>
                  </div>
                  </div>
                  
    )
  }
}
