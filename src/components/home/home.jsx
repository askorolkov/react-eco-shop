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
import ShopItem from '../shop/ShopItem';

function Home(props) {

  const [ itemFilter, setItemFilter ] = React.useState(null);

  function handleFilter(e) {
    setItemFilter(e.currentTarget.children[0].id)
    e.currentTarget.classList.add('home__filter_active')
    e.currentTarget.children[0].checked = true
    console.log(e.currentTarget.children[0].id)
  }

  console.log(itemFilter)

  return (
    <div className="home">
      <div className="home__main">
        <p className="home__subtitle">
          <img src={herb} />
          100% Genuine Products
          </p>
        <h1 className="home__title">Tasty & Healthy Organic Food</h1>
        <div className="home__buttons">        
          <Link to='/shop' className="home__products">View Products &rarr;</Link>          
          <Link to="/about" className="home__about">About Shop &rarr;</Link>         
        </div>      
      </div>   
      <fieldset className="home__filters">
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id="drinks" name="filters" className='home__radio'/>     
          <img src={best} alt="" className='home__filter-img'/>     
          Drinks
        </label>
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id='herbal' name="filters" className='home__radio'/>     
          <img src={herbal} alt="" className='home__filter-img'/>     
          Herbal tea
        </label>
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id="sauce" name="filters"  className='home__radio'/>     
          <img src={handmade} alt="" className='home__filter-img'/>     
          Sauce
        </label>
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id="fruits" name="filters"  className='home__radio'/>     
          <img src={fruits} alt="" className='home__filter-img'/>     
          Fruits & vegies
        </label>
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id="honey" name="filters"  className='home__radio'/>     
          <img src={honey} alt="" className='home__filter-img'/>     
          Honey jars
        </label>
        <label className="home__filter"  onClick={handleFilter}>
          <input type="radio" id="fastfood" name="filters" className='home__radio'/>     
          <img src={sandwich} alt="" className='home__filter-img'/>     
          Fast foods
        </label>        
      </fieldset> 
      <section className="home__grid">
        {
        itemFilter ? 
        props.goods.filter(good => good.type === itemFilter).map((good, i)=> (
          <ShopItem 
            key={i}             
            view='grid'       
            good={good}
            addItem={props.addItem}
            addLike={props.addLike}/>
        )) :
        props.goods.map((good, i)=> (
          <ShopItem 
            key={i}             
            view='grid'       
            good={good}
            addItem={props.addItem}
            addLike={props.addLike}/>
        ))        
        }
      </section>  
    </div>
  )
}

export default Home;