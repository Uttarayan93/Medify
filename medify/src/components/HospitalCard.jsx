import React, { useState } from "react";
import Hospicon from "../assets/Hospicon.png";
import thumbs from "../assets/thumbsup.png";
import SlotBooking from "./SlotBooking";

const HospitalCard = ({ name, state, city, type, rating }) => {
  const [showSlots, setShowSlots] = useState(false);

  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "20px",
    margin: "20px 0",
    background: "white",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    width: "100%",
    position: "relative",
  };

  const slotContainerStyle = {
    position: "relative",
    width: "100%",
    marginTop: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    border: "1px solid #ccc",
    padding: "20px",
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Main Hospital Card */}
      <div style={cardStyle}>
        {/* Hospital Icon */}
        <div
          style={{
            height: "124px",
            width: "124px",
            borderRadius: "50%",
            backgroundColor: "#8ccfff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <img
            style={{ height: "80px", width: "80px" }}
            src={Hospicon}
            alt="Hospital Icon"
          />
        </div>

        {/* Hospital Details */}
        <div style={{ textAlign: "left", flex: "1", paddingLeft: "16px" }}>
          <h2 style={{ color: "#007bff", margin: "0" }}>{name}</h2>
          <p>{type}</p>
          <span>
            <strong>
              {city}, {state}
            </strong>
          </span>
          <p style={{ margin: "8px 0" }}>
            <span style={{ color: "green" }}>
              <strong>FREE</strong>
            </span>{" "}
            <span style={{ textDecoration: "line-through" }}>$500</span>{" "}
            Consultation fee at clinic
          </p>
          <div
            style={{
              backgroundColor: "green",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px",
              borderRadius: "4px",
              width: "fit-content",
            }}
          >
            <img
              src={thumbs}
              alt="Thumbs Up"
              style={{ width: "20px", height: "20px" }}
            />
            <span style={{ color: "white", fontSize: "16px" }}>{rating}</span>
          </div>
        </div>

        {/* Toggle Button */}
        <div style={{ paddingTop: "8px", flexShrink: 0 }}>
          <button
            style={{
              height: "40px",
              width: "200px",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              backgroundColor: "#007bff",
              fontSize: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => setShowSlots(!showSlots)}
          >
            {showSlots ? "Hide Booking Calendar" : "Show Booking Calendar"}
          </button>
        </div>
      </div>

      {/* Booking Slot Container */}
      {showSlots && (
        <div style={slotContainerStyle}>
          <SlotBooking
            hospitalName={name}
            city={city}
            state={state}
            type={type}
            onBookingConfirmed={(hospitalName, date, time) =>
              console.log(
                `Booking confirmed for ${hospitalName} on ${date} at ${time}`
              )
            }
          />
        </div>
      )}
    </div>
  );
};

export default HospitalCard;
