import "./TestimonialSection.css";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection({ testimonialList }) {
  return (
    <section id='testimonials' className='grid-3-system'>
      <div className='wrapper'>
        <div className='section-header'>
          <h2 className='h2 markazi'>Testimonials</h2>
        </div>

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
      </div>
    </section>
  );
}
