import React from "react";
import { useState,useEffect } from "react";
const Carousel1 = (props) => {
  const { children } = props;
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)
  const next = () => {
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
    }
}

const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
}
  // Set the length to match current children from props
  useEffect(() => {
      setLength(children.length)
  }, [children])
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {" "}
        {/* You can alwas change the content of the button to other things */}
        {currentIndex > 0 &&
        <button className="left-arrow" onClick={prev}>&lt;</button>}
        <div className="carousel-content-wrapper">
        <div
        className="carousel-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
        {children}
    </div>
    {
    currentIndex < (length - 1) &&
    <button onClick={next} className="right-arrow">
        &gt;
    </button>
}
          {/* <div className="carousel-content">{children}</div> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
