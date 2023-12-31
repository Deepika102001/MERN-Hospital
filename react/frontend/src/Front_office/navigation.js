import React from "react";
import "./navigation.css";
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

  const navigationStyle = {
    display: "flex",
    gap: "60px", // Add a gap of 20px between navigation links
    textDecoration: "none", // Remove text decoration for links
    justifyContent: "center",
    marginRight: "10%",
    color: "#fff",
  };

  const logoutLinkStyle = {
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <div style={navContainerStyle}>
      <h1 style={h1Style}>FRONT OFFICE</h1>
      <div style={navigationStyle}>
        <Link to="/Frontofficehome" style={logoutLinkStyle}>
          HOME
        </Link>
        <Link to="/Apporve" style={logoutLinkStyle}>
          APPROVE
        </Link>
        <Link to="/Book" style={logoutLinkStyle}>
          BOOK
        </Link>
        <Link to="/Frontdoctorslist" style={logoutLinkStyle}>
          DOCTOR LIST
        </Link>
        <Link to="/ViewAll" style={logoutLinkStyle}>
          PATIENTS LIST
        </Link>
        {/* <Link to="/ViewAll" style={logoutLinkStyle}>
          View All
        </Link> */}
        <Link to="/FrontOfficeProfile" style={logoutLinkStyle}>
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