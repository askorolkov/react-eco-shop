import './cartItem.css';
function CartItem(props) {
  
  function handleIncreaseAmount() {     
    props.addQuantity(props.name, props.amount + 1)    
  }

  function handleReduceAmount() { 
    console.log(props.amount)
    if (props.amount - 1 === 0)  {
      props.setShowPopup(true)
    } else {
      props.addQuantity(props.name, props.amount - 1)  
    }
  }

  return(
    <div className="cartitem">
      <img src={props.image} alt="" className="cartitem__img" />
      <div className="cartitem__name">
        <p className="cartitem__header">{props.name}</p>
        <p className="cartitem__info">Quantity: {props.amount} pcs</p>
      </div>
      <p className="cartitem__price">{props.price}$</p>
      <div className="cartitem__quantity">
        <button className="cartitem__button" onClick={handleReduceAmount}>-</button>
        <p className="cartitem__quantity-amount">{props.amount}</p>
        <button className="cartitem__button" onClick={handleIncreaseAmount}>+</button>
      </div>
      <p className="cartitem__total">{props.amount * props.price}$</p>
    </div>
  )
}

export default CartItem;