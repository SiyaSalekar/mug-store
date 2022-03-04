import React, { Component } from 'react'
import Product from "./Product";
import axios from "axios"
import {SERVER_HOST} from "../config/global_constants"
import {Link} from "react-router-dom";

export default class ProductList extends Component{
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

    sortByNameAsc = (e) =>{
        let store = this.state.store.sort((a, b) => a.title < b.title?-1:1)
        this.setState({store, store})       
    }
    sortByNameDesc = (e) =>{
      let store = this.state.store.sort((a, b) => a.title < b.title?1:-1)
      this.setState({store, store})       
   }
   sortByPriceAsc = (e) =>{
    let store = this.state.store.sort((a, b) => a.price < b.price?-1:1)
    this.setState({store, store})       
  }
  sortByPriceDesc = (e) =>{
    let store = this.state.store.sort((a, b) => a.price < b.price?1:-1)
    this.setState({store, store})       
  }

    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    return (
      
      <div className="site-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-md-9 order-2">

            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="float-md-left mb-4"><h2 class="text-black h5">Our Collection</h2></div>
                <div className="d-flex">
                  <div className="dropdown mr-1 ml-md-auto">
                    <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Name
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                      <button className="dropdown-item" onClick = {this.sortByNameAsc}>Name, A to Z</button>
                      <div className="dropdown-divider"></div>
                      <button className="dropdown-item"  onClick = {this.sortByNameDesc}>Name, Z to A</button>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">Price</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
                    <button className="dropdown-item" onClick = {this.sortByPriceAsc}>Price, low to high</button>
                      <div className="dropdown-divider"></div>
                   <button className="dropdown-item" onClick = {this.sortByPriceDesc}>Price, high to low</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
            <div id = "root">
              </div>
              {this.state.store.map(product=>{
                return <Product key={product.id} product = {product}/>
              })}

            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-md-12 text-center">
                <div className="site-block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 order-1 mb-5 mb-md-0">
            <div className="border p-4 rounded mb-4">
              <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-1"><a href="#" className="d-flex"><span>Glass</span> <span className="text-black ml-auto">(count)</span></a></li>
                <li className="mb-1"><a href="#" className="d-flex"><span>Thermal</span> <span className="text-black ml-auto">(count)</span></a></li>
                <li className="mb-1"><a href="#" className="d-flex"><span>Paper</span> <span className="text-black ml-auto">(count)</span></a></li>
                <li className="mb-1"><a href="#" className="d-flex"><span>Ancient</span> <span className="text-black ml-auto">(count)</span></a></li>
              </ul>
            </div>

            <div className="border p-4 rounded mb-4">
              <div className="mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">Filter by Price</h3>
                <div id="slider-range" className="border -primary"></div>
                <input type="slider" name="text" id="amount" className="form-control border-0 pl-0 bg-gray"/>
              </div>

              <div className="mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">Material</h3>
                <label for="s_sm" className="d-flex">
                  <input type="checkbox" id="s_sm" className="mr-2 mt-1"/> <span className="text-black">Heat Resistant</span>
                </label>
                <label for="s_md" className="d-flex">
                  <input type="checkbox" id="s_md" className="mr-2 mt-1"/> <span className="text-black">Non-Heat Resistant</span>
                </label>

              </div>

              <div className="mb-4">
                <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
                <a href="#" className="d-flex color-item align-items-center" >
                  <span className="bg-danger color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Red (count)</span>
                </a>
                <a href="#" className="d-flex color-item align-items-center" >
                  <span className="bg-success color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Green (count)</span>
                </a>
                <a href="#" className="d-flex color-item align-items-center" >
                  <span className="bg-info color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Blue (count)</span>
                </a>
                <a href="#" className="d-flex color-item align-items-center" >
                  <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span className="text-black">Yellow (count)</span>
                </a>
                <a href="#" className="d-flex color-item align-items-center" >
                  <span className="bg-primary color d-inline-block rounded-circle mr-2"></span> <span className="text-black">White (count)</span>
                </a>
              </div>

            </div>
          </div>
        </div>
        </div>
        <div className="add-new-car">
      <Link className="add-button" to={"/AddMug"}>Add Mug</Link>
     </div>
        </div>

      

      
    )
  }
}
