import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";


export default class Carousel extends React.Component {

  render() {
    const right = ">"
    const left = "<"
    return (
      <CarouselProvider
        naturalSlideWidth={90}
        naturalSlideHeight={160}
        totalSlides={8}
        visibleSlides={1}
        currentSlide={1}
        className="container"
      >
        <Slider >
          <Slide index={0}><img src="https://filmmakers.de/misc/image?id=2134900&xmax=2000&ymax=1000" alt=""/></Slide>
          <Slide index={1}><img src="https://filmmakers.de/misc/image?id=2134908&xmax=2000&ymax=1000" alt=""/></Slide>
          <Slide index={2}><img src="https://filmmakers.de/misc/image?id=2124909&xmax=2000&ymax=1000" alt=""/></Slide>
          <Slide index={3}><img src="https://filmmakers.de/misc/image?id=2134894&xmax=2000&ymax=1000" alt=""/></Slide>
          <Slide index={4}><img src="https://filmmakers.de/misc/image?id=2134898&xmax=2000&ymax=1000" alt=""/></Slide>
          <Slide index={5}><img src="https://filmmakers.de/misc/image?id=2134902&xmax=2000&ymax=1000" alt=""/></Slide>
          <Slide index={6}><img src="https://filmmakers.de/misc/image?id=2134904&xmax=2000&ymax=1000" alt=""/></Slide>
          <Slide index={7}><img src="https://filmmakers.de/misc/image?id=2134906&xmax=2000&ymax=1000" alt=""/></Slide>
        </Slider>
        <ButtonBack className="button is-dark is-outlined">{left}</ButtonBack>
        <ButtonNext className="button is-dark is-outlined">{right}</ButtonNext>
      </CarouselProvider>
    );
  }
}
