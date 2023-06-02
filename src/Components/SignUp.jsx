import React from 'react'
import './UserPage.css'
import { useState } from 'react'
const SignUp = () => {
  const [newUserName, setNewUserName] = useState("")
  const [newUserPassword, setNewUserPassword] = useState("")

  return (
    <div className='user-page'>
      <div className='user-page-container'>
        <h1 style={{ fontFamily: "system-ui" }}>Sign Up</h1>
        <div>
          <br />
          <input onChange={() => setNewUserName(event.target.value)} className='user-page-input' type="text" placeholder='Enter Username...' /></div>
        <div>
          <br />
          <input onChange={() => setNewUserPassword(event.target.value)} className='user-page-input' type="password" placeholder='Enter Password...' /></div>
        <div id='user-page-remember-me'>  <input type="checkbox" /><h6 id='user-page-h6'>Remember Me</h6></div>
        <button onClick={() => localStorage.setItem(JSON.stringify(newUserName), JSON.stringify(newUserPassword))} className='user-page-button'>Submit</button>
        <h5>Already Have An Account? <a href="/userpage">Log In Here</a></h5>
      </div>
    </div>

  )
}

export default SignUp
