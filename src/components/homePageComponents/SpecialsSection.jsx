import Button from "./Button";
import DishCard from "./DishCard";

import { useEffect, useState } from "react";

import "./SpecialSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SpecialsSection({ dishList }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const settings = {
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    boxShadow: "none",
    centerMode: true,
    adaptiveHeight: true,
    className: "slider",
  };

  return (
    <section id='week-specials' className='grid-3-system'>
      <div className='wrapper'>
        <div className='section-header'>
          <h2 className='h2 markazi'>This week's Specials</h2>
          <Button>Online Menu</Button>
        </div>

        {windowWidth >= 992 ? (
          <div className='dish-card-container'>
            {dishList.map((dish) => {
              return (
                <DishCard
                  img={dish.img}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                />
              );
            })}
          </div>
        ) : (
          // <div className='dish-card-container'></div>
          <Slider {...settings}>
            {dishList.map((dish) => {
              return (
                <DishCard
                  img={dish.img}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                />
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
}
