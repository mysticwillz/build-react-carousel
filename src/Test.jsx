import React from "react";
import "./App.css";

export default function Test() {
  const getBox = () => {
    return document.querySelector(".carouselContainer");
  };

  const prev = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(box.scrollLeft);
  };
  const next = () => {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(box.scrollLeft);
  };
  return (
    <div className="div">
      <button className="prev" onClick={prev}>
        prev
      </button>
      <div className="carouselContainer">
        <div className="carousel">
          <div className="list">one</div>
        </div>
        <div className="carousel">
          <div className="list">two</div>
        </div>
        <div className="carousel">
          <div className="list">three</div>
        </div>
        <div className="carousel">
          <div className="list">four</div>
        </div>
      </div>
      <button className="next" onClick={next}>
        next
      </button>
    </div>
  );
}
