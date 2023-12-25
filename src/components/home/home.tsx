import './home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import herb from '/herb.svg';
import best from '/best.svg';
import herbal from '/herbal.svg';
import handmade from '/handmade.svg';
import fruits from '/fruits.svg';
import honey from '/honey.svg';
import sandwich from '/sandwich.svg';
import ShopItem from '../shop/shopitem';

function Home({ goods, addLike, addItem, likedItems }) {
  const [ itemFilter, setItemFilter ] = useState<string | null>(null);
  const [ rendered, setRendered ] = useState(goods.slice(0, 6));

  function handleFilter(e): void {
    setItemFilter(e.currentTarget.id);
    e.currentTarget.classList.add('home__filter_active');
    e.currentTarget.children[0].checked = true;
  }

  useEffect(()=> {
    let x = 6;
    const animationInterval = setInterval(()=> {
      if (x >= goods.length) { 
        x = 0;
      }       
      setRendered(goods.slice(x, x+6))   
      x += 6;
  }, 10000) 
    if(itemFilter) {
      clearInterval(animationInterval)
    }
  return ()=> clearInterval(animationInterval)
  }, [ itemFilter ])

  return (
    <div className="home">
      <div className="home__main">
        <p className="home__subtitle">
          <img src={herb} />
          100% Свежие продукты
          </p>
        <h1 className="home__title">Вкусная & Здоровая Еда</h1>
        <div className="home__buttons">        
          <Link to='/shop' className="home__products">Список товаров &rarr;</Link>          
          <Link to="/about" className="home__about">О магазине &rarr;</Link>         
        </div>      
      </div>   
      <fieldset className="home__filters">
        <label className="home__filter" id="drink" onClick={handleFilter}>
          <input type="radio" name="filters" className='home__radio'/>     
          <img src={best} alt="" className='home__filter-img'/>     
          Напитки
        </label>
        <label className="home__filter" id='herbal' onClick={handleFilter}>
          <input type="radio" name="filters" className='home__radio'/>     
          <img src={herbal} alt="" className='home__filter-img'/>     
          Травяной чай
        </label>
        <label className="home__filter" id="sauce" onClick={handleFilter}>
          <input type="radio"  name="filters"  className='home__radio'/>     
          <img src={handmade} alt="" className='home__filter-img'/>     
          Соусы
        </label>
        <label className="home__filter" id="fruits" onClick={handleFilter}>
          <input type="radio"  name="filters"  className='home__radio'/>     
          <img src={fruits} alt="" className='home__filter-img'/>     
          Фрукты и овощи
        </label>
        <label className="home__filter" id="honey" onClick={handleFilter}>
          <input type="radio"  name="filters"  className='home__radio'/>     
          <img src={honey} alt="" className='home__filter-img'/>     
          Мед
        </label>
        <label className="home__filter" id="fastfood" onClick={handleFilter}>
          <input type="radio"  name="filters" className='home__radio'/>     
          <img src={sandwich} alt="" className='home__filter-img'/>     
          Перекус
        </label>        
      </fieldset> 
      <section className="home__grid">        
        <div className={`carousel ${!itemFilter && 'carousel_animated'}`}>                     
          {itemFilter ? 
            goods.filter(good => good.type === itemFilter).map((good, i)=> (
            <ShopItem 
              key={i}             
              view='grid'       
              good={good}
              addItem={addItem}
              addLike={addLike}
              liked={likedItems.map(elem => elem.name).indexOf(good.name)}
              />
            )) :
            rendered.map((good,i)=> (
              <ShopItem
              key={i}
              view='grid'       
              good={good}
              addItem={addItem}
              addLike={addLike}
              liked={likedItems.map(elem => elem.name).indexOf(good.name)}/>
            ))}             
        </div>        
      </section>  
    </div>
  )
}

export default Home;