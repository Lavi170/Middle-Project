import react from "react";
import video from "/src/pictures/hero-section-video.mp4";
import "./HomePage.css";
import Carousel1 from "./Carousel1";
import "./carousel.css";
function HomePage({ value, setValue }) {
  return (
    <div id="home-page">
      <div id="home-hero-section">
        <video src={video} width={"600"} height={"300"} muted autoPlay loop />
        <div id="home-over-video">
          <div id="home-over-video-name">GoalTicket</div>
          <div id="home-over-video-slogen">Some slogen</div>
        </div>
      </div>

      <Carousel1
        containerStyle={{
          backgroundColor: "#4b0388",
        }}
        loop
      >
        <img className="carousel-img" src="src/pictures/Beitar_Jerusalem-logo.png" alt="placeholder" />
        <img className="carousel-img" src="src/pictures/Maccabi_Tel_Aviv_logo.png" alt="placeholder" />
        <img className="carousel-img" src="src/pictures/hapoel-beer-sheva-logo.png" alt="placeholder" />
        <img className="carousel-img" src="src/pictures/maccabi-netanya-logo.png" alt="placeholder" />
        <img className="carousel-img"
          src="src/pictures/hapoel-katamon-jerusalem-logo.png"
          alt="placeholder"
        />
        <img className="carousel-img" src="src/pictures/Maccabi_Haifa-logo.png" alt="placeholder" />
        <img className="carousel-img" src="src/pictures/Hapoel-Haifa-logo.png" alt="placeholder" />
        <img className="carousel-img" src="src/pictures/bnei-sakhnin-logo.png" alt="placeholder" />
        <img className="carousel-img" src="src/pictures/hapoel-hadera-logo.png" alt="placeholder" />
        <img className="carousel-img" src="src/pictures/hapoel-tel-aviv-logo.png" alt="placeholder" />
        <img className="carousel-img" src="src/pictures/maccabi-bnei-reine-logo.png" alt="placeholder" />
      </Carousel1>
     
      <div id="home-teams">teams</div>
      <div id="home-center-grid">
        <div id="home-semi-calender">semi-calender</div>

        <div id="home-contact-us">mini contact us</div>

        <div id="home-next-games">next games</div>
      </div>
    </div>
  );
}

export default HomePage;
