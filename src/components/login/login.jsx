import './login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <form className="login">
      <h2 className="login__title">Login</h2>
      <input type="text" className="login__input" placeholder='Email Address'/>
      <input type="text" className="login__input" placeholder='Password'/>
      <button className="login__forgot">Forgot your password?</button>
      <button type="submit" className='login__submit'>Sign In</button>
      <p 
        className="login__create">
        Dont have an account? 
        <Link to="/register" className='login__create-link'>Create account</Link> 
      </p>
    </form>
  )
}

export default Login;