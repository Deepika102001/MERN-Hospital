// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#14213d',
    color: '#fff',
    padding: '40px 20px',
    textAlign: 'center',
  };

  
  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    margin: '0 30px',
    fontSize: '18px',
  };

  const iconStyle = {
    fontSize: '24px',
    margin: '0 10px',
    color: '#fff',
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mt-3 mb-3">
            <h1 style={{ fontWeight: 'bold', fontSize: '20px' }}>@ MED-ZONE</h1>
            <p>Providing Quality Healthcare Services</p><br></br>
          </div>
          <div className="col-lg-4 mt-3 mb-3">
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
            <Link to="/privacy" style={linkStyle}>Privacy & Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
