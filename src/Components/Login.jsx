import React from 'react'
import "./UserPage.css"
const Login = () => {
  return (
    <div className='user-page'>
      <div className='user-page-container'>
<h1 style={{fontFamily: "system-ui"}}>Login</h1>
<div>
<br />
<input className='user-page-input' type="text" placeholder='Enter User Name...' /></div>
<div>
<br />
<input className='user-page-input' type="password" placeholder='Enter Password...' /></div>
<div id='user-page-remember-me'>  <input type="checkbox" /><h6 id='user-page-h6'>Remember Me</h6></div>
<button className='user-page-button'>Submit</button>

<h5>Dont Have An Account? <a href="userpage/signup">Sign Up Here</a></h5>
      </div>
    </div>
  )
}

export default Login
