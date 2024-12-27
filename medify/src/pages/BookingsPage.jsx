import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HospitalSearch from "../components/HospitalSearch";
import OralHealthDay from "../assets/OralHealthDay.png";
import { Chip } from "@mui/material";
import Hospicon from "../assets/Hospicon.png";

//  Card Component
const Card = ({ date, email, hospitalName, time, city, state, type }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        margin: "20px 0",
        backgroundColor: "white",
        borderRadius: "8px",
        border: "1px solid #ccc",
        boxSizing: "border-box",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        width: "70vw",
        height: "250px",
      }}
    >
      {/* Hospital Icon and Details */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            height: "124px",
            width: "124px",
            borderRadius: "50%",
            backgroundColor: "#8ccfff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={Hospicon}
            alt="Hospital Icon"
            style={{ height: "80px", width: "80px" }}
          />
        </div>
        <div>
          <h2 style={{ color: "#007bff", margin: "0" }}>{hospitalName}</h2>
          <h5>
            <strong>
              {city}, {state}
            </strong>
          </h5>
          <p style={{ margin: "5px 0" }}>
            <em style={{ color: "#666", fontStyle: "italic" }}>{type}</em>
          </p>
          <p>
            <span
              style={{
                margin: "5px 0",
                color: "green",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              FREE
            </span>
            <span style={{ textDecoration: "line-through" }}> ₹500</span>{" "}
            Consultation fee at clinic
          </p>
        </div>
      </div>

      {/* Time and Date Chips */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8px",
          marginTop: "-100px",
        }}
      >
        <Chip
          label={time}
          style={{
            backgroundColor: "#e6f7ff",
            color: "#007bff",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        />
        <Chip
          label={date}
          style={{
            backgroundColor: "#e8f5e9",
            color: "#4caf50",
            fontWeight: "bold",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
};

function BookingsPage() {
  const [masterList, setMasterList] = useState([]);

  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setMasterList(stored);
    setDisplayList(stored);
  }, []);

  const handleFilter = (searchTerm) => {
    if (!searchTerm) {
      setDisplayList(masterList);
      return;
    }

    const lowerTerm = searchTerm.toLowerCase();
    const filtered = masterList.filter((item) => {
      // item.hospitalName, item.state, item.city, item.type
      return (
        (item.hospitalName || "").toLowerCase().includes(lowerTerm) ||
        (item.state || "").toLowerCase().includes(lowerTerm) ||
        (item.city || "").toLowerCase().includes(lowerTerm) ||
        (item.type || "").toLowerCase().includes(lowerTerm)
      );
    });
    setDisplayList(filtered);
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Header />
      {/* Top blue banner */}
      <div
        style={{
          width: "100vw",
          height: "100px",
          backgroundColor: "#2aa7ff",
          borderRadius: "0 0 20px 20px",
        }}
      >
        <h1
          style={{
            marginTop: "0px",
            paddingTop: "40px",
            paddingLeft: "10%",
            color: "white",
            fontFamily: "sans-serif",
          }}
        >
          My Bookings
        </h1>
      </div>

      {/* Search Component */}

      <HospitalSearch onFilter={handleFilter} />

      {/* Bookings and Image Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div>
          {displayList.length > 0 ? (
            displayList.map((booking, index) => (
              <Card
                key={`${booking.date}-${booking.time}-${index}`}
                date={booking.date}
                email={booking.email}
                hospitalName={booking.hospitalName}
                time={booking.time}
                city={booking.city}
                state={booking.state}
                type={booking.type}
              />
            ))
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
        <div>
          <img
            src={OralHealthDay}
            alt="Oral Health Day"
            style={{
              maxWidth: "300px",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BookingsPage;
