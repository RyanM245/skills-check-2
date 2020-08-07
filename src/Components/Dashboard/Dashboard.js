import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
constructor(props){
    super(props)
    this.state={}
}


    render(){
        const mappedProducts = this.props.products.map((el,i)=>{
           return  <Product data={el} key = {i} 
           
           />
          
            
        })
        return (
            <div>
                <h1> Dashboard Component</h1>
                {mappedProducts}
            </div>
        )
    }
}

export default Dashboard