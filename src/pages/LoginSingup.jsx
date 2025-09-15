import React from 'react'
import './css/Logingsingup.css';
const LoginSingup = () => {
  return (
    <div className='logingsingup'>
        <div className="logingsingup-contaner">
          <h1>Sing Up</h1>
          <div className="logingsingup-feild">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className="logingsingup-loging">Already have an account? <span>Loging here</span></p>
          <div className="logingsingup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSingup