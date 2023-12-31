import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const navContainerStyle = {
    backgroundImage: "url('https://example.com/your-image.jpg')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundColor: "#14213d", // Blue background color
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const h1Style = {
    margin: "20px",
    fontSize: "34px",
  };



  const logoStyle = {
    margin: "0",
    fontSize: "14px",
  };

  const navlinksStyle = {
    // display: "flex",
  };

  const navLinkStyle = {
    margin: "0 90px", // Add space between links using margin
    
    color: "#fff",
    textDecoration: "none",
  };

  const navButtonStyle = {
    // margin: "0",
    // padding: "10px",
    // color: "#fff",
    // backgroundColor: "#1565c0", // Blue button color
    // borderRadius: "15px",
    // border: "none",
    // textDecoration: "none",
    // cursor: "pointer",
  };

  return (
    <div style={navContainerStyle}>
      <div style={logoStyle}>
        <h1>PHARMACIST</h1>
      </div>
      <div style={navlinksStyle}>
        <Link to="/Pharmacisthome" style={navLinkStyle}>
          HOME
        </Link>
        <Link to="/PharmaProfile" style={navLinkStyle}>
        EDIT PROFILE
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "red" }}>
          LOGOUT
        </Link>
      </div>
    </div>
  );
};

export default Navigation;