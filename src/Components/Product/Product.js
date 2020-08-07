import React, {Component} from 'react'

class Product extends Component {
    render(){
        return (
            <div>
                <h1>Name: {this.props.data.name} </h1>
                <h1>Price: ${this.props.data.price} </h1>
                <img src= {this.props.data.img} alt=""/>
            </div>
        )
    }
}

export default Product