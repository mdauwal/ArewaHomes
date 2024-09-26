

import { AiOutlineExclamationCircle } from "react-icons/ai"
import React, { useState } from 'react';
import './ListingDetails.css';

const ListingDetails = () => {
  const [owner, setOwner] = useState('');
  const [agent, setAgent] = useState('');
  const [file, setFile] = useState(null);

  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  };

  const handleAgentChange = (e) => {
    setAgent(e.target.value);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      owner,
      agent,
      file,
    };
    console.log('Form Data:', formData);
  };

  return (
    <div className="listing-page-container">
      <div className="header-container">
        <h2>Listing Details</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="listing-form">
        <div className="form-group">
          <label>Are you the primary owner of this property?</label>
          <div className="radio-group">
            <label>
              <input 
                type="radio" 
                value="yes"
                checked={owner === 'yes'}
                onChange={handleOwnerChange}
              />
              Yes
            </label>
            <label>
              <input 
                type="radio" 
                value="no"
                checked={owner === 'no'}
                onChange={handleOwnerChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Are you a certified estate agent?</label>
          <div className="radio-group">
            <label>
              <input 
                type="radio" 
                value="yes"
                checked={agent === 'yes'}
                onChange={handleAgentChange}
              />
              Yes
            </label>
            <label>
              <input 
                type="radio" 
                value="no"
                checked={agent === 'no'}
                onChange={handleAgentChange}
              />
              No
            </label>
          </div>
          {agent === 'yes' && (
            <div className="upload-proof">
              <label htmlFor="file-upload" className="upload-btn">
                Upload
              </label>
              <input 
                id="file-upload" 
                type="file" 
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </div>
          )}
        </div>

        <div className="form-group">
        <span className="criteria-icon">
        <AiOutlineExclamationCircle />
          <p className="service-criteria">
            Service criteria - apartment must be fully serviced with at least, <br /> Water, 24hrs Light, Cable TV, and Security.
          </p> </span>
        </div>

        <button type="submit" className="continue-btn">
          Continue
        </button>
      </form>
    </div>
  );
};

export default ListingDetails;
