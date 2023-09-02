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
        <button className="button-primary">Reserve a table</button>
      </div>
        <img 
        src={RestaurantFoodImage} 
        className="Hero-photo" 
        alt="chef holding tray">
        </img>
      </div>
    </section>
  );
};

export default Hero 
