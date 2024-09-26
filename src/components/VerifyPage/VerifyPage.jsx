
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import "./VerifyPage.css"

const VerifyPage = () => {
  const [code, setCode] = useState(new Array(4).fill(""));
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    setCode([...code.map((d, num) => (num === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    const enteredCode = code.join("");
    
    console.log("Entered Code:", enteredCode);
    navigate('/'); 
  };

  

  return (
    <div style={{minHeight:"95vh", display:"flex", alignItems:"center"}}>
      <div className="container">
        <header className="headerss">
          <h2>Confirm Your Phone Number</h2>
          <span><button className="close-button" onClick={() => navigate('/')}>Close <IoMdCloseCircleOutline /></button></span>
        </header>

        <span> <button className="back-button" onClick={() => navigate(-1)}> <IoChevronBackOutline />
        Back </button></span>

        <div className="content">
          <p>
            Enter the code we just sent to +2348172948113 • <span className="change-phone">Change Phone Number</span>
          </p>

          <div className="code-inputs">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                className="code-input"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>

          <p className="help-text">
            If you did not get a code, <Link to={"#"}>Click here </Link>so we can call you.
          </p>

          <button className="verify-button" onClick={handleSubmit}>Verify Number</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
