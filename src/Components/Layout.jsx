import "./Layout.css"
import { Link, Outlet } from "react-router-dom";
import { useState , useEffect } from "react";
// import { useLocalStorage } from 'usehooks-ts'

function Layout() {
    const[isUserLogged , setIsUserLogged]=useState('login' , false);
   
    useEffect(()=>{
        setIsUserLogged(sessionStorage.getItem("status"))
    },[isUserLogged])
    
    return (
        <div>
            <nav className="nav-bar">
                    <Link to={"UserPage"}>
          {isUserLogged === true ? (
            <button className="login-signup"> Log out</button>
          ) : (
            <button className="login-signup"> Log in</button>
          )}
        </Link>
                <div className="right-side-nav-bar">
                    <Link className="nav-link" to={"/"} >
                        Home 
                    </Link>
                    <Link className="nav-link" to={"CalendarComponent"} >
                        Calender
                    </Link>

                    <img id="nav-logo" src="src/pictures/middle-project-logo.png" alt="" />

                    <Link className="nav-link" to={"Teams"}>
                        Teams
                    </Link>
                    <Link className="nav-link" to={"news"}>
                        News
                    </Link>
                </div>
                <Link to={"UserPage"}><button className="login-signup">Sign Up</button></Link>
            </nav>
            <Outlet></Outlet>
            <div id="Layout-footer">
                <div id="layout-footer-left">
                    <Link className="layout-footer-left-links" to={"ContactUs"}> Contact us</Link>
                    <Link className="layout-footer-left-links" to={"About"}> About us</Link>
                    <Link className="layout-footer-left-links" > Contact us</Link>
                </div>
                <div id="layout-footer-right">
                    <a className="layout-footer-right-links" href="https://www.instagram.com/"><img className="layout-footer-right-pictures" src="../src/pictures/icons8-instagram-48.png" alt="" /></a>
                    <a className="layout-footer-right-links" href="https://twitter.com/"><img className="layout-footer-right-pictures" src="../src/pictures/icons8-twitter-48.png" alt="" /></a>
                    <a className="layout-footer-right-links" href="https://he-il.facebook.com/"><img className="layout-footer-right-pictures" src="../src/pictures/icons8-whatsapp-48.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
};
export default Layout;
