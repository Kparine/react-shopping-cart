import React , { Component } from 'react'


class AddItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      quantity: 0,
      product: ''
    }
  }

handleSubmit = (e) => {
  e.preventDefault()
  this.props.addItemToCart(this.state.product, Number(this.state.quantity))
}
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}
render() {
  return (
    <div className="container">
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
        </div>
        <div className="row">
          <label htmlFor="products">Products</label>
          <select className="custom-select custom-select-lg mb-3" id="products" name="product" onChange={this.handleChange} value={this.state.product}>
            <option>Choose Products</option>
              {this.props.products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)}
          </select>
        </div>
          <div className="row">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
      </form> 
    </div>
  )


}


}

export default AddItem
