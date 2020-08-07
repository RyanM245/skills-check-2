import React, { Component } from "react";

import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          name: "",
          price: 0,
          img: "",
        },
      ],
    };
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    axios.get("/api/inventory").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard products={products} />
      </div>
    );
  }
}

export default App;
