import './cartItem.css';

function CartItem(props) {
  return(
    <div className="cartitem">
      <img src={props.image} alt="" className="cartitem__img" />
      <div className="cartitem__name">
        <p className="cartitem__header">{props.name}</p>
        <p className="cartitem__info">Количество: {props.amount} шт.</p>
      </div>
      <p className="cartitem__price">{props.price} &#8381;</p>
      <div className="cartitem__quantity">
        <button className="cartitem__button" onClick={()=> props.handleReduceAmount(props.name, props.amount)}>-</button>
        <p className="cartitem__quantity-amount">{props.amount}</p>
        <button className="cartitem__button" onClick={()=> props.handleIncreaseAmount(props.name, props.amount)}>+</button>
      </div>
      <p className="cartitem__total">{props.amount * props.price} &#8381;</p>
    </div>
  )
}

export default CartItem;