import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";

const LeaseType = () => {
  const [selectedType, setSelectedType] = useState('');
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

  const handleSubmit = () => {
    console.log('Selected lease type:', selectedType);
    navigate("/form/uploadimages")
  };

  return (
    <div className='flex justify-center '>
      <div className='cont max-w-[700px] md:w-[40%] border border-black mt-20 bg-white'>
        <div className='flex flex-row justify-between border-b border-b-gray-400 w-full p-5'>
          <p>Select a preferred lease term for your property.</p>
          <div className='flex flex-row gap-1 items-center cursor-pointer' onClick={() => navigate(-1)}>
            <MdKeyboardArrowLeft />
            Back
          </div>
        </div>
        <div className='p-5 flex flex-col items-start'>
          <select
            value={selectedType}
            onChange={handleSelectChange}
            className='pl-4 text-black w-full border border-black h-12 transition-all outline-none cursor-pointer'
          >
            <option value=''>Select Lease type</option>
            <option value='lease'>Short Lease</option>
            <option value='rent'>Rent</option>
          </select>
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

export default LeaseType;
