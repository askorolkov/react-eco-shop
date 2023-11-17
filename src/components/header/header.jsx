import './header.css'
import { Link } from 'react-router-dom';
import phone from '../../images/phone.svg';
import mail from '../../images/mail.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import instagram from '../../images/instagram.svg';
import brit from '../../images/brit.svg';
import cart from '../../images/cart.svg';


function Header() {
  return (
    <header className="header">
      <div className="header__upper">
        <div className="header__contacts">
          <img src={phone} />
          <p className="header__contact">+1 800 833 9780</p>          
          <img src={mail} />
          <p className="header__contact">info@example.com</p>
        </div>
        <div className="header__socials">
          <img src={facebook} className="header__pic"/>
          <img src={twitter} className="header__pic"/>
          <img src={instagram} className="header__pic"/>
          <img src={brit} className="header__pic" />
          <p className="header__lang">EN</p>
        </div>
      </div>
      <div className="header__lower">
        <Link to='/' className="header__main">
          <img src={cart} className="" />
          <p className="header__title">Ecomax</p>
        </Link>
        <nav className="header__navi">
          <ul className="header__links">
            <li>
              <Link to='' className='header__link'>Home</Link>
            </li>
            <li>
              <Link to='/shop' className='header__link'>Shop</Link>
            </li>
            <li>
              <Link to='' className='header__link'>Pages</Link>
            </li>
            <li>
              <Link to='' className='header__link'>Blog</Link>
            </li>
            <li>
              <Link to='' className='header__link'>Contact</Link>
            </li>
            <li className='header__profile'>
              <Link to='/profile' className='header__link'></Link>
            </li>
            <li className='header__cart'>
              <Link to='/cart' className='header__link'></Link>
            </li>
            <li>
              <button className="header__button">GET A QUATE</button>
            </li>
          </ul>

        </nav>
        {/* <Routes>
          <Route path="" element={<Link to='' className='header__link'>Home</Link>}></Route>
          <Route path="" element={<Link to='' className='header__link'>Shop</Link>}></Route>
          <Route path="" element={<Link to='' className='header__link'>Pages</Link>}></Route>
          <Route path="" element={<Link to='' className='header__link'>Blog</Link>}></Route>
          <Route path="" element={<Link to='' className='header__link'>Contact</Link>}></Route>
          <Route path="" element={<Link to='' className='header__link'>Profile</Link>}></Route>
          <Route path="" element={<Link to='' className='header__link'>Cart</Link>}></Route>          
        </Routes>   */}

      </div>
    </header>
  )
}

export default Header;