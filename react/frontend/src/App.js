import { Link } from "react-router-dom";

function App() {
  const landingContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between", 
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center",
    backgroundImage: "url('https://t3.ftcdn.net/jpg/06/12/89/52/360_F_612895290_5m4XeQsdmekGhrRlgId6HB3jfPkKvzwq.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  };

  const getStartedButtonStyle = {
    padding: "20px 30px",
    fontSize: "16px",
    borderRadius: "5px",
    background: "#2ec4b6",
    border: "3px solid white",
    color: "#fff",
    textDecoration: "none",
    margin: "20px",
  };

  const headerStyle = {
    fontSize: "6rem",
    marginBottom: "20px",
    backgroundColor: "#023047",
    padding: "20px 50px",
    borderRadius: "10px",
    border: "3px solid #2ec4b6",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backdropFilter:"blur(20px)"
  };

  const contentBoxStyle = {
    width: "300px",
    height: "200px",
    background: "#fff",
    border: "3px solid #2ec4b6",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    transition: "background-color 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const contactInfoStyle = {
    width: "200px",
    height: "100px",
    background: "#fff",
    border: "3px solid #2ec4b6",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    transition: "transform 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const handleHover = (event) => {
    event.target.style.backgroundColor = "#023047";
    event.target.style.color = "#fff";
    event.target.style.transform = "scale(1.05)";
  };

  const handleHoverExit = (event) => {
    event.target.style.backgroundColor = "#fff";
    event.target.style.color = "#000";
    event.target.style.transform = "scale(1)";
  };

  return (
    <div style={landingContainerStyle}>
      <div>
        <div> <h1 style={headerStyle}> MedZone</h1>
        <h4 style={{backgroundColor:"#023047",padding:"20px", borderRadius: "8px",border: "3px solid #2ec4b6",}}>Explore our healthcare services and manage your medical needs.</h4><br></br><br></br>
         </div>
        
        <Link to="/landing" style={getStartedButtonStyle}>
          Get Started
        </Link>
<br></br><br></br>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {/* Online Appointments */}
          <div
            style={{ ...contentBoxStyle }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
          >
            <h2>Online Appointments</h2>
            <p>Book appointments with ease.Schedule appointments conveniently from anywhere. .</p>
          </div>

          {/* Pharmacy */}
          <div
            style={{ ...contentBoxStyle }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
          >
            <h2>Pharmacy</h2>
            <p>Order medicines online. Purchase the Medicenes conveniently from anywhere..</p>
          </div>

          {/* Additional Service */}
          <div
            style={{ ...contentBoxStyle }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
          >
            <h2>Our Services</h2>
            <p>Additional service description. Explore our comprehensive healthcare services..</p>
          </div>
        </div>
      </div>

      {/* Contact Info at the bottom */}
      <div
        style={{ ...contactInfoStyle }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverExit}
      >
        <h3>Contact Information</h3>
        <p>Email: info@medzone.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </div>
  );
}

export default App;
