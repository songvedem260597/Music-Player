import React, { useState, useEffect, useRef } from "react";

import Banner1 from "../assets/images/banner_1_song.jpg";
import Banner2 from "../assets/images/banner_2_song.jpg";
import Banner3 from "../assets/images/banner_3_song.jpg";
import "../assets/scss/Banner.scss";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isUserInteracting, setIsUserInteracting] = useState(false); //
  const intervalRef = useRef<null | number>(null);

  useEffect(() => {
    if (!isUserInteracting) {
      intervalRef.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev < 3 ? prev + 1 : 1));
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isUserInteracting]);

  const handlePrevClick = () => {
    setIsUserInteracting(true);
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : 3));
    resetInteraction();
  };

  const handleNextClick = () => {
    setIsUserInteracting(true);
    setCurrentSlide((prev) => (prev < 3 ? prev + 1 : 1));
    resetInteraction();
  };

  const resetInteraction = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 5000);
  };
  return (
    <div>
      <div className="ms-wrapper-slide">
        <div className="bg-blur"></div>
        <div className="ms-slide">
          <input
            type="radio"
            name="slider"
            id="item-1"
            checked={currentSlide === 1}
            readOnly
          />
          <input
            type="radio"
            name="slider"
            id="item-2"
            checked={currentSlide === 2}
            readOnly
          />
          <input
            type="radio"
            name="slider"
            id="item-3"
            checked={currentSlide === 3}
            readOnly
          />
          <div className="cards flex-center">
            <div className="wrap-control-slide">
              <span
                className="material-icons-outlined btn-carousel-prev"
                onClick={handlePrevClick}
              >
                arrow_forward
              </span>
              <span
                className="material-icons-outlined btn-carousel-next"
                onClick={handleNextClick}
              >
                arrow_back
              </span>
            </div>
            <label className="card" htmlFor="item-1" id="song-1">
              <img src={Banner1} alt="song" />
            </label>
            <label className="card" htmlFor="item-2" id="song-2">
              <img src={Banner2} alt="song" />
            </label>
            <label className="card" htmlFor="item-3" id="song-3">
              <img src={Banner3} alt="song" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
