import { Link } from "react-router-dom";
import "./Hero.css";
import RestaurantFoodImage from "./assets/restauranfood.jpg";

const Hero = () => {
  return (
    <section className="hero">
    <div className="container grid">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link className="button-primary" aria-label="Reserve a Table" to='/reservations'>
          Reserve a Table
        </Link>
      </div>
        <img 
        src={RestaurantFoodImage} 
        className="hero-photo" 
        alt="chef holding tray">
        </img>
      </div>
    </section>
  );
};

export default Hero 
