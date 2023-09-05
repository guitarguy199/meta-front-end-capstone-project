import ReviewCard from './ReviewCard';
import './Reviews.css';
import christinaImg from './assets/christina-avatar.jpeg';
import andreaImg from './assets/andrea-avatar.png';
import johnImg from './assets/john.jpeg';
import tonyaImg from './assets/tonya.jpeg';

const Reviews = () => {

    const userReviews = [
        {
            name: 'Andrea',
            image: andreaImg, 
            rating: '⭐️⭐️⭐️⭐️⭐️',
            review: "The dedication to the quality and presentation really shows in every bite. I'll be back!"
        },
        {
            name: 'Christina',
            image: christinaImg,
            rating: '⭐️⭐️⭐️⭐️⭐️',
            review: 'The smoked feta gyro wrap was to die for!'
        },
        {
            name: 'John',
            image: johnImg,
            rating: '⭐️⭐️⭐️⭐️',
            review: 'Best Mediterranean food on this side of the pond.'
        },
        {
            name: 'Tonya',
            image: tonyaImg,
            rating: '⭐️⭐️⭐️⭐️⭐️',
            review: 'You HAVE to try the garlic toum with pita. Unreal.'
        },
    ]


    return(
        <section className='reviews-section'>
        <div className='container grid'>
                <h2>The Reviews Are In!</h2>
                {userReviews.map((review, index) =>
                <ReviewCard key={index} reviews={review}/>
                )}
        </div>
        </section>
    )
}

export default Reviews;