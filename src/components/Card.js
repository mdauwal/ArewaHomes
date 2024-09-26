// Card.js
import React from 'react';
import '../pages/availableListing.css'; 
import watcheye from "../svgs/watcheye.svg";
import buttonlogo from "../svgs/buttonLogo.svg";

const Card = ({ image, title, price, details, location }) => {
  return (
    <div className="listing">
    <img className="listImg" src={image} alt={title} />
    <div className="pricee">
      <div className="price-details">STARTING FROM</div>
      <div className="price-price">{price}</div>
    </div>
    <div className="watch">
      <div className="watch-eye">
        <img id="wt-logo" src={watcheye} alt="watch" />
      </div>
      <div className="watch-num">20</div>
    </div>

    <div className="listing-details">
      <h3>Chill Marble Home - Kaduna, Nigeria</h3>
      <p>{details}</p>
      <p>
        <img id="btn-logo" src={buttonlogo} alt="btnlogo" />
        {location}
      </p>
      <button>View Listing</button>
    </div>
  </div>
    
  );
};

export default Card;
