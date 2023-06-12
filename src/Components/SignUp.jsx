import React from 'react'
import './UserPage.css'
import { useState } from 'react'
const SignUp = () => {
  const [newUserName, setNewUserName] = useState("")
  const [newUserPassword, setNewUserPassword] = useState("")
  const [potato ,setPotato]=useState("")

  function anigma(passwordToConvert) {
    const convertPassword = []
    const newEncryptedPassword = []
    let splitedPassword;
    let randomKey = Math.floor(Math.random() * 5)
    
    splitedPassword = passwordToConvert.split("")
    if (randomKey === 0) {
      for (let i = 0; i < splitedPassword.length; i++) {
        convertPassword.push(splitedPassword[i].charCodeAt(0) - 4)
        newEncryptedPassword.push(String.fromCharCode(convertPassword[i]))
      }
      newEncryptedPassword.push(randomKey)
    } else if (randomKey === 1) {
      for (let i = 0; i < splitedPassword.length; i++) {
        convertPassword.push(splitedPassword[i].charCodeAt(0) - 2)
        newEncryptedPassword.push(String.fromCharCode(convertPassword[i]))
      }
      newEncryptedPassword.push(randomKey)
    } else if (randomKey === 2) {
      for (let i = 0; i < splitedPassword.length; i++) {
        convertPassword.push(splitedPassword[i].charCodeAt(0) -1)
        newEncryptedPassword.push(String.fromCharCode(convertPassword[i]))
      }
      newEncryptedPassword.push(randomKey)
    } else if (randomKey === 3) {
      for (let i = 0; i < splitedPassword.length; i++) {
        convertPassword.push(splitedPassword[i].charCodeAt(0) -5)
        newEncryptedPassword.push(String.fromCharCode(convertPassword[i]))
      }
      newEncryptedPassword.push(randomKey)
    } else if (randomKey === 4) {
      for (let i = 0; i < splitedPassword.length - 1; i++) {
        convertPassword.push(splitedPassword[i].charCodeAt(0) -7 )
        newEncryptedPassword.push(String.fromCharCode(convertPassword[i]))
      }
      newEncryptedPassword.push(randomKey)
    }
    setNewUserPassword(newEncryptedPassword.join(" "))
    console.log(newEncryptedPassword);
    console.log(newUserPassword);
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
          // console.log(newUserPassword);
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
          <input onChange={() => anigma(event.target.value) } className='user-page-input' type="password" placeholder='Enter Password...' /></div>
        <div id='user-page-remember-me'>  <input type="checkbox" /><h6 id='user-page-h6'>Remember Me</h6></div>
        <button onClick={() =>  checkAndSign()+console.log(newUserPassword)} className='user-page-button'>Submit</button>
        <h5>Already Have An Account? <a href="/userpage">Log In Here</a></h5>
      </div>
    </div>

  )
}

export default SignUp
