import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../pages/availableListing.css"

const HeaderComponent = ({
  title = 'Available listings',
  priceLabel = 'Price',
  propertyTypeLabel = 'Property Type',
  weatherIcons = [],
  temperature = '30°',
  location = 'Kaduna, Nigeria',
  mapButtonLabel = 'Open Map',
  mapButtonBg = 'white',
  mapButtonColor = 'black',
  mapButtonLogo,
  navigatePath = '/searchbar/availablelistingmap',
  gaugeIcon,
  mark,
  cityPlaceholder = 'Choose a city',
  checkInPlaceholder = 'Check in',
  checkOutPlaceholder = 'Check out',
  guestPlaceholder = 'Guests',
  onSearch
}) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="right-section">
        <div className="logo">
          <h1 className="avail-header">{title}</h1>
        </div>
        <div className="proper" style={styles.properStyle}>
          <div className="proElement gap-1">
            <span className="price">{priceLabel}</span>
            <img src={mark} alt="mark" />
          </div>
          <div className="proElement gap-1">
            <span className="proType">{propertyTypeLabel}</span>
            <img src={mark} alt="mark" />
          </div>
        </div>

        <div className="weather" style={styles.weatherStyle}>
          <div className="weaImages" style={styles.weaImagesStyle}>
            {weatherIcons.map((icon, index) => (
              <img key={index} className="templogo" src={icon.src} alt={icon.alt} />
            ))}
            <span className="temp-text">{temperature}</span>
          </div>
          <div className="location" style={styles.locationStyle}>
            <span>{location}</span>
          </div>
        </div>

        <button className={`map-btn`} onClick={() => navigate(navigatePath, { state: '' })} style={{backgroundColor:`${mapButtonBg}`,color:`${mapButtonColor}`}}>
          {mapButtonLabel} <img className="btn-logo" src={mapButtonLogo} alt="btn-logo" />
        </button>
      </div>

      <div className="filters" style={styles.filtersStyle}>
        <div className="filterGuage">
          <span>$</span>
          <img id="guage" src={gaugeIcon} alt="gauge" />
          <span>N</span>
        </div>
        <div>
          <input className="fil-text" type="text" placeholder={cityPlaceholder} />
          <input id="fil-timeRight" type="text" placeholder={checkInPlaceholder} />
          <input id="fil-timeLeft" type="text" placeholder={checkOutPlaceholder} />
          <input className="guest-text" type="number" placeholder={guestPlaceholder} />
          <button style={styles.searchButtonStyle} onClick={onSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;

const styles = {
  properStyle: {
    width: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weatherStyle: {
    width: '20%',
  },
  weaImagesStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationStyle: {
    textAlign: 'center',
  },
  filtersStyle: {
    justifyContent: 'space-around',
  },
  searchButtonStyle: {
    height: '38px',
  },
};
