import React from "react";
import Navbar from "./Navbar";

function Header() {
  const style = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "#2aa7ff",
    fontFamily: "sans-serif",
    height: "40px",
  };

  return (
    <div>
      <div style={style}>
        <p>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </p>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
