import React, { Component } from 'react'
import logo from '../logo.svg'
import Product from "./Product";
import axios from "axios"
import {SERVER_HOST} from "../config/global_constants"

export default class Info extends Component {

  constructor(props)
    {
        super(props)
        this.state = {
            store:[]
        }
    }
    componentDidMount()
    {
        axios.get(`${SERVER_HOST}/store`)
        .then(res =>
        {
            if(res.data)
            {
                console.log(res.data)
                 if (res.data.errorMessage)
                  {
                    console.log(res.data.errorMessage)
                   }
                   else
                    {
                       console.log(res.data)
                       this.setState({store: res.data})
                    }
            }
            else
            {
                console.log("Records not found")
            }
        })
    }

  render() {
    
    return (
    <div className='site-wrap'>
    <div className="site-blocks-cover" style={{ backgroundImage:`url(${logo})` }} data-aos="fade">
        <div className="container">
          <div className="row align-items-start align-items-md-center justify-content-end">
            <div className="col-md-5 text-center text-md-left pt-5 pt-md-0">
              <h1 className="mb-2">Choose Your Favorite Mug</h1>
              <div className="intro-text text-center text-md-left">
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                <p>
                  <a href="shop.html" className="btn btn-sm btn-primary">Shop Now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section site-section-sm site-blocks-1">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
            <div className="icon mr-4 align-self-start">
              <span className="icon-truck"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase">Free Shipping</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
            <div className="icon mr-4 align-self-start">
              <span className="icon-refresh2"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase">Free Returns</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
            <div className="icon mr-4 align-self-start">
              <span className="icon-help"></span>
            </div>
            <div className="text">
              <h2 className="text-uppercase">Customer Support</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section site-blocks-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="img/giraffe_creative.jpg" alt="" className="img-fluid"></img>
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Novelty</h3>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="img/koala_creative.jpeg" alt="" className="img-fluid"></img>
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Creative</h3>
              </div>
            </a>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <a className="block-2-item" href="#">
              <figure className="image">
                <img src="img/paper1.jpg" alt="" className="img-fluid"></img>
              </figure>
              <div className="text">
                <span className="text-uppercase">Collections</span>
                <h3>Travel</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section block-3 site-blocks-2 bg-light">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 site-section-heading text-center pt-4">
          <h2>Featured Products</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="nonloop-block-3 owl-carousel">
            <div className="item">
              <div className="block-4 text-center">
                <figure className="block-4-image">
                  <img src="img/travel2.png" alt="Image placeholder" className="img-fluid"/>
                </figure>
                <div className="block-4-text p-4">
                  <h3><a href="#">Travel Mug</a></h3>
                  <p className="mb-0">Finding perfect Mug</p>
                  <p className="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="block-4 text-center">
                <figure class="block-4-image">
                  <img src="img/knit_creative.png" alt="Image placeholder" class="img-fluid"/>
                </figure>
                <div class="block-4-text p-4">
                  <h3><a href="#">Knit Mug</a></h3>
                  <p class="mb-0">Finding perfect products</p>
                  <p class="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="block-4 text-center">
                <figure className="block-4-image">
                  <img src="img/snob_creative.jpg" alt="Image placeholder" className="img-fluid"/>
                </figure>
                <div className="block-4-text p-4">
                  <h3><a href="#">Snob Mug</a></h3>
                  <p className="mb-0">Finding perfect products</p>
                  <p className="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="block-4 text-center">
                <figure className="block-4-image">
                  <img src="img/glass2.jpg" alt="Image placeholder" className="img-fluid"/>
                </figure>
                <div className="block-4-text p-4">
                  <h3><a href="#">Plain Mug</a></h3>
                  <p className="mb-0">Finding perfect products</p>
                  <p className="text-primary font-weight-bold">$50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    
    
)
}}