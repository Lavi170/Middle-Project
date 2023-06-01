import react from 'react';
import video from "/src/pictures/hero-section-video.mp4";
import "./HomePage.css";
import Carousel from 'better-react-carousel'
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

    <Carousel  containerStyle={{
      backgroundColor:"#4b0388"
    }} cols={6} rows={1} gap={10} loop>
      <Carousel.Item>
        <a href="/"><img width="70%" src="src/pictures/Beitar_Jerusalem-logo.png" /></a>
      </Carousel.Item>
      <Carousel.Item>
        <a href=""><img width="70%" src="src/pictures/Maccabi_Tel_Aviv_logo.png" /></a>
      </Carousel.Item>
      <Carousel.Item>
        <a href=""><img width="70%" src="src/pictures/hapoel-beer-sheva-logo.png" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href=""><img width="70%" src="src/pictures/maccabi-netanya-logo.png" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href=""><img width="80%" src="src/pictures/hapoel-katamon-jerusalem-logo.png" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href=""><img width="100%" height="90%" src="src/pictures/MS-Ashdod.png" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href=""><img width="80%" src="src/pictures/Maccabi_Haifa-logo.png" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href=""><img width="80%" src="src/pictures/Hapoel-Haifa-logo.png" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href=""><img width="80%" src="src/pictures/bnei-sakhnin-logo.png" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href=""><img width="80%" src="src/pictures/hapoel-hadera-logo.png" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href=""><img width="80%" src="src/pictures/hapoel-tel-aviv-logo.png" /></a>
      </Carousel.Item>
      <Carousel.Item>
      <a href=""><img width="80%" src="src/pictures/maccabi-bnei-reine-logo.png" /></a>
      </Carousel.Item>
      
    </Carousel>
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
