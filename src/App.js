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
      products: [],
      
    };
    this.getAll = this.getAll.bind(this);
    
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
    const { products,selected } = this.state;
    return (
      <div className="App">
        <Header />
        <Form getAll={this.getAll}  />
        <Dashboard products={products} getAll={this.getAll} />
      </div>
    );
  }
}

export default App;
