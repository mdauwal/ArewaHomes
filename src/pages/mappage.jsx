import React, {lazy,Suspense} from 'react';
import { useNavigate } from 'react-router-dom';
import Listingcard from '../components/listingcard';
import img1 from "../svgs/partOne.svg";
import img2 from "../svgs/partTwo.svg";
import HeaderComponent from '../components/headercomponent';
import sunIcon from '../svgs/Sun.svg';
import tempIcon from '../svgs/temp.svg';
import skyIcon from '../svgs/sky.svg';
import buttonLogo from '../svgs/buttonLogo.svg';
import markIcon from "../svgs/mark.svg";
import gaugeIcon from '../svgs/guage.svg';
const Mapcomponent = lazy(()=>import('../components/mapcomponent'))

const weatherIcons = [
  { src: sunIcon, alt: 'sun' },
  { src: tempIcon, alt: 'temperature' },
  { src: skyIcon, alt: 'sky' },
];

const handleSearch = () => {
  // Add your search logic here
  console.log('Search clicked');
};
const listings = [
  {
    img: img1,
    price: "₦700,000",
    address: "White Square Estate - Kaduna, Nigeria",
    watchNum: "20",
    amenities: "5 Bedrooms • 3 Bathrooms • 3,339sqft • Swimming Pool",
    location: "Barnawa, Kaduna",
    available: true,
  },
  {
    img: img2,
    price: "₦850,000",
    address: "Luxury Apartments - Lagos, Nigeria",
    watchNum: "15",
    amenities: "3 Bedrooms • 2 Bathrooms • 2,500sqft • Gym",
    location: "Victoria Island, Lagos",
    available: true,
  },
]

const defaultLocations = [
  { address: 'No.4, Maha Close, Barnawa Kaduna', lat: '10.47661', lng: '7.43039' },
];
const MapPage = () => {
  const navigate = useNavigate()
  return (
    <div>
           <HeaderComponent
            weatherIcons={weatherIcons}
            mapButtonLogo={buttonLogo}
            gaugeIcon={gaugeIcon}
            mark={markIcon}
            onSearch={handleSearch}
            mapButtonBg='black'
            mapButtonColor='white'
            mapButtonLabel='Close Map'
            navigatePath = '/searchbar/availablelisting'
          />
          <div className="flex flex-col md:flex-row">
         
          <div className="w-full md:w-[40%] flex flex-row">
            {listings.map((listing, index) => (
                  <Listingcard
                    key={index}
                    img={listing.img}
                    price={listing.price}
                    address={listing.address}
                    watchNum={listing.watchNum}
                    amenities={listing.amenities}
                    location={listing.location}
                    onClick={() => navigate("/propertydetails/owner")}
                    available={listing.available}
                  />
                ))}
          </div>
          <div className="w-full md:w-[60%]">
            <Suspense fallback={<div>Loading....</div>}>
              <Mapcomponent  />
            </Suspense>
          </div>
        </div>
    </div>
  );
};

export default MapPage;
