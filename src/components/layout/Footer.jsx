import Logo from "../../assets/Logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="little lemon logo" className="logo"></img>
      <ul className="footer-list">
        <li><strong>Doormat Navigation</strong></li>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Contact</li>
      </ul>
      <ul className="footer-list">
        <li><strong>Contact</strong></li>
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
      </ul>
      <ul>
        <li><strong>Social Media Links</strong></li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>X</li>
        <li>Yelp</li>
      </ul>
    </footer>
  );
};

export default Footer;
