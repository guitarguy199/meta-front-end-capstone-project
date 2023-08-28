import Logo from "./assets/Logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid">
      <img src={Logo} alt="little lemon logo" className="footer-logo"></img>
      <ul className="footer-list">
        <li><strong>SITEMAP</strong></li>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Contact</li>
      </ul>
      <ul className="footer-list">
        <li><strong>CONTACT</strong></li>
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
      </ul>
      <ul>
        <li><strong>SOCIAL MEDIA</strong></li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>X</li>
        <li>Yelp</li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
