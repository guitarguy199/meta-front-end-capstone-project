/* eslint-disable react/prop-types */
import './ReviewCard.css';

const ReviewCard = ({ reviews }) => {
    return(
        <article className='review-card'>
            <div className='leading-row'>
                <h2>{reviews.review}</h2>
                <img src={reviews.image} />
                <p>{reviews.rating}</p>
            </div>
            <div className='trailing-row'>
                <h3>{reviews.name}</h3>
            </div>
        </article>
    )
}

export default ReviewCard;