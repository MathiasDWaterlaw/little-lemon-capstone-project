import "./AboutPage.css";
import marioAdrianA from "../assets/images/Mario and Adrian A.jpg";
import marioAdrianB from "../assets/images/Mario and Adrian b.jpg";

export default function AboutPage() {
  return (
    <main id='about' className='grid-3-system'>
      <div className='wrapper'>
        <div className='description-container'>
          <h1 className='h1 markazi'>Little Lemon</h1>
          <h2 className='h2 markazi'>Chicago</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div className='images-container'>
          <img
            src={marioAdrianA}
            alt='Mario and Adrian'
            className='marioAdrianA'
          />
          <img
            src={marioAdrianB}
            alt='Mario and Adrian'
            className='marioAdrianB'
          />
        </div>
      </div>
    </main>
  );
}
