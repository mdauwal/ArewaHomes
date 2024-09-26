import React, { useState, useRef } from "react";
import "./Terms.css";
import back from "../../svgs/back.svg"

const Term = () => {
  const [agreed, setAgreed] = useState(false);
  const dotRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  // Mouse down event to start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  // Mouse move event to move the draggable dot
  const handleMouseMove = (e) => {
    if (isDragging) {
      const dot = dotRef.current;
      const containerHeight = window.innerHeight;
      const newTop = e.clientY - dot.offsetHeight / 2;

      // Ensure the dot stays within the window bounds
      if (newTop >= 0 && newTop <= containerHeight - dot.offsetHeight) {
        dot.style.top = `${newTop}px`;
      }
    }
  };

  // Mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Attach the mousemove and mouseup listeners to the window
  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="terms-container">
          <div className="terms-header">
            <h2 className="term-mainheader">Terms and Conditions</h2>
            <button className="back-button"><img className='back-btn' src={back} alt="can" />Back</button>
            </div>
      <div className="terms-content">
        <div className="draggable-border">
          <span
            className="draggable-dot"
            ref={dotRef}
            onMouseDown={handleMouseDown}
          ></span>
        </div>
        <div className="content-section">
          <p>
            Before proceeding with your payment, kindly read the terms and
            conditions.
          </p>
          <p>
            The General Data Protection Regulation (GDPR) applies to companies
            worldwide with EU users and directly affects the terms and
            conditions of your website
          </p>
          <p>
            The General Data Protection Regulation (GDPR) applies to companies
            worldwide with EU users and directly affects the terms and
            conditions of your website
          </p>
          <p>
            The General Data Protection Regulation (GDPR) applies to companies
            worldwide with EU users and directly affects the terms and
            conditions of your website
            The General Data Protection Regulation (GDPR) applies to companies
            worldwide with EU users and directly affects the terms and
            conditions of your websi
          </p>
          <p>
            The General Data Protection Regulation (GDPR) applies to companies
            worldwide with EU users and directly affects the terms and
            conditions of your website
            The General Data Protection Regulation (GDPR) applies to companies
            worldwide with EU users and directly affects the terms and
            conditions of your websi
          </p>
          <p>
          The General Data Protection Regulation (GDPR) applies to companies
            worldwide with EU users and directly affects the terms and
            conditions of your website
            The General Data Protection Regulation (GDPR) applies to companies
            worldwide with EU users and directly affects the terms and
            conditions of your websi
          </p>
          <p>
            The General Data Protection Regulation (GDPR) applies to companies
            worldwide with EU users and directly affects the terms and
            conditions of your website
            The General Data Protection Regulation (GDPR) applies to companies
            worldwide with EU users and directly affects the terms and
            conditions of your website
          </p>
        </div>
      </div>
      <div className="terms-footer">
        <div className="checkbox-section">
          <div className="i-agree">
            By selecting "I agree" below, I agree to the <span className="term-condition">Terms and Conditions.</span>
          </div>
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={handleCheckboxChange}
          />
        </div>
        <button className="continue-button" disabled={!agreed}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Term;

