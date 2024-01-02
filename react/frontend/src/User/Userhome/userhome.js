import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from "../navigation";

const userHomeContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: "url('https://png.pngtree.com/background/20230613/original/pngtree-hospital-room-with-a-bed-and-desk-inside-the-room-picture-image_3418826.jpg')", // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  
};

const homeContentStyle = {
  textAlign: 'center',
  maxWidth: '600px',
  padding: '70px',
  borderRadius: '20px',
  boxShadow: '0 0 60px black',
  backdropFilter:' blur(20px)'
};

const headingStyle = {
  fontSize: '28px',
  marginBottom: '15px',
  color: 'black',
};

const paragraphStyle = {
  fontSize: '16px',
  marginBottom: '10px',
  color: 'black', // Color value should be a string, 'black' in this case
};

const buttonStyle = {
  backgroundColor: '#fff',
  color: '#007bff',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  textDecoration: 'none',
};

const Userhome = () => {
  return (
    <>
      <Navigation />
      <div className="d1"></div>
      <div style={userHomeContainerStyle}>
        <div style={homeContentStyle}>
          <h1 style={headingStyle}>Welcome to MEDZONE Hospital</h1>
          <p style={paragraphStyle}>
          In this hospital, we strive to provide the best healthcare services
            to our patients.
          </p>
          <p style={paragraphStyle}>
            
          </p>
          <Link to="/Doctorlist" style={{ textDecoration: 'none' }}>
            <button style={buttonStyle}>List of Doctors</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Userhome;
