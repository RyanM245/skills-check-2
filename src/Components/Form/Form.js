import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
           name: '',
           price: 0,
           img: '' 
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      createProduct=(name,price,img) => {
          axios.post('/api/product', {name,price,img})
          .then(res => {
              this.setState({
                  name: res.data,
                  price: res.data,
                  img: res.data
              })
              this.props.getAll()
          }).catch(err => console.log(err))
      }

    render(){
        const {name,price,img}= this.state
        return (
            <div>
                <input
                onChange={(e) => this.handleChange(e)}
                name = 'name'
                placeholder = '...name'
                value = {name}
                type = 'text'

                />
                <input
                onChange={(e) => this.handleChange(e)}
                name = 'price'
                placeholder = '...price'
                value = {price}
                type = 'text'

                />
                <input
                onChange={(e) => this.handleChange(e)}
                name = 'img'
                placeholder = '...img'
                value = {img}
                type = 'text'

                />
                <button
                onClick={(e) => {
                    this.setState({name: '', price: 0, img: ''})
                }}
                >Cancel</button>
                <button
                onClick={(e)=> {
                    e.preventDefault()
                    this.createProduct(name,price,img)
                    this.setState({name: '', price: 0, img: ''})
                }}
                >Add</button>
            </div>
        )
    }
}

export default Form