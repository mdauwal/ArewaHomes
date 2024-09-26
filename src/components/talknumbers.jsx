import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiWarningCircleThin } from "react-icons/pi";
// import { FaNairaSign } from 'react-icons/fa'; 

const TalkNumbers = ({ rate = "1.7%" }) => {
  const [selectedType, setSelectedType] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [calculatedAmount, setCalculatedAmount] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedType(newValue);

    if (newValue.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/,/g, ''); // Remove commas
    if (!isNaN(inputValue) && inputValue.trim() !== "") {
      const numericValue = parseFloat(inputValue);
      const rateValue = parseFloat(rate.replace('%', '')) / 100;
      const remainder = numericValue - numericValue * rateValue;
      setInputValue(numericValue.toLocaleString()); // Reformat with commas
      setCalculatedAmount(remainder.toLocaleString()); // Format the remainder with commas
    } else {
      setInputValue('');
      setCalculatedAmount('');
    }
  };

  const handleSubmit = () => {
    console.log('Selected lease type:', selectedType);
    navigate(-1);
  };

  return (
    <div className='flex justify-center'>
      <div className='cont max-w-[700px] md:w-[40%] border border-black mt-20 bg-white'>
        <div className='flex flex-row justify-between border-b border-b-gray-400 w-full p-5'>
          <p>Let’s talk Numbers</p>
          <div className='flex flex-row gap-1 items-center cursor-pointer' onClick={() => navigate(-1)}>
            <MdKeyboardArrowLeft />
            Back
          </div>
        </div>

        <div className='p-5 flex flex-col items-start'>
          <p className='text-left'>A beautiful home such as yours comes with a fair price.</p>
          <p>So how much will it be?</p>
          
          {/* Price Input Field */}
          <label className='py-3'>Price</label>
          <div className="relative w-full">
            <span className="absolute left-3 top-3 text-gray-500 text-lg">₦</span>
            <input
              type='text'
              value={inputValue}
              onChange={handleInputChange}
              className='peer pl-8 text-black w-full border border-black h-12 transition-all outline-none placeholder-gray-400 focus-visible:outline-none disabled:cursor-not-allowed'
              placeholder="Enter amount"
            />
          </div>

          {/* Calculation Information */}
          <div className='flex flex-col md:flex-row pt-2 pb-4 justify-between w-full'>
            <div className='flex flex-row gap-1'>
              <PiWarningCircleThin />
              <p className='text-[16px] text-black'>
                Our service charge is <span className='text-green-600'>{rate}</span> of the rent.
              </p>
            </div>  
            <div>
              <p className='text-green-600'>
                You receive: {calculatedAmount ? `₦${calculatedAmount}` :'₦0.00' }
              </p>
            </div>
            
          </div>
        </div>

        {/* Duration Selection */}
        <div className='p-5 flex flex-col items-start'>
          <label>Duration</label>
          <select
            value={selectedType}
            onChange={handleSelectChange}
            className='pl-4 text-black w-full border border-black h-12 transition-all outline-none cursor-pointer'
          >
            <option value=''></option>
            <option value='year'>Per Year</option>
            <option value='month'>Per Month</option>
            <option value='week'>Per Week</option>
            <option value='day'>Per Day</option>
          </select>
        </div>

        {/* Continue Button */}
        <div className='px-5 pt-6 pb-10'>
          <button 
            className={`w-full p-3 ${disabled ? 'bg-gray-600' : 'bg-black'} text-white`} 
            disabled={disabled} 
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalkNumbers;
