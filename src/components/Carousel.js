import Carousel from 'react-bootstrap/Carousel';
// import ExampleImg from  './../img';
import { useState} from 'react';
const images = [
  {image: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  alt: "tester1",
  header: "slide1",
  content: "hihi"}
  ,
  {image: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  alt: "tester2",
  header: "slide2",
  content: "hello hello"}
  ,
  { image: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  alt: "tester3",
  header: "slide 3",
  content: "yoyoyo"
  }
];
function CarouselComponent() {
  const [index, setIndex] = useState(0);
  const hadnleDotClick = (selectedIndex) => setIndex(selectedIndex);
  return (
    // <div className='carouselComponent'>
    <div style={{ display: 'block', width: '70%', padding: 30, margin:'auto, 20px'}}>
      <Carousel activeIndex={index} onSelect={hadnleDotClick} fade>
      {images.map((slide) => {
        return (
          <Carousel.Item interval={5000}>
            <img 
            className= "d-block w-100"
            src = {slide.image}
            alt={slide.alt}
            />
            <Carousel.Caption>
              <h3>{slide.header}</h3>
              <p>{slide.content}</p>
            </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
    
  )
}

export default CarouselComponent;