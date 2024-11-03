import Button from "../Button";
import DishCard from "./DishCard";

import "./SpecialSection.css";

export default function SpecialsSection({ dishList }) {
  return (
    <section id='week-specials' className='grid-3-system'>
      <div className='wrapper'>
        <div className='section-header'>
          <h2 className='h2 markazi'>This week's Specials</h2>
          <Button>Online Menu</Button>
        </div>

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
      </div>
    </section>
  );
}
