import "./TestimonialSection.css";
import TestimonialCard from "./TestimonialCard";

import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function TestimonialSection({ testimonialList }) {
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
    <section id='testimonials' className='grid-3-system'>
      <div className='wrapper'>
        <div className='section-header'>
          <h2 className='h2 markazi'>Testimonials</h2>
        </div>

        {windowWidth >= 992 ? (
          <div className='testimonials-card-container'>
            {testimonialList.map((item) => {
              return (
                <TestimonialCard
                  profilePic={item.img}
                  name={item.name}
                  nickname={item.nickname}
                  review={item.review}
                />
              );
            })}
          </div>
        ) : (
          <Slider {...settings}>
            {testimonialList.map((item) => {
              return (
                <TestimonialCard
                  profilePic={item.img}
                  name={item.name}
                  nickname={item.nickname}
                  review={item.review}
                />
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
}
