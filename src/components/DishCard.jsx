import basketIcon from "../assets/icons/Basket.svg";
import "./DishCard.css";

export default function DishCard({ img, name, description, price }) {
  return (
    <div className='dish-card'>
      <div className='card-hero'>
        <img src={img} alt={name} />
      </div>

      <div className='card-body'>
        <div>
          <div className='card-header'>
            <h3 className='h3 markazi'>{name}</h3>
            <p className='price'>${price}</p>
          </div>
          <p className='card-description'>{description}</p>
        </div>

        {/* <div className='card-footer'> */}
        <a href='#' className='card-footer'>
          Order a delivery
          <i>
            <img src={basketIcon} alt='basket-icon' className='icon' />
          </i>
        </a>
        {/* </div> */}
      </div>
    </div>
  );
}
