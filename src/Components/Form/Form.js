import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super()
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
                <button>Add</button>
            </div>
        )
    }
}

export default Form