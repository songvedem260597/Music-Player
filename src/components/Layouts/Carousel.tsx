import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/scss/Carousel.scss";

interface ArrowProps {
  onClick?: () => void;
  isActive?: boolean;
}

const NextArrow = ({ onClick, isActive = false }: ArrowProps) => (
  <button
    className={`btn-slick-next material-icons-outlined ${
      isActive ? "active-carousel" : ""
    }`}
    onClick={onClick}
  >
    arrow_back_ios
  </button>
);

const PrevArrow = ({ onClick, isActive = false }: ArrowProps) => (
  <button
    className={`btn-slick-prev material-icons-outlined ${
      isActive ? "active-carousel" : ""
    }`}
    onClick={onClick}
  >
    arrow_forward_ios
  </button>
);

interface CarouselProps {
  aspectRatio: string;
  slidesToShow: number;
  itemCount: number;
  slides: string[];
  borderRadius?: string;
  text?: string[];
}

const Carousel: React.FC<CarouselProps> = ({
  aspectRatio,
  slidesToShow,
  itemCount,
  slides,
  borderRadius,
  text
}) => {
  const [activeArrow, setActiveArrow] = useState<"prev" | "next" | null>(null);

  const handleArrowClick = (arrowType: "prev" | "next") => {
    setActiveArrow(arrowType);
  };

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: (
      <NextArrow
        isActive={activeArrow === "next"}
        onClick={() => handleArrowClick("next")}
      />
    ),
    prevArrow: (
      <PrevArrow
        isActive={activeArrow === "prev"}
        onClick={() => handleArrowClick("prev")}
      />
    ),
  };

  const items = Array.from({ length: itemCount }, (_, index) => (
    <div key={index} style={{ aspectRatio }}>
      <img style={{ borderRadius }} src={slides[index % slides.length]} alt={`Slide ${index + 1}`} />
      {text && text[index] && (
        <div className="slider-text">{text[index]}</div>
      )}
    </div>
  ));

  return <Slider {...settings}>{items}</Slider>;
};

export default Carousel;
