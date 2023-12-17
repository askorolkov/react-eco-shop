
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
import { goodsPerPage, 
         goodsSortBy, 
         goods,         
         viewType,
         IShopProduct,
         ICartProduct,
         TSortBy,
         TPerPage,
        } from './utils/constants';
import { userCartContext } from './context/UserCartContext';


export interface IShopView {
  viewType: 'grid' | 'list',
  sortBy: TSortBy,
  perPage: TPerPage,
}

function App() {
  const [myCart, setMyCart] = React.useState<ICartProduct[]>([]);
  const [likedItems, setLikedItems] = React.useState<IShopProduct[]>([]);
  const [shopView, setShopView] = React.useState<IShopView>({
    viewType: viewType, 
    sortBy: goodsSortBy,
    perPage: goodsPerPage
  });
  
  //добавляет элемент в корзину при нажатии кнопки корзины на товаре на странице shop
  function handleAddItem(item: ICartProduct): void {    
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
  function handleChangeQuantity(itemName: string, amount: number): void {  
    if(amount === 0) {
      setMyCart(myCart.filter((item) => item.name!==itemName))      
    } else {
      setMyCart(myCart.map((item) => (item.name === itemName ? {...item, quantity:amount} : item)))       
    }             
  }

  //поставить лайк товару
  function handleItemLike(item: IShopProduct): void {
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
      <userCartContext.Provider value={myCart}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home 
          goods={goods}
          addLike={handleItemLike}
          addItem={handleAddItem}
          likedItems={likedItems}
          />} 
        />
        <Route 
          path="shop" 
          element={<Shop 
          goods={goods}
          addItem={handleAddItem}
          view={shopView}
          setView={setShopView}
          addLike={handleItemLike}
          likedItems={likedItems}
          />} 
        />
        <Route 
          path="cart"
          element={<Cart 
          // items={myCart}
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
      </userCartContext.Provider>
    </>
  )
}

export default App
