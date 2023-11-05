import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { Link } from "react-router-dom";

const images = [
  {
    image: require("./../img/vancouverBanner1024.jpg"),
    alt: "VancouverBanner",
    header: "Welcome to Vancouver!" ,
    content: "We got your back starting in this city!",
    link: "/"
  }
  ,
  {
    image: require("./../img/TransportBanner1024.png"),
    alt: "tester2",
    header: "Boost start your Vancouver experience with us!",
    content: "We can match your need on housing advise, transportation, turtoring, employment, socializing, and other general tasks with our job seeker. Learn more about us!",
    link: "/"
  }
  ,
  {
    image:require("./../img/UnitedBanner1024.png"),
    alt: "Join Us as a job seeker",
    header: "Do you want to contribute to your community?",
    content: "Join us and give the new comer a hand and expand your network!",
    link: "/"
  }
];
function CarouselComponent() {
  const [index, setIndex] = useState(0);
  const hadnleDotClick = (selectedIndex) => setIndex(selectedIndex);
  return (
    <div className='carouselComponent' style={{ display: 'block', width: '80%', padding: 30, margin:'auto', border: "rgba(255,255,255,0), solid, 2px", borderRadius: "20px"}}>
      <Carousel activeIndex={index} onSelect={hadnleDotClick} fade>
      {images.map((slide) => {
        return (
          <Carousel.Item interval={5000}>
            <img 
            className= "d-block w-100"
            src = {slide.image}
            alt = {slide.alt}
            />
            <Carousel.Caption>
              <Link to = {slide.link} style={{textDecoration: "none", color:"aliceblue"}}>
                <div style={{backgroundColor: "rgba(0,0,0,0.5)", border: "rgba(255,255,255,0), solid, 2px", borderRadius: "20px", marginBottom:0, width:"80%", marginLeft:"auto", marginRight:"auto", padding:"1%"}}>
                  <h2>{slide.header}</h2>
                  <p style={{fontSize: "18px"}}>{slide.content}</p>
                </div>
              </Link>
            </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
    
  )
}

export default CarouselComponent;