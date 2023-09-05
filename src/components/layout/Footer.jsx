import Logo from "./assets/logo-white.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faXTwitter, faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {

  const contacts = [
   { icon: faLocationDot, info: "675 Main St, Chicago, IL, 20345" },
   { icon: faPhone, info: '(312) 996-4545', },
   { icon: faEnvelope, info: 'info@littlelemon.com' }
  ]

  const socials = [
    { icon: faFacebook, name: 'Facebook' },
    { icon: faXTwitter, name: 'X' },
    { icon: faInstagram, name: 'instagram' },
    { icon: faYelp, name: 'yelp' }
  ]

  return (
    <footer className="footer">
      <div className="container grid">
      <Link className="footer-logo" to={'/'}>
      <img src={Logo} alt="little lemon logo"></img>
      </Link>
      <nav className="footer-list footer-sitemap">
        <h4>Sitemap</h4>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <div className="footer-list footer-contact">
        <h4>Contact us</h4>
        <ul>
          {contacts.map((contact, index) =>
          <p key={index}><FontAwesomeIcon icon={contact.icon} />{contact.info}</p>)}
        </ul>
      </div>
      <div className="footer-list footer-socials">
        <h4>Follow us</h4>
        <ul>
        {socials.map((social, index) => 
          <a 
          key={index}
          href={`https://www.{social.name}.com`}
          ><FontAwesomeIcon icon={social.icon} size="lg"/></a>
        )}
        </ul>
      </div>
      </div>
    </footer>
  );
};



export default Footer;
