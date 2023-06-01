import "./Layout.css"
import { Link, Outlet } from "react-router-dom";
function Layout() {
    return (
        <div>
            <nav className="nav-bar">
                <button className="login-signup">Login </button>
                <div className="right-side-nav-bar">
                    <Link className="nav-link" to={"/"} >
                        Home 
                    </Link>
                    <Link className="nav-link" to={"CalendarComponent"} >
                        Calender
                    </Link>

                    <div id="nav-logo" className="nav-link">
                        LOGO 
                    </div>

                    <Link className="nav-link" to={"Teams"}>
                        Teams
                    </Link>
                    <Link className="nav-link" >
                        News
                    </Link>
                </div>
                <button className="login-signup">Sign Up</button>
            </nav>
            <Outlet></Outlet>
            <div id="Layout-footer">
                <div id="layout-footer-left">
                    <Link className="layout-footer-left-links" to={"ContactUs"}> Contact us</Link>
                    <Link className="layout-footer-left-links"> About us</Link>
                    <Link className="layout-footer-left-links"> Contact us</Link>
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
