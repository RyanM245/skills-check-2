import React, {Component} from 'react'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div>
                <h1>Name: {this.props.data.name} </h1>
                <h1>Price: ${this.props.data.price} </h1>
                <img src= {this.props.data.img} alt=""/>
                <button
                onClick = {()=> {
                    this.props.deleteProduct(this.props.data.id)
                }}
                >Delete</button>
                <button>Edit</button>
            </div>
        )
    }
}

export default Product