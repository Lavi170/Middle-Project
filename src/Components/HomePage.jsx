import React from "react";
import video from "/src/pictures/hero-section-video.mp4";
import "./HomePage.css";
import Carousel1 from "./Carousel1";
import "./carousel.css";
import { Link } from "react-router-dom";
import RunningNews from "./RunningNews";
import CalendarComponent from "./CalendarComponent";
import ContactUs from "./ContactUs"
import data from "./data.json"
function HomePage({ value, setValue }) {
  console.log(data.results);
  return (
    <>

      <div id="home-page">
        <div className="news-in-homepage"><RunningNews /></div>
        <div id="home-hero-section">
          <video src={video} width={"600"} height={"300"} muted autoPlay loop />
          <div id="home-over-video">
            <div id="home-over-video-name">GoalTicket</div>
            <div id="home-over-video-slogen">Connect With The Beautiful Game</div>
          </div>
        </div>

        <Carousel1
          containerStyle={{
            backgroundColor: "#4b0388",
          }}
          loop
        >
          <Link>

            <img
              className="carousel-img"
              src="src/pictures/Beitar_Jerusalem-logo.png"
              alt="placeholder"
            />
          </Link>
          <Link> <img
            className="carousel-img"
            src="src/pictures/Maccabi_Tel_Aviv_logo.png"
            alt="placeholder"
          /></Link>
          <Link> <img
            className="carousel-img"
            src="src/pictures/hapoel-beer-sheva-logo.png"
            alt="placeholder"
          /></Link>
          <Link> <img
            className="carousel-img"
            src="src/pictures/maccabi-netanya-logo.png"
            alt="placeholder"
          /></Link>
          <Link> <img
            className="carousel-img"
            src="src/pictures/hapoel-katamon-jerusalem-logo.png"
            alt="placeholder"
          /></Link>
          <Link> <img
            className="carousel-img"
            src="src/pictures/Maccabi_Haifa-logo.png"
            alt="placeholder"
          /></Link>
          <Link> <img
            className="carousel-img"
            src="src/pictures/Hapoel-Haifa-logo.png"
            alt="placeholder"
          /></Link>
          <Link> <img
            className="carousel-img"
            src="src/pictures/bnei-sakhnin-logo.png"
            alt="placeholder"
          /></Link>
          <Link>  <img
            className="carousel-img"
            src="src/pictures/hapoel-hadera-logo.png"
            alt="placeholder"
          /></Link>
          <Link> <img
            className="carousel-img"
            src="src/pictures/hapoel-tel-aviv-logo.png"
            alt="placeholder"
          /></Link>
          <Link> <img
            className="carousel-img"
            src="src/pictures/maccabi-bnei-reine-logo.png"
            alt="placeholder"
          /></Link>
          <Link> <img
            className="carousel-img"
            src="src/pictures/ironi-kiryat-shmona-logo.jpg"
            alt="placeholder"
          /></Link>
          <Link><img
            className="carousel-img"
            src="src/pictures/sekzia-ness-ziona-logo.gif"
            alt="placeholder"
          /></Link>
        </Carousel1>

        <div id="home-center-grid">
          <div id="home-semi-calender"><CalendarComponent /></div>

          <div id="home-contact-us"><ContactUs /></div>

<div id="home-commercials">
  <div className="commercial-block">
   <a href="https://en.wikipedia.org/wiki/Patio"> <img src="src/pictures/ad1.jpg" alt="Advertisement" /> </a>
    <p>Too hot to sit in the patio? Buy our shade nets now!</p>
  </div>
  <div className="commercial-block">
   <a href="https://www.10bis.co.il/next/restaurants/menu/delivery/2612/%D7%A9%D7%95%D7%9E%D7%A9%D7%95%D7%9D-%D7%91%D7%A8-%D7%91%D7%A8%D7%99%D7%90%D7%95%D7%AA"><img src="src/pictures/ad2.jpg" alt="Advertisement" /> </a> 
    <p>Cant find a job? SUMSUM!</p>
  </div>
  <div className="commercial-block">
   <a href="https://cyberpro-israel.co.il/%d7%90%d7%96-%d7%9b%d7%99%d7%a6%d7%93-%d7%91%d7%95%d7%97%d7%a8%d7%99%d7%9d-%d7%a7%d7%95%d7%a8%d7%a1-%d7%a1%d7%99%d7%99%d7%91%d7%a8/"><img src="src/pictures/ad3.jpg" alt="Advertisement" /> </a> 
    <p>Are you still programing? Dont be a clown! Come be a cyber attacker and make 30k!</p>
  </div>
</div>
          
        </div>
      </div >
    </>
  );
}

export default HomePage;
