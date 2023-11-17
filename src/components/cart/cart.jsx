import './cart.css';
import CartItem from './cartItem';
import React from 'react';
function Cart(props) {
  function handleClear() {
    document.querySelector('.cart__items').replaceChildren();
  }
    

  console.log(props.items)
  const totalPrice = props.items.reduce((acc, val) => acc + (val.price * val.quantity), 0);
  // const totalAmount = props.items.reduce((acc, val)=> acc + val.quantity, 0);

  //костыльный стейт чтобы элемент перерисовывался при изменении количества товара
  //т.к блок total не обновлял общее количество товаров при изменении колва одного товара
  const [totalAmount, setTotalAmount] = React.useState(props.items.reduce((acc, val)=> acc + val.quantity, 0))

  function handleAmount(amount) {
    setTotalAmount(amount)
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
              addQuantity={props.addQuantity}
              totalAmount={totalAmount}
              handleAmount={handleAmount}
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
          <button className="cart__footer-clear" onClick={handleClear}>Clear cart</button>
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
    </div>
      

  )
}

export default Cart;