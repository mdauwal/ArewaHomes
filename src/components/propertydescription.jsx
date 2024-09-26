import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";

const PropertyDescription = () => {
  const [propertyDescription, setPropertyDescription] = useState('');
  const [policyRestrictions, setPolicyRestrictions] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  // Handle changes in both textareas and enable the button if either has content
  const handleTextareaChange = (event, setter) => {
    const newValue = event.target.value;
    setter(newValue);

    if (newValue.length > 0 || propertyDescription.length > 0 || policyRestrictions.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleSubmit = () => {
    console.log('Property Description:', propertyDescription);
    console.log('Policy / Restrictions:', policyRestrictions);
    navigate("/form");
  };

  return (
    <div className='flex justify-center '>
      <div className='cont max-w-[700px] md:w-[40%] border border-black mt-20 bg-white'>
        <div className='flex flex-row justify-between border-b border-b-gray-400 w-full p-5'>
          <p>Other Property Information / Policy</p>
          <div className='flex flex-row gap-1 items-center cursor-pointer' onClick={() => navigate(-1)}>
            <MdKeyboardArrowLeft />
            Back
          </div>
        </div>
        
        {/* Property Description Text Area */}
        <div className='p-5 flex flex-col items-start'>
          <label htmlFor="property-description" className='pb-2'>Property Description</label>
          <textarea
            id="property-description"
            value={propertyDescription}
            onChange={(e) => handleTextareaChange(e, setPropertyDescription)}
            placeholder="Start typing here..."
            className='pl-4 pt-2 text-black w-full border border-black h-32 resize-none outline-none'
          />
        </div>
        
        {/* Policy / Restrictions Text Area */}
        <div className='p-5 flex flex-col items-start'>
          <label htmlFor="policy-restrictions" className='pb-2'>Policy / Restrictions</label>
          <textarea
            id="policy-restrictions"
            value={policyRestrictions}
            onChange={(e) => handleTextareaChange(e, setPolicyRestrictions)}
            placeholder="Start typing here..."
            className='pl-4 pt-2 text-black w-full border border-black h-32 resize-none outline-none'
          />
        </div>

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

export default PropertyDescription;
