import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const HospitalSearch = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-55px",
    marginLeft: "40vw",
    padding: "0 15px",
    width: "700px",
    height: "100px",
    backgroundColor: "white",
    borderRadius: "10px",
  };

  const inputStyle = {
    flex: "1",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#f9f9f9",
    color: "#555",
    marginRight: "10px",
    height: "40px",
  };

  const buttonStyle = {
    padding: "12px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#2aa7ff",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    height: "70px",
  };

  // Handle input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onFilter(searchTerm);
  };

  return (
    <div style={containerStyle}>
      {/* Input Field */}
      <input
        type="text"
        placeholder="Search By Hospital/State/City/Type"
        style={inputStyle}
        value={searchTerm}
        onChange={handleChange}
      />

      {/* Search Button */}
      <button style={buttonStyle} onClick={handleSearch}>
        <SearchIcon style={{ fontSize: "20px" }} />
        Search
      </button>
    </div>
  );
};

export default HospitalSearch;
