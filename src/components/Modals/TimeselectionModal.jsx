import React, { useState } from "react";
import "./TimeselectionModal.css";
import cancel from "../../svgs/Cancel.svg";
import back from "../../svgs/back.svg";

const TimeSelectionModal = ({ isOpen, onClose, onBack, onProceed }) => {
  const [agreed, setAgreed] = useState(false);
  if (!isOpen) return null;
  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  return (
    <div className="modal-contain">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Book a Physical Tour</h2>
          <button onClick={onClose} className="modal-close-button">
            Close
            <img className="can-button" src={cancel} alt="can" />
          </button>
        </div>
        <div className="modal-body">
          <div className="back">
            <button className="back-button" onClick={onBack}>
              <img className="back-btn" src={back} alt="can" />
              Back
            </button>
          </div>
          <div className="pick">
            <h3>
              <span className="bold">Step 2/3:</span>
              <br /> Pick a new available time.
            </h3>
            <p>
              <span className="bold">Wednesday,</span>
              <br /> Jan 17th 2021
            </p>
          </div>
          <div id="radio-body">
            <label className="labelsss">
              <input
                type="radio"
                name="time"
                value="11:00am"
                checked={agreed}
                onChange={handleCheckboxChange}
              />{" "}
              11:00am
            </label>
            <label className="labelsss">
              <input
                type="radio"
                name="time"
                value="2:00am"
                checked={agreed}
                onChange={handleCheckboxChange}
              />{" "}
              02:00am
            </label>
            <label className="labelsss">
              <input
                type="radio"
                name="time"
                value="4:00am"
                checked={agreed}
                onChange={handleCheckboxChange}
              />{" "}
              04:00am
            </label>
            <label className="labelsss">
              <input
                type="radio"
                name="time"
                value="6:00am"
                checked={agreed}
                onChange={handleCheckboxChange}
              />{" "}
              06:00am
            </label>
          </div>
          <button onClick={onProceed} className="proceed-button" disabled={!agreed}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimeSelectionModal;
