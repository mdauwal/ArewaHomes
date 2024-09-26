import React from "react";
import "./TenancyDetails.css";
import dotted from "../../svgs/dotted.svg";

const TenancyDetails = () => {
  const data = [
    {
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021 - Feb 20th, 2022",
      duration: "1 Year",
      type: "Rent",
      amount: "₦700,000",
    },
    {
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021 - Feb 21th, 2021",
      duration: "1 Night",
      type: "Short Lease",
      amount: "₦45,000",
    },
    {
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021 - Feb 20th, 2022",
      duration: "1 Year",
      type: "Rent",
      amount: "₦700,000",
    },
    {
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021 - Feb 21th, 2021",
      duration: "1 Night",
      type: "Short Lease",
      amount: "₦45,000",
    },
    // Add more data entries here as needed
  ];
  const getStatusColor = (type) => {
    if (type.toLowerCase().includes("short")) {
      return "#DEDEEB"; // for rendering color for short lease
    } else if (type.toLowerCase().includes("rent")) {
      return "#EBE7DE"; // for rendering color for rent
    } else if (type.toLowerCase().includes("Others")) {
      return "#FF0000"; // Hex for other items
    }
    return "yellow"; // Default gray for unknown status
  };

  return (
    <div className="tenancy-details">
      {/* Header Section */}
      <div className="header-section">
        <div className="filter-section">
          <label>Sort By</label>
          <br />
          <select>
            <option>All</option>
          </select>
        </div>
        <div className="total-amounts">
          <div className="total-made">
            <h4>Total Amount Made</h4>
            <p>₦14,000,000.00</p>
          </div>
          <div className="total-withdrawal">
            <div>
              <h4>Total Amount Withdrawable</h4>
              <p>₦8,900,000.00</p>
            </div>
            <div className="amount-image">
              <img src={dotted} alt="dot" />
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="transactions-list">
        {data.map((item, index) => {
          return (
            <div key={index} className="transaction-item">
              <div className="property-info">
                <h4>{item.property}</h4>
                <p>{item.location}</p>
              </div>
              <div
                className="property-info"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <h4>{item.renter}</h4>
                <p>
                  {item.contact} | {item.email}
                </p>
              </div>

              <div className="lease-info">
                <h4>{item.leasePeriod}</h4>
                <p>{item.duration}</p>
              </div>
              <div
                style={{
                  backgroundColor: getStatusColor(item.type), // Conditionally apply color
                }}
                className="type-info"
              >
                {item.type}
              </div>
              <div id="price-info">
                <p>{item.amount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TenancyDetails;
