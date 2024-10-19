import React, { useState, useEffect, useRef } from "react";
import Slide from "../components/Layouts/Slide";
import Carousel from "../components/Layouts/Carousel";
const Home = () => {
  return (
    <div className="main-content">
      <Slide />
      <div className="wrapper-content">
        <div className="ms-suggestion-song">
          <p className="title-suggestion">Gợi Ý Hôm Nay</p>
          <Carousel />
        </div>
        <div className="ms-suggestion-song">
          <p className="title-suggestion">Thể loại</p>
          <Carousel />
        </div>

      </div>
    </div>
  );
};

export default Home;
