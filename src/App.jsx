
import React from 'react';
import Header from './components/header/header'
import Shop from './components/shop/shop';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Home from './components/home/home';
import NotFound from './components/notfound/notfound';
import Login from './components/login/login';
import Register from './components/register/register';
import Cart from './components/cart/cart';
import Profile from './components/profile/profile';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { goodsPerPage, goodsSortBy, goods } from './utils/constants';
function App() {
  const [myCart, setMyCart] = React.useState([]);
  const [likedItems, setLikedItems] = React.useState([]);
  const [shopView, setShopView] = React.useState({
    viewType:'grid', 
    sortBy: goodsSortBy,
    perPage: goodsPerPage
  });

  // const [goodsAmount, setGoodsAmount] = React.useState(goodsPerPage);
  
  //добавляет элемент в корзину при нажатии кнопки корзины на товаре на странице shop
  function handleAddItem(item) {    
    const el = myCart.map(elem => elem.name).indexOf(item.name)
    console.log(el)
    console.log(item)
    if (el==-1) {
      setMyCart([...myCart, item])
    } else {
      myCart[el].quantity += 1;
    }
  }

  //изменяет количество товара в корзине при нажатии + или - на товаре на странице cart
  //ищет товар в корзине по имени и задает количество равное amount
  function handleChangeQuantity(itemName, amount) {  
    if(amount === 0) {
      setMyCart(myCart.filter((item) => item.name!==itemName))      
    } else {
      setMyCart(myCart.map((item) => (item.name === itemName ? {...item, quantity:amount} : item)))       
    }             
  }

  function handleItemLike(item) {
    const el = likedItems.map(elem => elem.name).indexOf(item.name)
    console.log(el)
    if (el===-1) {
      setLikedItems([...likedItems, item])
    } else {
      setLikedItems(likedItems.filter(el=> el.name !== item.name))      
    }    
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />} 
        />
        <Route 
          path="shop" 
          element={<Shop 
          // amount={goodsAmount}
          // setAmount={setGoodsAmount}
          // sortBy={goodsSortBy}
          goods={goods}
          addItem={handleAddItem}
          view={shopView}
          setView={setShopView}
          addLike={handleItemLike}
          />} 
        />
        <Route 
          path="cart"
          element={<Cart 
          items={myCart}
          addQuantity={handleChangeQuantity}
          setCart={setMyCart}
          />}
        />
        <Route  
          path="profile"
          element={<Profile 
          likedItems={likedItems}
          />}
        />
        <Route  
          path="about"
          element={<About />} 
        />
        <Route
          path="login"
          element={<Login />}
        />        
        <Route 
          path='register'
          element={<Register />}
        />
        <Route 
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
