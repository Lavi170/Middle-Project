
import React, { useState, useEffect } from "react";

const Carousel1 = (props) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [hideRightArrow, setHideRightArrow] = useState(false);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
      if (currentIndex === length - 2) {
        setHideRightArrow(true);
      }
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
      if (hideRightArrow) {
        setHideRightArrow(false);
      }
    }
  };

  useEffect(() => {
    setLength(children.length);
    if (currentIndex === length - 1) {
      setHideRightArrow(true);
    } else {
      setHideRightArrow(false);
    }
  }, [children, currentIndex, length]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button className="left-arrow" onClick={prev}>
            &lt;
          </button>
        )}
        <div className="carousel-content-wrapper">
          <div
            className={`carousel-content ${
              hideRightArrow ? "hide-right" : ""
            }`}
            style={{ transform: `translateX(-${currentIndex * 16.66}%)` }}
          >
            {children}
          </div>
        </div>
        {!hideRightArrow && (
          <button onClick={next} className="right-arrow">
            &gt;
          </button>
        )}
      </div>
    </div>
  );
};
export default Carousel1;
