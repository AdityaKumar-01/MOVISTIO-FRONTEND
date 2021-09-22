import React, { useState } from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Carousel.syles.css";
import CarouselCard from "./../CarouselCard/CarouselCard.component";

const Carousel = () => {
  const [ids, setIds] = useState(["244786", "238", "24428"]);
  return (
    <CarouselProvider
      naturalSlideWidth={10}
      naturalSlideHeight={5}
      totalSlides={3}
      interval={5000}
      isPlaying={true}
      infinite={true}
      className="carousel-container"
    >
      <Slider>
        {ids.map((id, key) => {
          return <CarouselCard key={key} id={id} />;
        })}
      </Slider>
    </CarouselProvider>
  );
};

export default Carousel;
