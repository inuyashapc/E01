import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Tariq from "../../images/HomePage/Tariq.png";
import vector11 from "../../images/Vector 1.png";
import star from "../../images/star.png";
import KonradS from "../../images/HomePage/KonradS.png";
import Gina from "../../images/HomePage/Gina.png";
export default function CarouselImages() {
  const a = null;
  console.log("🚀 ~ file: carousel.js:11 ~ a:", a)
  console.log("🚀 ~ file: carousel.js:11 ~ a:", a)
  return (
    <div className="carouselMobile">
      <Carousel>
        <div className="carocaro">
          <div className="fixed-content">
            <div className="vote">
              <div className="vote-left">
                <img id="phay" src={vector11} alt="vector11"></img>&nbsp;
                <img id="phay" src={vector11} alt="vector11"></img>
              </div>
              <div className="vote-right">
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>
              </div>
            </div>
            <p>
              As a Vietnamese learner, you might have realized that
              pronunciation is not an easy task. I had very refreshing
              pronunciation sessions with the course. It guided me step by step
              in order to fix and correct several issues with my Vietnamese
              pronunciations. Highly recommended!
            </p>
          </div>
          <div className="card-name">
            <img id="card-name" src={Tariq} alt="anh" />
            <div className="card-name-details">
              <h4>Tariq</h4>
              <p>Master Your Pronunciation Course</p>
            </div>
          </div>
        </div>
        <div className="carocaro">
          <div className="fixed-content">
            <div className="vote">
              <div className="vote-left">
                <img id="phay" src={vector11} alt="vector11"></img>&nbsp;
                <img id="phay" src={vector11} alt="vector11"></img>
              </div>
              <div className="vote-right">
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>
              </div>
            </div>
            <p>
              As a Vietnamese learner, you might have realized that
              pronunciation is not an easy task. I had very refreshing
              pronunciation sessions with the course. It guided me step by step
              in order to fix and correct several issues with my Vietnamese
              pronunciations. Highly recommended!
            </p>
          </div>
          <div className="card-name">
            <img id="card-name" src={Tariq} alt="anh" />
            <div className="card-name-details">
              <h4>Tariq</h4>
              <p>Master Your Pronunciation Course</p>
            </div>
          </div>
        </div>
        <div className="carocaro">
          <div className="fixed-content">
            <div className="vote">
              <div className="vote-left">
                <img id="phay" src={vector11} alt="vector11"></img>&nbsp;
                <img id="phay" src={vector11} alt="vector11"></img>
              </div>
              <div className="vote-right">
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>&nbsp;&nbsp;
                <img id="star" src={star} alt="star"></img>
              </div>
            </div>
            <p>
              As a Vietnamese learner, you might have realized that
              pronunciation is not an easy task. I had very refreshing
              pronunciation sessions with the course. It guided me step by step
              in order to fix and correct several issues with my Vietnamese
              pronunciations. Highly recommended!
            </p>
          </div>
          <div className="card-name">
            <img id="card-name" src={Tariq} alt="anh" />
            <div className="card-name-details">
              <h4>Tariq</h4>
              <p>Master Your Pronunciation Course</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>


  );
}
