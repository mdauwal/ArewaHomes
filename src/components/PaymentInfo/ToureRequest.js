import React, { useState } from "react";
import "./TourRequest.css";
import dotted from "../../svgs/dotted.svg";
import completed from "../../svgs/completed.svg";
import scheduled from "../../svgs/scheduled.svg";
import pending from "../../svgs/pending.svg";
import cancel from "../../svgs/canceled.svg";
import CalenderModal from "../Modals/CalenderModal.jsx";
import { FaBullseye } from "react-icons/fa6";
import TimeSelectionModal from "../Modals/TimeselectionModal.jsx";
import SuccessModal from "../Modals/SuccessModal.jsx";

const TenancyDetails = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTimeSelectionOpen, setTimeSelectionOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Function to toggle the dropdown visibility
  const data = [
    {
      id: 1,
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021",
      duration: "10am",
      type: "Tour Completed",
    },
    {
      id: 2,
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021",
      duration: "10am",
      type: "Tour Rescheduled",
    },
    {
      id: 3,
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021",
      duration: "10am",
      type: "Cancel",
    },
    {
      id: 4,
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021",
      duration: "10am",
      type: "Pending",
    },
    {
      id: 5,
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021",
      duration: "10am",
      type: "Cancel",
    },
  ];

  const toggleDropdown = (id) => {
    setDropdownVisible(isDropdownVisible === id ? null : id);
  };
  const handleOpenModal = () => {
    setIsModalVisible(true);
    setTimeSelectionOpen(false);
    setDropdownVisible(false);
  };

  const openTimeSelectionModal = () => {
    setIsModalVisible(false);
    setTimeSelectionOpen(true);
  };

  const handleProceed = () => {
    setTimeSelectionOpen(false);
    setShowSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setTimeSelectionOpen(false);
  };

  const imageMap = {
    "Tour Completed": completed,
    "Tour Rescheduled": scheduled,
    Pending: pending,
    Cancel: cancel,
  };
  const getStatusColor = (type) => {
    if (type.toLowerCase().includes("tour")) {
      return "#C3E7BE"; // for rendering color for short lease
    } else if (type.toLowerCase().includes("cancel")) {
      return "#E7C0BE"; // for rendering color for rent
    } else if (type.toLowerCase().includes("pending")) {
      return "#EBE7DE"; // Hex for other items
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
      </div>

      {/* Transactions Section */}
      <div className="transactions-list">
        {data.map((item, index) => {
          const imageToRender =
            imageMap[item.type] || "path-to-default-image.jpg";
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
                className="type-info"
                style={{
                  backgroundColor: getStatusColor(item.type), // Conditionally apply color
                }}
              >
                {" "}
                <img src={imageToRender} alt={item.type} /> {item.type}
              </div>
              <div
                className="dot-image"
                onClick={() => toggleDropdown(item.id)}
              >
                <img src={dotted} alt="dot" />
              </div>

              {/* Conditionally render card on top based on status */}
              {isDropdownVisible === item.id && (
                <div className={`absolute-card ${item.type.toLowerCase()}`}>
                  {item.type === "Tour Completed" && (
                    <div className="drop-menuu">
                      <ul>
                        <li onClick={handleOpenModal}>Reschedule tour date</li>
                        <li>Unmark tour completion</li>
                        <li>Cancel</li>
                      </ul>
                    </div>
                  )}
                  {item.type === "Tour Rescheduled" && (
                    <div className="drop-menuu">
                      <ul>
                        <li onClick={handleOpenModal}>Reschedule tour date</li>
                        <li>Unmark tour completion</li>
                        <li>Cancel</li>
                      </ul>
                    </div>
                  )}
                  {item.type === "Cancel" && (
                    <div className="drop-menuu">
                      <ul>
                        <li onClick={handleOpenModal}>Reschedule tour date</li>
                      </ul>
                    </div>
                  )}
                  {item.type === "Pending" && (
                    <div className="drop-menuu">
                      <ul>
                        <li onClick={handleOpenModal}>Reschedule tour date</li>
                        <li>Unmark tour completion</li>
                        <li>Cancel</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Modal for Rescheduling */}
      <CalenderModal
        show={isModalVisible}
        onClose={handleCloseModal}
        onNext={openTimeSelectionModal}
      />
      <TimeSelectionModal
        isOpen={isTimeSelectionOpen}
        onClose={handleCloseModal}
        onBack={handleOpenModal}
        onProceed={handleProceed}
      />
      <SuccessModal
        show={showSuccessModal}
        handleClose={handleCloseSuccessModal}
      />
    </div>
  );
};

export default TenancyDetails;
