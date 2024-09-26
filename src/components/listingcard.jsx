import React from 'react'
import "../pages/availableListing.css";
import watcheye from "../svgs/watcheye.svg";
import buttonlogo from "../svgs/buttonLogo.svg";
const Listingcard = ({img,price,watchNum, address, amenities, location, available = true ,onClick}) => {
  return (
    <div className="listing cursor-pointer" onClick={onClick}>
            <img className="listImg" src={img} alt="Listing" />
            <div className="pricee">
              <div className="price-details">STARTING FROM</div>
              <div className="price-price">{price}</div>
            </div>
            <div className={`avail ${available ? "hidden" : ""}`}>
                 Unavailable till 27th june 2021
            </div>
            <div className="watch">
              <div className="watch-eye">
                <img id="wt-logo" src={watcheye} alt="watch" />
              </div>
              <div className="watch-num">{watchNum}</div>
            </div>

            <div className="listing-details">
              <h3>{address}</h3>
              <p>{amenities}</p>
              <p>
                <img id="btn-logo" src={buttonlogo} alt="btnlogo" />
                {location}
              </p>
              <button>View Listing</button>
            </div>
          </div>
  )
}

export default Listingcard