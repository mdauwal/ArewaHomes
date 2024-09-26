import React from "react";
import './PaymentForm.css';
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



const PaymentForm = () => {
  const navigate = useNavigate()
  return (
    <div className="payment-container">
      <div className="payment-header">
        <h2>Pay with card</h2>
        <span> <button className="back-link" onClick={()=>{navigate(-1)}}> <IoChevronBackOutline />
            Back </button></span>
      </div>
      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="cardName">NAME ON CARD</label>
          <input type="text" id="cardName" className="input-field" placeholder="Osamudiamen Imasuen" />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input type="text" id="cardNumber" className="input-field" placeholder="5399 4823 4299 9421 4992" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expDate">EXP</label>
            <input type="text" id="expDate" className="input-field small-input" placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" className="input-field small-input" placeholder="---" />
          </div>
        </div>
        <button type="submit" className="pay-button" onClick={()=>{navigate("/form/paymentmade")}}>Pay</button>
      </form>
    </div>
  );
};

export default PaymentForm;
