import React from 'react'
import './UserPage.css'
import { useState } from 'react'
const SignUp = () => {
  const [newUserName, setNewUserName] = useState("")
  const [newUserPassword, setNewUserPassword] = useState("")

  function anigma() {
    let randomKey = Math.floor(Math.randomm() * 5)
    if (randomKey === 0) {
      for (let i = 0; i < newUserPassword.length; i++) {

      }
    } else if (randomKey === 1) {

    } else if (randomKey === 3) {

    } else if (randomKey === 4) {

    } else if (randomKey === 5) {

    }
  }
  const newUser = {
    userName: newUserName,
    userPassword: newUserPassword
  }

  function checkAndSign() {
    if (newUserName.length > 2) {
      if (localStorage.getItem(newUserName) === null) {
        if (newUserPassword.length > 5) {
          localStorage.setItem(newUserName, newUserPassword)
          alert("Signed up successfully!")
        } else {
          alert("Password too short, please enter a password atleast 6 chars long")
        }
      } else {
        alert("this user name is already taken!")
      }
    } else {
      alert("Please enter user name that atleast 3 charecters")
    }
  }

  return (
    <div className='user-page'>
      <div className='user-page-container'>
        <h1 style={{ fontFamily: "system-ui" }}>Sign Up</h1>
        <div> Enter user-name with atleast 3 chars
          <br />
          <input onChange={() => setNewUserName(event.target.value)} className='user-page-input' type="text" placeholder='Enter Username...' /></div>
        <div> Enter password with atleast 6 chars
          <br />
          <input onChange={() => setNewUserPassword(event.target.value)} className='user-page-input' type="password" placeholder='Enter Password...' /></div>
        <div id='user-page-remember-me'>  <input type="checkbox" /><h6 id='user-page-h6'>Remember Me</h6></div>
        <button onClick={() => checkAndSign()} className='user-page-button'>Submit</button>
        <h5>Already Have An Account? <a href="/userpage">Log In Here</a></h5>
      </div>
    </div>

  )
}

export default SignUp
