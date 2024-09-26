import React from 'react';
import reschedule from "../../svgs/Reschedule.svg";

const SuccessModal = ({ show, handleClose }) => {
  if (!show) return null;

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
      <img style={iconStyle} src={reschedule} alt="can" />
        <h2>An email has been sent out</h2>
        <h2>to reschedule the tour</h2>
        <button style={buttonStyle} onClick={handleClose}>
          Thank You
        </button>
      </div>
    </div>
  );
};

// CSS styles for the modal
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  textAlign: 'center',
  width: '550px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const iconStyle = {
  fontSize: '50px',
  marginBottom: '20px',
};

const buttonStyle = {
  backgroundColor: '#000000', 
  color: '#fff',
  padding: '10px 80px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
};

export default SuccessModal;
