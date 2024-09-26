import React, { useContext, useEffect, useState } from "react";
import "./availableListing.css";
import mark from "../svgs/mark.svg";
import sun from "../svgs/Sun.svg";
import temp from "../svgs/temp.svg";
import sky from "../svgs/sky.svg";

import guage from "../svgs/guage.svg";
import buttonlogo from "../svgs/buttonLogo.svg";
import { useNavigate } from "react-router-dom";
import Listingcard from "../components/listingcard";
import { AppContext } from "../store/store";

  

const Shortstay = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredListings, setFilteredListings] = useState([]);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [apartmentType, setApartmentType] = useState('');
  const [houseType, setHouseType] = useState('');
  const [workSpaceType, setWorkSpaceType] = useState('');
  const {listings} = useContext(AppContext);

  useEffect(()=>{
    setFilteredListings(listings)
  },[listings])
 
  const navigate = useNavigate();

  const handleApartmentType = (e)=>{
    setApartmentType(e.target.value);
  }

  const handleHouseType = (e) => {
    setHouseType(e.target.value);
  };

  const handleWorkSpaceType = (e) => {
    setWorkSpaceType(e.target.value);
  };
  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };


  const handleSearch = (e)=>{
    const value = e.target.value.trim();
    setSearchValue(value);

    if(value){

      const filtered = listings.filter(item=> item.location.toLowerCase().includes(value.toLowerCase())
        
      //   {

      //   const isPriceMatch = !isNaN(value) && price.toString().includes(value);
      //   const isLocationMatch = location.toLowerCase().includes(value);

      // // Return true if either price or location matches
      // return isPriceMatch || isLocationMatch;
      // }
        
      )
      setFilteredListings(filtered)
    }else{
      setFilteredListings(listings)
    }

  }

  return (
    <div>
      <div className="">
        <div className="header">
          <div className="right-section">
            <div className="logo">
              <h1 className="avail-header">Short stays near you</h1>
            </div>
            <div className="proper w-full sm:w-1/2 flex flex-col sm:flex-row justify-between px-4 py-2 relative">
              {/* Price Section */}
              <div className="proElement flex items-center space-x-2">
                <span className="price text-lg">Price</span>
                <img src={mark} alt="mark" className="w-4 h-4" />
              </div>

              {/* Property Type Section */}
              <div className="proElement flex flex-col relative">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={toggleInfo}
                >
                  <span className="proType text-lg">Property Type</span>
                  <img src={mark} alt="mark" className="w-4 h-4 ml-2" />
                </div>

                {/* Toggleable Info Section */}
                {isInfoVisible && (
                   <div className="info absolute top-full mt-2 left-0 p-4 rounded-lg shadow-lg bg-white w-full md:w-[400px] z-10 text-left">
                   <div className="mb-4 font-bold">What type of property are you interested in?</div>
                 
                   {/* Apartment Type */}
                   <div className="flex flex-col justify-start mb-4">
                     <div className="font-bold">Apartment Type:</div>
                     <label>
                       <input 
                         type="radio" 
                         value="serviced" 
                         checked={apartmentType === 'serviced'}
                         onChange={handleApartmentType}
                       />
                       Serviced
                     </label>
                     <label>
                       <input 
                         type="radio" 
                         value="unserviced" 
                         checked={apartmentType === 'unserviced'}
                         onChange={handleApartmentType}
                       />
                       Unserviced
                     </label>
                   </div>
                 
                   {/* House Type */}
                   <div className="flex flex-col justify-start mb-4">
                     <div className="font-bold">House Type:</div>
                     <label>
                       <input 
                         type="radio" 
                         value="Duplex" 
                         checked={houseType === 'Duplex'}
                         onChange={handleHouseType}
                       />
                       Duplex
                     </label>
                     <label>
                       <input 
                         type="radio" 
                         value="Bungalow" 
                         checked={houseType === 'Bungalow'}
                         onChange={handleHouseType}
                       />
                       Bungalow
                     </label>
                     <label>
                       <input 
                         type="radio" 
                         value="Townhouse" 
                         checked={houseType === 'Townhouse'}
                         onChange={handleHouseType}
                       />
                       Townhouse
                     </label>
                     <label>
                       <input 
                         type="radio" 
                         value="Container" 
                         checked={houseType === 'Container'}
                         onChange={handleHouseType}
                       />
                       Container
                     </label>
                     <label>
                       <input 
                         type="radio" 
                         value="Mansion" 
                         checked={houseType === 'Mansion'}
                         onChange={handleHouseType}
                       />
                       Mansion
                     </label>
                   </div>
                 
                   {/* WorkSpace Type */}
                   <div className="flex flex-col justify-start mb-4">
                     <div className="font-bold">WorkSpace Type:</div>
                     <label>
                       <input 
                         type="radio" 
                         value="Co-working" 
                         checked={workSpaceType === 'Co-working'}
                         onChange={handleWorkSpaceType}
                       />
                       Co-working
                     </label>
                     <label>
                       <input 
                         type="radio" 
                         value="Private office" 
                         checked={workSpaceType === 'Private office'}
                         onChange={handleWorkSpaceType}
                       />
                       Private office
                     </label>
                   </div>
                 
                   {/* Clear and Save Buttons */}
                   <div className="flex justify-between items-center">
                     <button 
                       onClick={() => {
                         setApartmentType('');
                         setHouseType('');
                         setWorkSpaceType('');
                       }}
                     >
                       Clear
                     </button>
                     <button className="bg-[#219653] text-white px-4 py-1 rounded">
                       Save
                     </button>
                   </div>
                 </div>
                 
                )}
              </div>
            </div>
            <div className="weather" style={{width:"20%", }}>
              <div className="weaImages" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <img className="templogo" src={sun} alt="sunicon" />
                <img className="templogo" src={temp} alt="sunicon" />
                <img className="templogo" src={sky} alt="sunicon" />
                <span className="temp-text">30°</span>
              </div>
              <div className="location" style={{textAlign:"center" }}>
                <span>Kaduna, Nigeria</span>
              </div>
            </div>
            <button className="map-btn">
              Open Map <img className="btn-logo" src={buttonlogo} alt="btnl" />
            </button>
          </div>
          <div className="filters" style={{justifyContent:"space-around"}}>
            <div className="filterGuage">
              <span>$</span>
              <img id="guage" src={guage} alt="guage" />
              <span>N</span>
            </div>
            <div>
              <input
                className="fil-text"
                type="text"
                placeholder="Choose a city"
                onChange={handleSearch}
                value={searchValue}
              />
              {/* <select>
                <option>Choose a city</option>
                <option>Kaduna</option>
                <option>Abuja</option>
                <option>Kano</option>
              </select> */}
              <input id="fil-timeRight" type="text" placeholder="Check in" />
              <input id="fil-timeLeft" type="text" placeholder="Check out" />
              <input className="guest-text" type="number" placeholder="Guests" />
              <button style={{height:"38px"}}>Search</button>
            </div>
          </div>
        </div>

        <div className="listings-grid">
          {filteredListings?.map((listing, index) => (
            <Listingcard
              key={index}
              img={listing.img}
              price={listing.price}
              address={listing.address}
              watchNum={listing.watchNum}
              amenities={listing.amenities}
              location={listing.location}
              onClick={() => navigate("/propertydetails")}
              available={listing.available}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Shortstay