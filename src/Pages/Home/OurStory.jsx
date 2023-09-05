import './OurStory.css';
import ownersImgA from './assets/Mario-Adrian-A.jpg';
import OwnersImgB from './assets/Mario-Adrian-B.jpg';
const OurStory = () => {
   return(
<section className='about'>
    <div className='container grid'>
       <div className='about-text'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At imperdiet dui accumsan sit amet nulla. Sit amet luctus venenatis lectus magna. Justo eget magna fermentum iaculis eu. Morbi leo urna molestie at elementum eu facilisis sed. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Dui accumsan sit amet nulla facilisi. Sem et tortor consequat id porta nibh. Vitae et leo duis ut diam. Quis imperdiet massa tincidunt nunc. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Porta non pulvinar neque laoreet. Tincidunt vitae semper quis lectus nulla at volutpat. Cursus in hac habitasse platea dictumst. Non nisi est sit amet facilisis magna etiam tempor. Egestas congue quisque egestas diam in. Neque convallis a cras semper auctor.</p>
       </div>
       <div className='about-images'>
        <img src={ownersImgA} alt="Mario and Adrian" />
        <img src={OwnersImgB} alt="Mario and Adrian" />
       </div>
    </div>
</section>
    );
}

export default OurStory;