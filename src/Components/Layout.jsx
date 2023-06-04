import "./Layout.css"
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function Layout() {
    const [isUserLogged, setIsUserLogged] = useState(localStorage.getItem("status"));
    const [userSignedIn, setUserSignedIn] = useState("")
    // useEffect(()=>{
    // const correntlyLogged=localStorage.getItem("Logged")   
    // })

    return (
        <div>
            <nav className="nav-bar">
                {isUserLogged == "true" ?
                    <div id="user-signed-in">
                        <button onClick={() => localStorage.setItem("status", !isUserLogged)} className="login-signup">Log out</button>
                        <h4>Hello {localStorage.getItem("Logged")}</h4>
                    </div>
                    :
                    <Link to={"UserPage"}>
                        <button className="login-signup">Login</button>
                    </Link>
                }
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
                    <Link className="nav-link" >
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
