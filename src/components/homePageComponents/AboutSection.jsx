import "./AboutSection.css";
import marioAdrianA from "../../assets/images/Mario and Adrian A.jpg";
import marioAdrianB from "../../assets/images/Mario and Adrian b.jpg";

export default function AboutSection() {
  return (
    <section id='about' className='grid-3-system'>
      <div className='wrapper'>
        <div className='description-container'>
          <h2 className='h2 markazi'>Little Lemon</h2>
          <h3 className='h3 markazi'>Chicago</h3>
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
    </section>
  );
}
