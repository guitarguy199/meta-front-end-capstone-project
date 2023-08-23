import Logo from "../assets/Logo.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={Logo}></img>
      <ul className="nav-links">
        <div className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
