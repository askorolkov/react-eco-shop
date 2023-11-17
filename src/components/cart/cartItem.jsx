import './cartItem.css';
import React from 'react';
function CartItem(props) {
  const [amount, setAmount] = React.useState(props.amount)

  function handleIncreaseAmount() {
    setAmount((amount) => amount + 1)    
    props.addQuantity(props.name, amount + 1)
    props.handleAmount(props.totalAmount + 1)
  }

  function handleReduceAmount() {
    setAmount((amount) => amount - 1)    
    props.addQuantity(props.name, amount - 1)
    props.handleAmount(props.totalAmount - 1)
  }

  return(
    <div className="cartitem">
      <img src={props.image} alt="" className="cartitem__img" />
      <div className="cartitem__name">
        <p className="cartitem__header">{props.name}</p>
        <p className="cartitem__info">Quantity: {amount} pcs</p>
      </div>
      <p className="cartitem__price">{props.price}$</p>
      <div className="cartitem__quantity">
        <button className="cartitem__button" onClick={handleReduceAmount}>-</button>
        <p className="cartitem__quantity-amount">{amount}</p>
        <button className="cartitem__button" onClick={handleIncreaseAmount}>+</button>
      </div>
      <p className="cartitem__total">{amount * props.price}$</p>
    </div>
  )
}

export default CartItem;