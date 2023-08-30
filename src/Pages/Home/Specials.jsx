import "./Specials.css";
import greekSaladImage from './assets/greek salad.jpg';
import bruschettaImage from './assets/bruchetta.svg';
import lemonDessertImage from './assets/lemon dessert.jpg';
import SpecialsCard from "./SpecialsCard";

const Specials = () => {

    const specials = [
        {
            image: greekSaladImage,
            name: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our famous Chicago-style feta cheese, garnished with crunchy garlic and rosemary crutons. ",
        },
        {
            image: bruschettaImage,
            name: "Bruschetta",
            price: "$5.99",
            description: "Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        },
        {
            image: lemonDessertImage,
            name: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        },
    ]

  return (
    <section className="grid container week-specials">
      <div className="menu-heading">
        <h2>This week specials!</h2>
        <button className="button-primary">Online Menu</button>
      </div>
        {specials.map((special, index) =>
            <SpecialsCard key={index} meals={special} />
        )
        }
    </section>
  );
};

export default Specials;
