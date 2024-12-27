import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import OralHealthLogo from "../assets/OralHealthDay.png";
import HospitalCard from "../components/HospitalCard";
import Downloads from "../assets/DownloadSection.png";
import Footer from "../assets/FooterSection.png";

const SearchPage = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [message, setMessage] = useState("Please select a state and city");
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios
      .get("https://meddata-backend.onrender.com/states")
      .then((response) => setStates(response.data))
      .catch((error) => console.error("Error fetching states:", error));
  }, []);

  useEffect(() => {
    if (selectedState) {
      axios
        .get(`https://meddata-backend.onrender.com/cities/${selectedState}`)
        .then((response) => setCities(response.data))
        .catch((error) => console.error("Error fetching cities:", error));
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const handleSearch = () => {
    if (!selectedState || !selectedCity) {
      setMessage("Please select both state and city");
      setHospitals([]);
      return;
    }

    axios
      .get(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
      )
      .then((response) => {
        if (response.data.length > 0) {
          setMessage(
            `${response.data.length} medical centers available in ${selectedCity}`
          );
          setHospitals(response.data);
          console.log("Hospitals data:", response.data);
        } else {
          setMessage("No medical centers found in the selected city.");
          setHospitals([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching medical centers:", error);
        setMessage("An error occurred while fetching medical centers.");
      });
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background:
          "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
      }}
    >
      <Header />

      {/* Search Section */}
      <div
        style={{
          background:
            "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
          padding: "20px",
          borderRadius: "8px",
          margin: "20px auto",
          width: "90%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* State Dropdown */}
          <select
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
            }}
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">State</option>
            {states.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          {/* City Dropdown */}
          <select
            style={{
              flex: 1,
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
            }}
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!selectedState}
          >
            <option value="">City</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* Search Button */}
          <button
            style={{
              backgroundColor: "#2aa7ff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Message & Hospitals Section */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            backgroundColor: "#f9f9f9",
            padding: "20px",
            borderRadius: "8px",
            margin: "20px auto",
            width: "90%",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#007bff" }}>{message}</h3>

          {/* Render Hospital Cards */}
          {hospitals.map((h) => (
            <HospitalCard
              key={h.id}
              name={h["Hospital Name"]}
              state={h.State}
              city={h.City}
              type={h["Hospital Type"]}
              rating={h["Hospital overall rating"]}
            />
          ))}
        </div>

        {/* Right-Side Image */}
        <div>
          <img
            style={{
              width: "100%",
              height: "auto",
            }}
            src={OralHealthLogo}
            alt="Oral Health Logo"
          />
        </div>
      </div>

      {/* Downloads Section */}
      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src={Downloads}
        alt="Downloads Section"
      />

      {/* Footer Section */}
      <img
        style={{
          width: "100%",
          height: "auto",
        }}
        src={Footer}
        alt="Footer Section"
      />
    </div>
  );
};

export default SearchPage;
