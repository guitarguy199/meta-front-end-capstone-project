/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SpecialsCard.css"
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SpecialsCard = ({ meals }) => {
    return (
        <article className="specials-card">
        <div className="specials-img">
            <img src={meals.image} alt={meals.name}></img>
        </div>
        <div className="specials-card-heading">
        <h3>{meals.name}</h3>
        <span>{meals.price}</span>
        </div>
        <div className="specials-footer">
        <p>{meals.description}</p>
        <Link to={"/order-online"} aria-label="Order Delivery">Order Delivery <FontAwesomeIcon icon={faMotorcycle} aria-hidden="true" /></Link>
        </div>
        </article>
    );
}

export default SpecialsCard;