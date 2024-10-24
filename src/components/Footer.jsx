import footerLogo from "../assets/logo/footer_logo.png";

export default function Footer() {
  return (
    <footer>
      <img src={footerLogo} />

      <ul id='doormat-navigation'>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Menu</a>
        </li>
        <li>
          <a href=''>Reservation</a>
        </li>
        <li>
          <a href=''>Order Online</a>
        </li>
        <li>
          <a href=''>Login</a>
        </li>
      </ul>

      <ul id='Contact'>
        <li>
          <a href=''>Address</a>
        </li>
        <li>
          <a href=''>Phone</a>
        </li>
        <li>
          <a href=''>Email</a>
        </li>
      </ul>

      <ul id='social-media'>
        <li>
          <a href=''>Facebook</a>
        </li>
        <li>
          <a href=''>Instagram</a>
        </li>
        <li>
          <a href=''>TikTok</a>
        </li>
      </ul>
    </footer>
  );
}
