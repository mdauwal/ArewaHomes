import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PiWarningCircleThin } from "react-icons/pi";
import { MdKeyboardArrowLeft } from "react-icons/md";

const ListingTypeDetails = () => {
  const [selectedType, setSelectedType] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);

    if (newValue.length > 0) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
  };


  useEffect(() => {
    if (location.state) {
      setSelectedType(location.state); 
    }
  }, [location.state]);


  const handleSelectChange = (event) => {
    setSelectedType(event.target.value); 
  };


  const handleSubmit = () => {
    console.log('Selected listing type:', selectedType);
    navigate("/form/leasetype")
  };

  return (
    <div className='flex justify-center '>
      <div className='cont max-w-[700px] md:w-[40%] border border-black mt-20 bg-white'>
        <div className='flex flex-row justify-between border-b border-b-gray-400 w-full p-5'>
          <p>Listing details</p>
          <div className='flex flex-row gap-1 items-center cursor-pointer' onClick={() => navigate(-1)}>
            <MdKeyboardArrowLeft />
            Back
          </div>
        </div>
        <div className='p-5 flex flex-col items-start'>
          <label className='my-4'>Select your type of listing:</label>
          <select
            value={selectedType}
            onChange={handleSelectChange}
            className='pl-4 text-black w-full border border-black h-12 transition-all outline-none cursor-pointer'
          >
            <option value=''>Select</option>
            <option value='apartment'>Apartment</option>
            <option value='housing'>House</option>
            <option value='workspace'>CoWorking Space</option>
          </select>
          <div className='text-start mt-10'>
            <p className='text-lg font-semibold'>Great!</p>
            <p>Is your property serviced?</p>
          
                <div className="flex items-center my-4">
                    <label className="flex items-center mr-6">
                    <input
                        type="radio"
                        value="yes"
                        checked={selectedOption === 'yes'}
                        onChange={handleOptionChange}
                        className="custom-radio h-5 w-5 border-black checked:bg-black checked:border-black focus:ring-0" // Tailwind for custom radio style
                    />
                    <span className="ml-2 text-black">Yes</span>
                    </label>

                    <label className="flex items-center">
                    <input
                        type="radio"
                        value="no"
                        checked={selectedOption === 'no'}
                        onChange={handleOptionChange}
                        className="form-radio h-4 w-4 text-black border-black focus:ring-0"
                    />
                    <span className="ml-2 text-black">No</span>
                    </label>
                </div>
            </div>
            <div className='flex flex-row gap-1 pt-2 pb-4'>
            <PiWarningCircleThin />
            <p className='text-left text-black w-full md:w-[75%]'>
            Service criteria - apartment must be fully serviced with at least,
            Water, 24hrs Light, Cable TV, and Security.
            </p>
          </div>

        </div>
        <div className='px-5 pt-6 pb-10'>
          <button className={`w-full p-3 ${disabled ? 'bg-gray-600' : 'bg-black'} text-white`} disabled={disabled} onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingTypeDetails;
