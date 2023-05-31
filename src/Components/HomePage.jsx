import video from "C:/Users/CyberPro3/Desktop/pureCoding/projects/Middle-Project-master/src/pictures/hero-section-video.mp4"
import "./HomePage.css"
function HomePage() {

    return (
        <div id="home-page">
            <div id="home-hero-section">
                <video src={video} width={"600"} height={"300"} muted autoPlay loop  />
                <div id='home-over-video'>
                    <div id='home-over-video-name'>GoalTicket</div>
                    <div id='home-over-video-slogen'>Some slogen</div>
                </div>
            </div>

            <div id="home-teams">
                teams
            </div>
            <div id="home-center-grid">

                <div id="home-semi-calender">
                    semi-calender
                </div>

                <div id="home-contact-us">
                    mini contact us 
                </div>

                <div id="home-next-games">
                    next games
                </div>
