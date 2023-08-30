import ReviewCard from './ReviewCard';
import './Reviews.css';
import christinaImg from './assets/christina-avatar.jpeg';
import andreaImg from './assets/andrea-avatar.jpeg';

const Reviews = () => {

    const userReviews = [
        {
            name: 'Andrea',
            image: andreaImg, 
            rating: '⭐️⭐️⭐️⭐️⭐️',
            review: "Amazing!"
        },
        {
            name: 'Christina',
            image: christinaImg,
            rating: '⭐️⭐️⭐️⭐️⭐️',
        },
        {
            name: 'James',
            rating: '⭐️⭐️⭐️⭐️⭐️',
        },
        {
            name: 'James',
            rating: '⭐️⭐️⭐️⭐️⭐️',
        },
    ]


    return(
        <section className='reviews-section'>
        <div className='grid container'>
                <h2>The Reviews Are In!</h2>
                {userReviews.map((review, index) =>
                <ReviewCard key={index} reviews={review}/>
                )}
        </div>
        </section>
    )
}

export default Reviews;