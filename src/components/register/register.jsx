import '../login/login.css'

function Register() {
  return (
    <form className="login">
      <h2 className="login__title">Register</h2>
      <input type="text" className="login__input" placeholder='Email Address'/>
      <input type="text" className="login__input" placeholder='Password'/>
      <input type="text" className="login__input" placeholder='First name'/>
      <input type="text" className="login__input" placeholder='Last name'/>
      <input type="text" className="login__input" placeholder='Phone number'/>
      <label className="register__label">
        <input type="checkbox" className="register__check" />
        I agree Terms & Conditions
      </label>
      <button type="submit" className='login__submit'>Register</button>
    </form>
  )
}

export default Register;