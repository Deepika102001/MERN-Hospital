import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';

const doctorHomeContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  color: '#fff',
  backgroundImage: `url('https://img.freepik.com/free-photo/doctor-showing-virtual-brain-her-hand_1134-641.jpg?size=626&ext=jpg&uid=R132177475&ga=GA1.1.168018476.1697816342&semt=ais')`, // Replace 'path_to_your_image.jpg' with the actual path to your image
  backgroundSize: 'cover', // Adjusts the image size to cover the container
  backgroundPosition: 'center', // Centers the image within the container
};


const homeContentStyle = {
  textAlign: 'center',
  maxWidth: '600px',
  padding: '20px',
  borderRadius: '10px',
  // boxShadow: '0 0 60px #4CAF50',
  backgroundColor: '#118ab2', // Green background color
};

const headingStyle = {
  fontSize: '28px',
  marginBottom: '15px',
};

const paragraphStyle = {
  fontSize: '16px',
  marginBottom: '10px',
};

const buttonStyle = {
  backgroundColor: '#fff',
  color: '#4CAF50', // Green button color
  padding: '12px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  textDecoration: 'none',
};

const DoctorHome = () => {
  return (
    <>
      <Navigation />
      <div style={doctorHomeContainerStyle}>
        <div style={homeContentStyle}>
          <h1 style={headingStyle}>Welcome, Doctor!</h1>
          <p style={paragraphStyle}>
            You have access to your medical records and appointments.
          </p>
          <Link to="/Doctorappointment" style={{ textDecoration: 'none' }}>
            <button style={buttonStyle}>Go to Appointments</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoctorHome;