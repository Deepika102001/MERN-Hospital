import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';

const Frontofficehome = () => {
  return (
    <>
    <Navigation />
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome, Receptionist!</h1>
      <p style={styles.subtitle}>You have access to appointment schedules and patient information.</p>
      <Link to="/Frontdoctorslist" style={styles.button}>
        See Doctors
      </Link>
    </div>
    </>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '300px',
    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1676320103087-4aec0a09088f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJvbnQlMjBkZXNrfGVufDB8fDB8fHww')", // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'transparent', // Set to transparent to allow the background image to be visible
  },
  title: {
    fontSize: '24px',
    color: '#333',
  },
  subtitle: {
    fontSize: '18px',
    color: '#555',
  },
  button: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#4CAF50', // Green button color
    color: '#fff',
    textDecoration: 'none', // Remove default link styling
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default Frontofficehome;