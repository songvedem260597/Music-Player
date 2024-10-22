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
    className={`btn-slick-next material-icons-outlined ${isActive ? "active-carousel" : ""}`}
    onClick={onClick}
  >
    arrow_back_ios
  </button>
);

const PrevArrow = ({ onClick, isActive = false }: ArrowProps) => (
  <button
    className={`btn-slick-prev material-icons-outlined ${isActive ? "active-carousel" : ""}`}
    onClick={onClick}
  >
    arrow_forward_ios
    
  </button>
);

interface CarouselProps {
  aspectRatio: string;
  slidesToShow: number;
  itemCount: number;
  slides: string[]; // Add slides as a prop
}

const Carousel: React.FC<CarouselProps> = ({ aspectRatio, slidesToShow, itemCount, slides }) => {
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
      <NextArrow isActive={activeArrow === "next"} onClick={() => handleArrowClick("next")} />
    ),
    prevArrow: (
      <PrevArrow isActive={activeArrow === "prev"} onClick={() => handleArrowClick("prev")} />
    ),
  };

  // Dynamically generate the number of items based on itemCount
  const items = Array.from({ length: itemCount }, (_, index) => (
    <div key={index} style={{ aspectRatio }}>
      <img src={slides[index % slides.length]} alt={`Slide ${index + 1}`} />
    </div>
  ));

  return <Slider {...settings}>{items}</Slider>;
};

export default Carousel;
