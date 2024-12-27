import React from "react";
import { Link } from "react-router-dom";
import MedifyLogo from "../assets/MedifyLogo.png";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <Link to="/">
          <img src={MedifyLogo} alt="logo" />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "30px",
          paddingRight: "20px",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <a>Find Doctors</a>
        <Link
          to="/search"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <a>Hospitals</a>
        </Link>
        <a>Medicines</a>
        <a>Surgeries</a>
        <a>Software for Providers</a>
        <a>Facilities</a>
        <Link to="/my-bookings">
          <button
            style={{
              color: "white",
              backgroundColor: "#2aa7ff",
              padding: "15px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            My Bookings
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
