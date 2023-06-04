import react from "react";
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


          {data.results.map((team, index) => (
            <div key={index} id="home-next-games">
              Next games for {team.team}
              {team.homeGames.map((game, index) => (
                <div key={index}>
                  <span>Home team: {game.homeTeam}</span>
                  <span>Away team: {game.awayTeam}</span>
                  <span>Date: {game.date}</span>
                </div>
              ))}
            </div>
          ))}
          {/* <div id="home-next-games">
            Next games
            {data.results[0].homeGames.map((item, index) => (
              <div key={index}>
                <span>Home team: {item.homeTeam}</span>
                <span>Away team: {item.awayTeam}</span>
                <span>Date: {item.date}</span>
              </div>
            ))}
          </div> */}

          {/* <div id="home-next-games">next games
            {data.results.map((result) => {
              result.homeGames.map((item, index) => (
                  <div key={index}>
                    <span>Home team: {item.homeTeam}</span>
                    <span>Away team: {item.awayTeam}</span>
                    <span>Date: {item.date}</span>
                  </div>
                
              ))
            })}
          </div> */}
          {/* {
                  value[0].homeGames.map((item, index) => {
                    let { homeTeam, awayTeam, date, } = item
                    return (
                      <div id={`game-number-${index}`} key={index}>
                        <span>Home team: {homeTeam}</span>
                        <span>Away team: {awayTeam}</span>
                        <span>Date: {date}</span>
                      </div>
                    )

                  })
                } */}
          {/* </div> */}
        </div>
      </div >
    </>
  );
}

export default HomePage;
