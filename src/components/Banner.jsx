import "./Banner.css";
import Photo from "../assets/restauranfood.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container text-box">
        <h1 className="heading">Little Lemon</h1>
        <h2 className="subheading">Chicago</h2>
        <p className="description">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-button">Reserve a table</button>
      </div>
      <div className="photo-box">
        <img src={Photo} className="photo" alt="chef holding tray"></img>
      </div>
    </section>
  );
};

export default Banner;
