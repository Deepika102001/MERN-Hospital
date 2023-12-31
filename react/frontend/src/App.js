import { Link } from "react-router-dom";

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "nowrap",
    backgroundImage:
      "url('https://png.pngtree.com/background/20230605/original/pngtree-hospital-room-with-numerous-beds-and-medical-equipment-picture-image_2875161.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensure full height
    padding: "20px", // Adjust padding as needed
  };

  const cardStyle = {
    textAlign: "center",
    padding: "40px",
    background: "#2ec4b6", // Adjust background color and opacity
    borderRadius: "10px",
    width: "200px", // Set card width
  };

  const imageStyle = {
    width: "130px", // Set image width
    height: "140px", // Set image height
    backgroundSize: "cover",
    borderRadius: "50%",
    margin: "0 auto 10px", // Center the image vertically and add space at the bottom
  };

  return (
    <>
      <div style={containerStyle}>
        {/* Doctor */}
        <div style={cardStyle}>
          <div
            className="img"
            style={{
              ...imageStyle,
              backgroundImage:
                "url('https://b.kisscc0.com/20180705/bqe/kisscc0-physician-doctor-of-medicine-computer-icons-downlo-doctor-5b3e48c8bdada8.2417379115308085207769.png')",
            }}
          ></div>
          <h3>DOCTOR</h3>
          <div className="button">
            <Link to="/Doctorlogin">
              <button id="login-btn" className="signin">
                Login
              </button>
            </Link>
          </div>
        </div>
        {/* Front Office */}
        <div style={cardStyle}>
          <div
            className="img"
            style={{
              ...imageStyle,
              backgroundImage:
                "url('https://cdn4.iconfinder.com/data/icons/VISTA/business/png/400/receptionist.png')",
            }}
          ></div>
          <h3>FRONT OFFICE</h3>
          <div className="button">
            <Link to="/FofficeLogin">
              <button id="login-btn" className="signin">
                Login
              </button>
            </Link>
          </div>
        </div>
        {/* Patient */}
        <div style={cardStyle}>
          <div
            className="img"
            style={{
              ...imageStyle,
              backgroundImage:
                "url('https://clipart-library.com/data_images/12685.png')",
            }}
          ></div>
          <h3>PATIENT</h3>
          <div className="button">
            <Link to="/UserLogin">
              <button id="login-btn" className="signin">
                Login
              </button>
            </Link>
          </div>
        </div>
        {/* Pharmacist */}
        <div style={cardStyle}>
          <div
            className="img"
            style={{
              ...imageStyle,
              backgroundImage:
                "url('https://icons.iconarchive.com/icons/icons-land/vista-people/256/Medical-Pharmacist-Male-Light-icon.png')",
            }}
          ></div>
          <h3>PHARMACIST</h3>
          <div className="button">
            <Link to="/PharmacistLogin">
              <button id="login-btn" className="signin">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
