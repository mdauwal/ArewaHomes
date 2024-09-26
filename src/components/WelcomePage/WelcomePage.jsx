
import React from "react";
import { useNavigate } from "react-router-dom";
import './WelcomePage.css'; 


const WelcomePage = () => {
  const navigate = useNavigate();

  const handleUpdateProfile = () => {

    navigate("/base/profile");
  };


  return (
    <div className="container-wrap">
      <div className="content-box">
        <div className="icon-upload">
          <span className="upload-icon">🖼️</span>
        </div>
        <h1 className="title">You Are All Set.</h1>
        <h2 className="subtitle">Welcome Once Again To RealHubAfrica</h2>
        <p className="description">
          What's next? You can update your profile or <br /> explore our listings.
        </p>
        <button className="update-button" onClick={handleUpdateProfile}>
          Update Profile
        </button>
        <button className="explore-button" onClick={()=>navigate("/base")}>
          Skip for now, let me explore
        </button>
      </div>
      </div>
  );
};

export default WelcomePage;
