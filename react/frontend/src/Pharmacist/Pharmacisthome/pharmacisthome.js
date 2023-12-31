import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../navigation';

const Pharmacisthome = () => {
  return (
    <>
  <Navigation />
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome, Pharmacist!</h1>
      <p style={styles.subtitle}>You have access to medication records and prescriptions.</p>
      <Link to="/Medicene" style={styles.button}>
        Go to Medicine Page
      </Link>
    </div>
    </>
  );
};

const styles = {
  container: {
    height: '30vh',
    textAlign: 'center',
    padding: '250px',
    backgroundImage: "url('https://img.freepik.com/free-photo/shopping-cart-with-pill-foils-copy-space_23-2148533453.jpg?w=900&t=st=1703775289~exp=1703775889~hmac=f41f2bc3adfcc4e2b7690453e6fb219d78c6477e7f5afb8f95afda07e7ca6a51')", // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'transparent',
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

export default Pharmacisthome;