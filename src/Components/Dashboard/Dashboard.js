import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", price: 0, img: "" };
    this.deleteProduct= this.deleteProduct.bind(this)
  }

  deleteProduct = (id) => {
    axios
      .delete(`/api/product/${id}`)
      .then((res) => {
        this.setState({
          name: res.data,
          price: res.data,
          img: res.data,
        });
        this.props.getAll();
      })
      .catch((err) => console.log(err));
  };

  render() {
    const mappedProducts = this.props.products.map((el, i) => {
      return <Product data={el} key={i} deleteProduct={this.deleteProduct} />;
    });
    return (
      <div>
        <h1> Dashboard Component</h1>
        {mappedProducts}
      </div>
    );
  }
}

export default Dashboard;
