import React from 'react'


function CartItem({name, priceInCents, quantity}) {
  return (
    <div class="collection-item">
      <div class="row">
        <div class="col-md-8">{name}</div>
        <div class="col-md-2">${(priceInCents / 100)}</div>
        <div class="col-md-2">{quantity}</div>
  </div>
</div>
  )
}

export default CartItem