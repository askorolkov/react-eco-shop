import './home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import herb from '../../images/herb.svg';
import best from '../../images/best.svg';
import herbal from '../../images/herbal.svg';
import handmade from '../../images/handmade.svg';
import fruits from '../../images/fruits.svg';
import honey from '../../images/honey.svg';
import sandwich from '../../images/sandwich.svg';
import ShopItem from '../shop/shopitem';

function Home(props) {
  const [ itemFilter, setItemFilter ] = React.useState<string | null>(null);
  const [ rend, setRend ] = React.useState(props.goods.slice(0, 6));

  function handleFilter(e): void {
    setItemFilter(e.currentTarget.children[0].id);
    e.currentTarget.classList.add('home__filter_active');
    e.currentTarget.children[0].checked = true;
  }

  React.useEffect(()=> {
    let x = 6;
    const animationInterval = setInterval(()=> {
      if (x >= props.goods.length) { 
        x = 0;
      }       
      setRend(props.goods.slice(x, x+6))   
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
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id="drinks" name="filters" className='home__radio'/>     
          <img src={best} alt="" className='home__filter-img'/>     
          Напитки
        </label>
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id='herbal' name="filters" className='home__radio'/>     
          <img src={herbal} alt="" className='home__filter-img'/>     
          Травяной чай
        </label>
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id="sauce" name="filters"  className='home__radio'/>     
          <img src={handmade} alt="" className='home__filter-img'/>     
          Соусы
        </label>
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id="fruits" name="filters"  className='home__radio'/>     
          <img src={fruits} alt="" className='home__filter-img'/>     
          Фрукты и овощи
        </label>
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id="honey" name="filters"  className='home__radio'/>     
          <img src={honey} alt="" className='home__filter-img'/>     
          Мед
        </label>
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id="fastfood" name="filters" className='home__radio'/>     
          <img src={sandwich} alt="" className='home__filter-img'/>     
          Перекус
        </label>        
      </fieldset> 
      <section className="home__grid">        
        <div className={`carousel ${!itemFilter && 'carousel_animated'}`}>                     
          {itemFilter ? 
            props.goods.filter(good => good.type === itemFilter).map((good, i)=> (
            <ShopItem 
              key={i}             
              view='grid'       
              good={good}
              addItem={props.addItem}
              addLike={props.addLike}
              liked={props.likedItems.map(elem => elem.name).indexOf(good.name)}
              />
            )) :
            rend.map((good,i)=> (
              <ShopItem
              key={i}
              view='grid'       
              good={good}
              addItem={props.addItem}
              addLike={props.addLike}
              liked={props.likedItems.map(elem => elem.name).indexOf(good.name)}/>
            ))}             
        </div>        
      </section>  
    </div>
  )
}

export default Home;