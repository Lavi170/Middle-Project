import React from 'react'
import "./UserPage.css"
import { useState } from 'react'
const Login = () => {
  const [nameEntered, setNameEntered] = useState("")
  const [passwordEntered, setPasswordEntered] = useState("")
  const [loggedIn , setLoggedIn]=useState(false);
  sessionStorage.setItem( "status" , loggedIn)
  function tryToLogin() {
      const nameUserEntered = localStorage.getItem(nameEntered)
      // const parsedEnteredNameKEY=JSON.parse(nameUserEntered)
      if (localStorage.getItem(nameEntered) == null) {
        alert("User name or password are wrong")
        console.log(`use name does not exsist${loggedIn}`);
      } else {
        if (localStorage.getItem(nameEntered)===passwordEntered){
         alert("Loged in successfully! Enjoy your game!")
         setLoggedIn(true);
         console.log(`all good man${loggedIn}`);
         sessionStorage.setItem( "status" , loggedIn )
        } else{
          alert("User name or password are wrong")
          console.log(`password does not exsist${loggedIn}`);
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
