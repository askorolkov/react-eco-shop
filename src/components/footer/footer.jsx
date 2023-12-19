import './footer.css';
import { Link } from 'react-router-dom';
import logo from '../../images/cart.svg';
import location from '../../images/location.svg';
import socials01 from '../../images/socials01.svg';
import socials02 from '../../images/socials02.svg';
import socials03 from '../../images/socials03.svg';
import socials04 from '../../images/socials04.svg';
import footer1 from '../../images/footer1.svg';
import footer2 from '../../images/footer2.svg';
import footer3 from '../../images/footer3.svg';
import shopicon1 from '../../images/shopicon1.svg';
import shopicon2 from '../../images/shopicon2.svg';
import shopicon3 from '../../images/shopicon3.svg';
import shopicon4 from '../../images/shopicon4.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="shop__info">
        <ul className='shop__info-list'>
          <li className="shop__info-item">
            <img src={shopicon1} alt="" className="shop__info-icon" />
            <p className="shop__info-text">Проверенные товары</p>
            <p className="shop__info-subtext">От проверенных поставщиков</p>
          </li>
          <li className="shop__info-item">
            <img src={shopicon2} alt="" className="shop__info-icon" />
            <p className="shop__info-text">Собраны в ручную</p>
            <p className="shop__info-subtext">От проверенных поставщиков</p>
          </li>
          <li className="shop__info-item">
            <img src={shopicon3} alt="" className="shop__info-icon" />
            <p className="shop__info-text">100% Натуральные</p>
            <p className="shop__info-subtext">От проверенных поставщиков</p>
          </li>
          <li className="shop__info-item">
            <img src={shopicon4} alt="" className="shop__info-icon" />
            <p className="shop__info-text">С доставкой</p>
            <p className="shop__info-subtext">От проверенных поставщиков</p>
          </li>
        </ul>
      </div>
      <div className="footer__about">
        <h3 className="footer__title">О нас</h3>
        <p className="footer__text">Интернет-магазин полезного питания</p>
        <div className="footer__about-socials">
          <img src={socials01} alt="" className='footer__about-icon'/>
          <img src={socials02} alt="" className='footer__about-icon'/>
          <img src={socials03} alt="" className='footer__about-icon'/>
          <img src={socials04} alt="" className='footer__about-icon'/>
        </div>
      </div>
      <div className="footer__useful">
        <h3 className="footer__title">Полезное</h3>
        <nav className="footer__navi">
          <ul className="footer__list">
            <li className="footer__link">
              <Link to="about" className='link'>О нас</Link>
            </li>          
            <li className="footer__link">Новости</li>          
            <li className="footer__link">Партнеры</li>          
            {/* <li className="footer__link">Room Details</li>           */}
            <li className="footer__link">Галерея</li>          
            <li className="footer__link">Контакты</li>
          </ul>
        </nav>
      </div>
      <div className="footer__help">
        <h3 className="footer__title">Инфо</h3>
        <nav className="footer__navi">
          <ul className="footer__list">
            <li className="footer__link">FAQ</li>                  
            <li className="footer__link">Отчеты</li>          
            <li className="footer__link">Документация</li>          
            <li className="footer__link">Правила</li>         
            <li className="footer__link">Безопасность</li>
          </ul>
        </nav>
      </div>
      <div className="footer__info">
        <div className="footer__info-logo">
          <img src={logo} alt="" className='footer__logo'/>
          <h3 className="footer__title">Ecomax</h3>
        </div>
        <p className="footer__text">
          We are a team of designers and developers
        create high quality Magento, Prestashop, 
        </p>
        <div className="footer__info-logo">
          <img src={location} alt="" className='footer__logo'/>
          <p className="footer__text">254 Lillian Blvd, Holbrook</p>
        </div>        
      </div>
      <img src={footer1} alt="" className='footer__bg-img bg-1'/>
      <img src={footer2} alt="" className='footer__bg-img bg-2'/>
      <img src={footer3} alt="" className='footer__bg-img bg-3'/>
    </footer>
  )
}

export default Footer;