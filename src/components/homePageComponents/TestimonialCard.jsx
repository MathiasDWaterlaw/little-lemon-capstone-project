import "./TestimonialCard.css";
import star from "../../assets/icons/star.png";

export default function TestimonialCard({
  profilePic,
  name,
  nickname,
  review,
}) {
  return (
    <div className='testimonial-card'>
      {/* <div className='container'> */}
      <div className='rating'>
        <img src={star} alt='star' className='star' />
        <img src={star} alt='star' className='star' />
        <img src={star} alt='star' className='star' />
        <img src={star} alt='star' className='star' />
        <img src={star} alt='star' className='star' />
      </div>
      <div>
        <div className='profile'>
          <img
            src={profilePic}
            alt={`${name} profile pic`}
            className='profile-pic'
          />
          <div className='profile-name'>
            <p className='name'>{name}</p>
            <p className='nickname'>~{nickname}</p>
          </div>
        </div>
        <div className='review'>
          <p>"{review}"</p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
