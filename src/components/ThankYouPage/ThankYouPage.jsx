import React from 'react';
import './ThankYouPage.css'; 
import { MdOutlineGppGood } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const ThankYouPage = () => {
const navigate = useNavigate()
  return (
    <div className="thank-you-container" style={{marginTop:"50px"}}>
      <div className="thank-you-content">
        <div className="icon-img">
        <p><MdOutlineGppGood />  </p>  
        </div>
        <p className="message">
          Your payment has been <br /> completed and it is being held in <br /> our secure escrow until all parties <br /> have been satisfied.
        </p>
        <button className="return-home-btn" onClick={()=>{navigate("/base")}}>
          Thank You! Return Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
