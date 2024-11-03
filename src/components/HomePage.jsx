import Header from "./homePageComponents/Header";

import SpecialsSection from "./homePageComponents/SpecialsSection";
import TestimonialSection from "./homePageComponents/TestimonialSection";
import AboutSection from "./homePageComponents/AboutSection";

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
    <main id='home-page'>
      <Header />
      <SpecialsSection dishList={dishList} />
      <TestimonialSection testimonialList={testimonialList} />
      <AboutSection />
    </main>
  );
}
