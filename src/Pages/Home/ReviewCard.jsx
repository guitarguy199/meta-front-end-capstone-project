/* eslint-disable react/prop-types */
import './ReviewCard.css';

const ReviewCard = ({ reviews }) => {
    return(
        <article className='review-card'>
            <div className='review-content'>
                <img src={reviews.image} />
                <h3>{reviews.name}</h3>
                <p>{reviews.rating}</p>
                <p>{reviews.review}</p>
            </div>
        </article>
    )
}

export default ReviewCard;