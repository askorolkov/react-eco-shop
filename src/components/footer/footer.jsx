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
            <p className="shop__info-text">Curated Products</p>
            <p className="shop__info-subtext">From handpicked sellers</p>
          </li>
          <li className="shop__info-item">
            <img src={shopicon2} alt="" className="shop__info-icon" />
            <p className="shop__info-text">Handmade</p>
            <p className="shop__info-subtext">From handpicked sellers</p>
          </li>
          <li className="shop__info-item">
            <img src={shopicon3} alt="" className="shop__info-icon" />
            <p className="shop__info-text">100% Natural</p>
            <p className="shop__info-subtext">From handpicked sellers</p>
          </li>
          <li className="shop__info-item">
            <img src={shopicon4} alt="" className="shop__info-icon" />
            <p className="shop__info-text">Shipping</p>
            <p className="shop__info-subtext">From handpicked sellers</p>
          </li>
        </ul>
      </div>
      <div className="footer__about">
        <h3 className="footer__title">About Us</h3>
        <p className="footer__text">Corporate clients and leisure travelers has been relying on Groundlink for dependable safe,
         and professional chauffeured car service in major cities across World. Indeed it has been more than one decade and five
        years that Groundlink</p>
        <div className="footer__about-socials">
          <img src={socials01} alt="" className='footer__about-icon'/>
          <img src={socials02} alt="" className='footer__about-icon'/>
          <img src={socials03} alt="" className='footer__about-icon'/>
          <img src={socials04} alt="" className='footer__about-icon'/>
        </div>
      </div>
      <div className="footer__useful">
        <h3 className="footer__title">Useful links</h3>
        <nav className="footer__navi">
          <ul className="footer__list">
            <li className="footer__link">
              <Link to="about" className='link'>About</Link>
            </li>          
            <li className="footer__link">News</li>          
            <li className="footer__link">Partners</li>          
            <li className="footer__link">Room Details</li>          
            <li className="footer__link">Gallery</li>          
            <li className="footer__link">Contacts</li>
          </ul>
        </nav>
      </div>
      <div className="footer__help">
        <h3 className="footer__title">Help?</h3>
        <nav className="footer__navi">
          <ul className="footer__list">
            <li className="footer__link">FAQ</li>          
            <li className="footer__link">Terms & conditions</li>          
            <li className="footer__link">Reporting</li>          
            <li className="footer__link">Documentation</li>          
            <li className="footer__link">Support Policy</li>         
            <li className="footer__link">Privacy</li>
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