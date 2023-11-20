import './cart.css';
import React from 'react';
import CartItem from './cartItem';

function Cart(props) {

  const [popup, setPopup] = React.useState({
    show: false, 
    name: null,
    amount: null,
  });

  const totalPrice = props.items.length > 0 ? props.items.reduce((acc, val) => acc + (val.price * val.quantity), 0) : 0;
  const totalAmount = props.items.length > 0 ? props.items.reduce((acc, val)=> acc + val.quantity, 0) : 0;
  console.log(props.items)

  function handleCartClear() {
    props.setCart([])
  } 

  function handleCancel() {
    setPopup({
      ...popup,
      show: false
    })
  }

  function handleDelete() {
    props.addQuantity(popup.name, popup.amount - 1)
    setPopup({
      ...popup,
      show: false
    })
  }

  function handleIncreaseAmount(name, amount) {     
    props.addQuantity(name, amount + 1)    
  }

  function handleReduceAmount(name, amount) {
    if (amount - 1 === 0)  {
      setPopup({
        show: true, 
        name: name,
        amount: amount,
      })
    } else {
      props.addQuantity(name, amount - 1)  
    }
  } 

  return(
    <div className="cart">
      <div className="cart__main">
        <div className="cart__header">
          <p className="cart__header-title">Product</p>
          <p className="cart__header-title">Price</p>
          <p className="cart__header-title">Quantity</p>
          <p className="cart__header-title">Total</p>
        </div>
        <section className="cart__items">
          {props.items.map((item, i) => (            
            <CartItem 
              key={i}
              name={item.name}
              price={item.price}
              image={item.src}
              amount={item.quantity}
              handleReduceAmount={handleReduceAmount}        
              handleIncreaseAmount={handleIncreaseAmount}        
            />
          ))
          }
        </section>
        <div className="cart__footer">       
          <label htmlFor="" className="cart__footer-promo">
            Add promo code
            <input type="text" className="cart__footer-input" />
            <button className="cart__footer-apply">APPLY</button>
          </label>
          <button className="cart__footer-clear" onClick={handleCartClear}>Clear cart</button>
        </div>
      </div>
      <div className="cart__sidebar">
        <p className="cart__header-title">Cart Totals</p>
        <div className="cart__sidebar-info">
          <p className="cart__sidebar-amount">Total amount: {totalAmount} products</p>
          <p className="cart__sidebar-amount">Total price: {totalPrice}$</p>
          <button className="cart__sidebar-checkout">Checkout</button>
        </div>
      </div>
      <div className={`cart__popup ${popup.show && 'cart__popup_visible'}`}>
        <div className="cart__popup-container">
          <h2 className="cart__popup-title">Товар будет удален из корзины. <br />Продолжить?</h2>
          <div className="cart__popup-buttons">
            <button className="cart__popup-button" onClick={handleDelete}>Да</button>  
            <button className="cart__popup-button" onClick={handleCancel}>Отмена</button>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Cart;