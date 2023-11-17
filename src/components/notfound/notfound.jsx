import './notfound.css'
import { Link } from 'react-router-dom';
function NotFound() {
  
  return(
    <section className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__oops">oops! The page you requested was not found!</p>
      <Link to='/' className='notfound__back'>Back to Home</Link>
    </section>
  )
}

export default NotFound;