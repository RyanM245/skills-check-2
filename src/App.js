import React, { Component } from "react";

import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";

class App extends Component {
  constructor() {
    super()
    this.state = {
    products: [ { name: 'Shoes',
      price: 80,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCOJUTsm6doCOO569RL5wTz3Vz692xIKwMpQ&usqp=CAU'
    },
    {
    name: 'Socks',
    price: 10,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR84cZTShHoxc5rsQfx1GW0I-LTrF2SqlJn0w&usqp=CAU'
    }
  ]
  }
  }


  render() {
    const {products} = this.state
    return (
      <div className="App">
        <Header />
        <Form />
        <Dashboard
         products={products} 
         />
      </div>
    );
  }
}

export default App;
