import './home.css';
import { Link } from 'react-router-dom';
import herb from '../../images/herb.svg';
import best from '../../images/best.svg';
import herbal from '../../images/herbal.svg';
import handmade from '../../images/handmade.svg';
import fruits from '../../images/fruits.svg';
import honey from '../../images/honey.svg';
import sandwich from '../../images/sandwich.svg';

function Home() {
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
      <div className="home__filters">
        <button className="home__filter">     
          <img src={best} alt="" className='home__filter-img'/>     
          Drinks
        </button>
        <button className="home__filter">     
          <img src={herbal} alt="" className='home__filter-img'/>     
          Herbal tea
        </button>
        <button className="home__filter">     
          <img src={handmade} alt="" className='home__filter-img'/>     
          Sauce
        </button>
        <button className="home__filter">     
          <img src={fruits} alt="" className='home__filter-img'/>     
          Fruits & vegies
        </button>
        <button className="home__filter">     
          <img src={honey} alt="" className='home__filter-img'/>     
          Honey jars
        </button>
        <button className="home__filter">     
          <img src={sandwich} alt="" className='home__filter-img'/>     
          Fast foods
        </button>        
      </div>   
    </div>
  )
}

export default Home;