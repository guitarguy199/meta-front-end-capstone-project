import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="little lemon logo"></img>
      <ul>
        <li>Doormat Navigation</li>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li>Contact</li>
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
      </ul>
      <ul>
        <li>Social Media Links</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>X</li>
        <li>Yelp</li>
      </ul>
    </footer>
  );
};

export default Footer;
