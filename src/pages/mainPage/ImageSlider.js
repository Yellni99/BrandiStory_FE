import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {

    if (!Array.isArray(slides) || slides.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, slides]);


  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <a href={slide.url} target="_blank" rel="noopener noreferrer">
              <img src={slide.src} alt={`Slide ${index}`} className="image" />
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
