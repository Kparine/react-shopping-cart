import React, { Component } from 'react'

class PurchaseAmount extends Component {
  constructor(props) {
    super(props)
  }

  TotalPrice = () => Number.parseFloat(this.props.cartItemsList.reduce((acc, current) => acc + current.product.priceInCents * current.quantity, 0)/100).toFixed(2)

render() {
  return (
    <div className="container">
      <p>Total Price: ${this.TotalPrice()}</p>
    </div>
  )
}
}
export default PurchaseAmount