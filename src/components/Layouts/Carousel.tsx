import { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from "../../assets/images/slide_1.png";
import slide_2 from "../../assets/images/slide_2.png";
import slide_3 from "../../assets/images/slide_3.png";
import slide_4 from "../../assets/images/slide_4.png";
import "../../assets/scss/Carousel.scss";

interface ArrowProps {
  onClick?: () => void;
  isActive?: boolean;
}

const NextArrow = ({ onClick, isActive = false }: ArrowProps) => {
  return (
    <button
      className={`btn-slick-next material-icons-outlined ${isActive ? "active-carousel" : ""}`}
      onClick={() => {
        onClick && onClick(); // Gọi hàm onClick khi nhấn nút
      }}
    >
      arrow_back_ios
    </button>
  );
};

const PrevArrow = ({ onClick, isActive = false }: ArrowProps) => {
  return (
    <button
      className={`btn-slick-prev material-icons-outlined ${isActive ? "active-carousel" : ""}`}
      onClick={() => {
        onClick && onClick(); // Gọi hàm onClick khi nhấn nút
      }}
    >
      arrow_forward_ios
    </button>
  );
};


const Carousel = () => {
  const [activeArrow, setActiveArrow] = useState<"prev" | "next" | null>(null);
  const handleArrowClick = (arrowType: "prev" | "next") => {
    console.log(arrowType)
    setActiveArrow(arrowType); 
  };

  // Settings for the carousel with type Settings from react-slick
  const settings: Partial<{
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    nextArrow: JSX.Element;
    prevArrow: JSX.Element;
    afterChange: (current: number) => void;
  }> = {
    infinite: true,
    speed: 600,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow isActive={activeArrow === "next"} onClick={() => handleArrowClick("next")} />,
    prevArrow: <PrevArrow isActive={activeArrow === "prev"} onClick={() => handleArrowClick("prev")} />
  };
  

  return (
    <Slider {...settings}>
      <div>
        <img src={slide_1} alt="Item 1" />
      </div>
      <div>
        <img src={slide_2} alt="Item 2" />
      </div>
      <div>
        <img src={slide_3} alt="Item 3" />
      </div>
      <div>
        <img src={slide_4} alt="Item 4" />
      </div>
      <div>
        <img src={slide_1} alt="Item 1" />
      </div>
      <div>
        <img src={slide_2} alt="Item 2" />
      </div>
      <div>
        <img src={slide_3} alt="Item 3" />
      </div>
    </Slider>
  );
};

export default Carousel;
