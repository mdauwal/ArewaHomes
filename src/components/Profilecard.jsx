// Card.js
import React from 'react';
import './Profilecard.css'; // Add your CSS for styling the card

const Profilecard = ({ imageUrl, title, location, unavailableUntil, imgurl }) => {
  return (
<div className="listing-item">
<div className="listing-image">
  <img src={imageUrl} alt={title} />
  {unavailableUntil && (
    <p className="listing-unavailable">
      Unavailable till {unavailableUntil}
    </p>
  )}
</div>
<div className="listing-details">
  <div>
  <h4>{title}</h4>
  <p><img src={imgurl} alt='loc'/>{location}</p>
  </div>
  <p className='rating-pa'>5 ★★★★★ ratings</p>
</div>
</div>
  );
};

export default Profilecard;
