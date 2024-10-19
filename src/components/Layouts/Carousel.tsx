import { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from "../../assets/images/slide_1.png";
import slide_2 from "../../assets/images/slide_2.png";
import slide_3 from "../../assets/images/slide_3.png";
import slide_4 from "../../assets/images/slide_4.png";
import "../../assets/scss/Carousel.scss";

// Define types for custom button props
interface ArrowProps {
  onClick?: () => void;
  isActive?: boolean;
}

// Custom Next Button
const NextArrow = ({ onClick, isActive = false }: ArrowProps) => {
  return (
    <button
      className={`slick-next custom-next ${isActive ? "active-carousel" : ""}`}
      onClick={onClick}
    >
      Next
    </button>
  );
};

// Custom Previous Button
const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button className="slick-prev custom-prev" onClick={onClick}>
      Prev
    </button>
  );
};

const Carousel = () => {
  const [isActive, setIsActive] = useState(true);

  // Event handler for afterChange, with a type definition
  const handleAfterChange = (current: number) => {
    setIsActive(current !== 0); // If not at the first slide, activate the Next button
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
    nextArrow: <NextArrow isActive={isActive} />,
    prevArrow: <PrevArrow />,
    afterChange: handleAfterChange,
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
        <img src={slide_2} alt="Item 3" />
      </div>
    </Slider>
  );
};

export default Carousel;
