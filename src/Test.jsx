import React from "react";
import "./App.css";

export default function Test() {
  return (
    <div className="div">
      <button className="prev">prev</button>
      <div className="carouselContainer">
        <div className="carousel">
          <div className="list"></div>
        </div>
        <div className="carousel">
          <div className="list"></div>
        </div>
        <div className="carousel">
          <div className="list"></div>
        </div>
        <div className="carousel">
          <div className="list"></div>
        </div>
        <div className="carousel">
          <div className="list"></div>
        </div>
        <div className="carousel">
          <div className="list"></div>
        </div>
      </div>
      <button className="next">next</button>
    </div>
  );
}
