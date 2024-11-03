import "./Header.css";
import image from "../../assets/images/restauranfood.jpg";
import Button from "./Button";

export default function Header() {
  return (
    <header className='grid-3-system'>
      <div className='wrapper'>
        <div className='hero-description'>
          <h1 className='markazi h1'>Little Lemon</h1>
          <h2 className='markazi h2'>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button>Reserve a Table</Button>
        </div>
        <img src={image} alt='restaurant food' />
      </div>
    </header>
  );
}
