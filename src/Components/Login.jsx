import React from 'react'
import "./UserPage.css"
import { useState, useEffect } from 'react'
const Login = () => {
  const [nameEntered, setNameEntered] = useState("")
  const [passwordEntered, setPasswordEntered] = useState("")
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("status"));
  const [loggedUser, setLoggedUser] = useState(null)
  useEffect(() => {
    localStorage.setItem("Logged", loggedUser)
  }, loggedUser)


  localStorage.setItem("status", loggedIn)
  function tryToLogin() {
    const nameUserEntered = localStorage.getItem(nameEntered)
    if (localStorage.getItem(nameEntered) == null) {
      alert("User name or password are wrong")
    } else {
      if (localStorage.getItem(nameEntered) === passwordEntered) {
        alert("Loged in successfully! Enjoy your game!")
        setLoggedIn(true);
        setLoggedUser(nameEntered)
        window.location.reload();
      } else {
        alert("User name or password are wrong")
      }
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
