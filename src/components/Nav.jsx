import logo from "../assets/logo/Logo.svg";

export default function Nav() {
  return (
    <nav>
      <img src={logo} />
      <ul>
        <li id='home'>
          <a href=''>HOME</a>
        </li>
        <li id='about'>
          <a href=''>ABOUT</a>
        </li>
        <li id='menu'>
          <a href=''>MENU</a>
        </li>
        <li id='reservation'>
          <a href=''>RESERVATION</a>
        </li>
        <li id='order-online'>
          <a href=''>ORDER ONLINE</a>
        </li>
        <li id='login'>
          <a href=''>LOGIN</a>
        </li>
      </ul>
    </nav>
  );
}
