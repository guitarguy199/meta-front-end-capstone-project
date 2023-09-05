/* eslint-disable react/prop-types */
import './ReviewCard.css';

const ReviewCard = ({ reviews }) => {
    return(
        <article className='review-card'>
                <img src={reviews.image} alt={reviews.name} />
                <h3>{reviews.name}</h3>
                <p>{reviews.rating}</p>
                <p>{reviews.review}</p>
        </article>
    )
}

export default ReviewCard;