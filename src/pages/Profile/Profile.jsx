// Profile.js
import React from 'react';
import './Profile.css';
import mdprofile from '../../svgs/mdprofile.jpg';
import profileone from "../../svgs/profilelistone.svg"
import profiletwo from "../../svgs/profilelisttwo.svg"
import profilethree from "../../svgs/profilelistthree.svg"
import profilefour from "../../svgs/profilelistfo.svg"
import buttonlogo from "../../svgs/buttonLogo.svg";

const Profile = () => {

  const profileData = {
    name: "Muhammad Auwal",
    rating: 5.0,
    reviews: 500,
    profileImage: mdprofile,
    listings: [
      {
        id: 1,
        title: "Millenuim City Estate",
        location: "Millenium City, Kaduna",
        rating: 5.0,
        imageUrl: profileone,
        unavailableUntil: "27th January 2025",
      },
      {
        id: 2,
        title: "Sarauta Residences",
        location: "Kawo New-Extension, Kaduna",
        rating: 5.0,
        imageUrl: profiletwo,
      },
      {
        id: 3,
        title: "Mando Supreme Villa",
        location: "Mando, Kaduna",
        rating: 5.0,
        imageUrl: profilethree,
      },
      {
        id: 4,
        title: "NDC Housing Estate",
        location: "NDC Layout, Kaduna",
        rating: 5.0,
        imageUrl: profilefour,
      }
    ]
  };

  return (
    <div className="profile-container">
      <h1 className='profile-head'>Profile</h1>
      <div className="profile-header">
        <div className="profile-info">
        <img
          src={profileData.profileImage}
          alt="profile"
          className="profile-image"
        />
          <div>
          <h2>{profileData.name}</h2>
          <div className="profile-rating">
            <p className='starating'>{profileData.rating}★★★★★<span className='rating'>ratings</span></p>
          </div>
          <button className="message-button">Send a Message</button>
          </div>
        </div>
        <div className="profile-reviews">
        <h3>Rate {profileData.name}</h3>
        <div className="rating-stars">★★★★★</div>
        <p>{profileData.reviews} people reviewed {profileData.name}</p>
      </div>
      </div>

      <h3 className="listings-title">Listings</h3>

      <div className="listings-grid">
        {profileData.listings.map((listing) => (
          <div className="listing-item" key={listing.id}>
            <div className="listing-image">
              <img src={listing.imageUrl} alt={listing.title} />
              {listing.unavailableUntil && (
                <p className="listing-unavailable">
                  Unavailable till {listing.unavailableUntil}
                </p>
              )}
            </div>
            <div className="listing-details">
              <div>
              <h4>{listing.title}</h4>
              <p><img src={buttonlogo} alt='loc'/>{listing.location}</p>
              </div>
              <p className='rating-pa'>{listing.rating} ★★★★★ ratings</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

