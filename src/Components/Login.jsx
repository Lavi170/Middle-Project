import React from 'react'
import "./UserPage.css"
import { useState } from 'react'
const Login = () => {
  const [nameEntered, setNameEntered] = useState("")
  const [passwordEntered, setPasswordEntered] = useState("")
  function tryToLogin() {
    for (let i=0 ; i<localStorage.length ; i++){
      
      console.log(localStorage.nameEntered);
    }
  }
  return (
    <div className='user-page'>
      <div className='user-page-container'>
        <h1 style={{ fontFamily: "system-ui" }}>Login</h1>
        <div>
          <br />
          <input onChange={() => setNameEntered(event.target.value)} className='user-page-input' type="text" placeholder='Enter User Name...' /></div>
        <div>
          <br />
          <input onChange={() => setPasswordEntered(event.target.value)} className='user-page-input' type="password" placeholder='Enter Password...' /></div>
        <div id='user-page-remember-me'>  <input type="checkbox" /><h6 id='user-page-h6'>Remember Me</h6></div>
        <button onClick={() => tryToLogin()} className='user-page-button'>Submit</button>

        <h5>Dont Have An Account? <a href="userpage/signup">Sign Up Here</a></h5>
      </div>
    </div>
  )

}

export default Login
