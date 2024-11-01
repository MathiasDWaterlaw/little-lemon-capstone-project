import Header from "./Header";
import Button from "./Button";
import "./HomePage.css";

import DishCard from "./DishCard";

import greekSalad from "../assets/images/greek salad.jpg";
import bruschetta from "../assets/images/bruchetta.svg";
import lemonDessert from "../assets/images/lemon dessert.jpg";

import deniz from "../assets/images/deniz.png";
import jon from "../assets/images/jon.png";
import olivia from "../assets/images/Olivia.png";
import sara from "../assets/images/sara.png";

const dishList = [
  {
    img: greekSalad,
    name: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "12.99",
  },
  {
    img: bruschetta,
    name: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "5.99",
  },
  {
    img: lemonDessert,
    name: "Lemon Dessert",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "5.00",
  },
];

const testimonialList = [
  {
    img: sara,
    name: "Sara Lopez",
    nickname: "Sara72",
    review: "Seriously cannot stop thinking about the Turkish Man n' Cheese!!",
  },
  {
    img: jon,
    name: "Jon Do",
    nickname: "JohnnyDo",
    review: "We had such a great time celebrating my grandmother's birthday!",
  },
  {
    img: olivia,
    name: "Olivia Pope",
    nickname: "Olivia_P",
    review: "Best Fate Salad in town. Flawless everytime!",
  },
  {
    img: deniz,
    name: "Deniz Kaplan",
    nickname: "Danny_K123",
    review: "Such a chilled out atmosphere, love it!",
  },
];

export default function HomePage() {
  return (
    <div id='home-page'>
      <Header />
      <main>
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

        <section id='testimonials' className='grid-3-system'>
          <div className='wrapper'>
            <div className='section-header'>
              <h2 className='h2 markazi'>Testimonials</h2>
            </div>

            <div className='testmionials-card-container'></div>
          </div>
        </section>

        <section id='about'></section>
      </main>
    </div>
  );
}
