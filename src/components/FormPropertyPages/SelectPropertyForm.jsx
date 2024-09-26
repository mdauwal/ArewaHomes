
import React, { useState } from 'react';
import Select from 'react-select';
import './SelectForm.css';
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SelectPropertyForm = () => {
  // State for the form inputs
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const navigate = useNavigate()

  // Options for bedrooms and bathrooms
  const bedroomOptions = [
    { value: '1', label: '1 - Bedroom' },
    { value: '2', label: '2 - Bedrooms' },
    { value: '3', label: '3 - Bedrooms' },
    { value: '4', label: '4 - Bedrooms' },
  ];

  const bathroomOptions = [
    { value: '1', label: '1 - Bathroom' },
    { value: '2', label: '2 - Bathrooms' },
    { value: '3', label: '3 - Bathrooms' },
  ];

  // Options for amenities
  const amenityOptions = [
    { value: 'gym', label: 'Gym' },
    { value: 'concierge', label: 'Concierge' },
    { value: 'pool', label: 'Pool' },
    { value: 'parking', label: 'Parking' },
    { value: 'wifi', label: 'WiFi' },
  ];

  // Handlers for changing the form inputs
  const handleBedroomChange = (selectedOption) => {
    setBedrooms(selectedOption);
  };

  const handleBathroomChange = (selectedOption) => {
    setBathrooms(selectedOption);
  };

  const handleAmenitiesChange = (selectedOptions) => {
    setSelectedAmenities(selectedOptions);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      bedrooms,
      bathrooms,
      amenities: selectedAmenities,
    };
    console.log('Form Data:', formData);
    navigate("/searchbar/propertydescription")
  };

  return (
    <div className="property-form-container mt-20 bg-white" style={{marginTop:"60px"}}>
        <div className="header-text">
            <h2>Tell Us More About Your Property</h2>
            <button className="back-btn" onClick={() => navigate(-1)}> <FaAngleLeft />Back</button>
        </div>
        <div className="borderline"></div>

      <p className='para'>Just a few more details on your property <br /> and we will be all set.</p>

      <form onSubmit={handleSubmit} className='formselect'>
        {/* Bedrooms Selection */}
        <label htmlFor="bedrooms">NUMBER OF BEDROOMS</label>
        <Select 
        className='select-items'
          id="bedrooms"
          value={bedrooms}
          onChange={handleBedroomChange}
          options={bedroomOptions}
          placeholder=""
        />

        {/* Bathrooms Selection */}
        <label htmlFor="bathrooms">NUMBER OF BATHROOMS</label>
        <Select
          id="bathrooms"
          value={bathrooms}
          onChange={handleBathroomChange}
          options={bathroomOptions}
          placeholder=""
          className="amenities-select"
          closeMenuOnSelect={false}
        />

        {/* Amenities Selection */}
        <div className="multi-select-container">
      <label htmlFor="amenities">WHAT AMENITIES DO YOU HAVE AVAILABLE?</label>
      <Select
        id="amenities"
        isMulti
        value={selectedAmenities}
        onChange={handleAmenitiesChange}
        options={amenityOptions}
        placeholder=""
        className="amenities-select"
        closeMenuOnSelect={false}
      />
    </div>

        {/* Submit Button */}
        <button type="submit" className="continue-btn">Continue</button>
      </form>
    </div>
  );
};

export default SelectPropertyForm;
