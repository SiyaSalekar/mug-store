import React, { Component } from "react";
import {  Navigate,Link } from "react-router-dom";
import axios from "axios";
import LinkInClass from "../components/LinkInClass";
import { SERVER_HOST } from "../config/global_constants";
import Form from "react-bootstrap/Form";


export default class AddMug extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image: "",
      price:0,
      count:0,
      total:0,
      inCart:false,
      material:"",
      capacity:0,
      color:"",
      allColor:[
            "blue",
            "green",
            "red",
            "yellow",
            "pink",
            "black",
            "brown",
            "white",
            "grey"
                ],
      allMaterial:[
            "heat resistant",
            "non heat resistant"
      ],
      redirectToProductList: false,
      wasSubmittedAtLeastOnce: false,
    };
  }

  componentDidMount() {
    this.inputToFocus.focus();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


  /*handleColorChange = (e) => {
    const color = e.target.nextSibling.textContent;
    const isChecked = e.target.checked;

    if (isChecked) {
      this.setState((prevState) => ({
        color: [...prevState.color, color],
      }));
    } else {
      const newColor = this.state.color.filter((g) => g !== color);
      this.setState({ color: newColor });
    }

    console.log(this.state.color);
  };*/

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ wasSubmittedAtLeastOnce: true });

    const formInputsState = this.validate();

    if (Object.keys(formInputsState).every((index) => formInputsState[index])) {
      const mugObject = {
        title: this.state.title,
        image:this.state.image,
        price:this.state.price,
        count:this.state.count,
        total:this.state.total,
        inCart:this.state.inCart,
        material:this.state.material,
        capacity:this.state.capacity,
        color:this.state.color,
        wasSubmittedAtLeastOnce: false, 
      };

      axios.post(`${SERVER_HOST}/store`, mugObject).then((res) => {
        if (res.data) {
          if (res.data.errorMessage) {
            console.log(res.data.errorMessage);
          } else {
            console.log("Record added");
            this.setState({ redirectToProductList: true });
          }
        } else {
          console.log("Record not added");
        }
      });
    }
  };
 

  render() {
  
    let errorMessage = "";
    if (this.state.wasSubmittedAtLeastOnce) {
      errorMessage = (
        <div className="error">
          Mug Details are incorrect
          <br />
        </div>
      );
    }



    return (


      <div>
      
      {this.state.redirectToProductList ? <Navigate to="/ProductList"/> : null} 


        <Form>
          <Form.Group controlId="title">
            <Form.Label className="add-in">Title</Form.Label>
            <Form.Control
              ref={(input) => {
                this.inputToFocus = input;
              }}
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label className="add-in">Price</Form.Label>
            <Form.Control
              ref={(input) => {
                this.inputToFocus = input;
              }}
              type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="count">
            <Form.Label className="add-in">Count</Form.Label>
            <Form.Control
              ref={(input) => {
                this.inputToFocus = input;
              }}
              type="text"
              name="count"
              value={this.state.count}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="color">
            <Form.Label className="add-in">Color</Form.Label>
            <Form.Control
              type="text"
              name="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </Form.Group>

          <LinkInClass
            value="Add"
            className="in-card-button-add"
            onClick={this.handleSubmit}
          />

          <Link className="in-card-button-cancel" to={"/ProductList"}>
            Cancel
          </Link>
        </Form>
      </div>
    );
  }
}
