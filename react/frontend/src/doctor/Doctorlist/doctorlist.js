import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../User/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const DoctorList = () => {
  const [hovered, setHovered] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const indianDoctors = [
    // ... (Your doctor data remains unchanged)
    {
      id: 1,
      name: "Dr. Rakesh Sharma",
      specialty: "Cardiologist",
      visitationDays: "Monday, Thursday",
      visitationHours: "9:00 AM - 1:00 PM",
      consultationFee: "₹1000",
      profilePhoto:
        "https://media.gettyimages.com/id/1298800629/photo/portrait-of-confident-male-doctor-looking-at-camera.jpg?s=612x612&w=0&k=20&c=CB3h3a-0yUBgaZHhF2Kd5ibfDv25Qcjsca-ia5gIWUM=",
    },
    {
      id: 2,
      name: "Dr. Priya Patel",
      specialty: "Dermatologist",
      visitationDays: "Tuesday, Friday",
      visitationHours: "10:00 AM - 3:00 PM",
      consultationFee: "₹1200",
      profilePhoto:
        "https://img.freepik.com/premium-photo/young-female-doctor-front-view-wearing-coat-stethoscope-around-neck-indian-pakistani-model_561639-131.jpg?size=626&ext=jpg&ga=GA1.1.1006640822.1703530111&semt=ais",
    },
    {
      id: 3,
      name: "Dr. Raj Kumar",
      specialty: "Orthopedic Surgeon",
      visitationDays: "Wednesday, Saturday",
      visitationHours: "11:00 AM - 4:00 PM",
      consultationFee: "₹1500",
      profilePhoto:
        "https://media.gettyimages.com/id/1446041217/photo/portrait-of-smiling-male-doctor-on-white-background.jpg?s=612x612&w=0&k=20&c=jLi6DhqkE8MJXdne--PvFcEIdtcRrGqeK_ajGfJ6VCY=",
    },
    {
      id: 4,
      name: "Dr. Aishwarya Singh",
      specialty: "Neurologist",
      visitationDays: "Monday, Thursday",
      visitationHours: "9:30 AM - 1:30 PM",
      consultationFee: "₹1100",
      profilePhoto:
        "https://img.freepik.com/free-photo/young-woman-doctor-white-coat-with-stethoscope-smiling-confident-standing-with-arms-crossed-white-wall_141793-47701.jpg?size=626&ext=jpg&ga=GA1.1.1006640822.1703530111&semt=ais",
    },
    {
      id: 5,
      name: "Dr. Anand Joshi",
      specialty: "Gastroenterologist",
      visitationDays: "Tuesday, Friday",
      visitationHours: "10:30 AM - 2:30 PM",
      consultationFee: "₹1300",
      profilePhoto:
        "https://media.gettyimages.com/id/1191718778/photo/modern-medicine-requires-the-assistance-of-modern-technology.jpg?s=612x612&w=0&k=20&c=32Ep5Ff3jR_OQcFcIP0G9BzObZ7ezykf-nGRe8CUBF4=",
    },
    {
      id: 6,
      name: "Dr. Sneha Verma",
      specialty: "Psychiatrist",
      visitationDays: "Wednesday, Saturday",
      visitationHours: "12:00 PM - 4:00 PM",
      consultationFee: "₹1200",
      profilePhoto:
        "https://media.gettyimages.com/id/109374813/photo/portrait-of-cheerful-female-doctor.jpg?s=612x612&w=0&k=20&c=yYbQQsP_wWkpWfRSH7Qvs4iEjwTBEB9nhfUXgL4uvII=",
    },
    {
      id: 7,
      name: "Dr. Vikram Singh",
      specialty: "Ophthalmologist",
      visitationDays: "Monday, Thursday",
      visitationHours: "9:00 AM - 1:00 PM",
      consultationFee: "₹1000",
      profilePhoto:
        "https://media.gettyimages.com/id/109374808/photo/portrait-of-doctor.jpg?s=612x612&w=0&k=20&c=Tsmc4ULERGjhgnEWnnj51bZKZpvrd5X32QGWn4hhSFI=",
    },
    {
      id: 8,
      name: "Dr. Neha Kapoor",
      specialty: "ENT Specialist",
      visitationDays: "Tuesday, Friday",
      visitationHours: "10:00 AM - 3:00 PM",
      consultationFee: "₹1100",
      profilePhoto:
        "https://media.gettyimages.com/id/1373544628/photo/medical-team-portrait.jpg?s=612x612&w=0&k=20&c=Mf_OdWYmcggo8rGO_jDWHuQTTvk1UA96TeWZwNVJlug=",
    },
    {
      id: 9,
      name: "Dr. Arjun Gosh",
      specialty: "Cardiothoracic Surgeon",
      visitationDays: "Wednesday, Saturday",
      visitationHours: "11:00 AM - 4:00 PM",
      consultationFee: "₹1600",
      profilePhoto:
        "https://media.istockphoto.com/id/1298780374/photo/senior-male-doctor-looking-at-camera.jpg?s=612x612&w=0&k=20&c=OoFVt2BfRXmBXMyr_EknEpZOjij-T9Gp3FFVIMW_ix0=",
    },
    {
      id: 10,
      name: "Dr. Pooja Sharma",
      specialty: "Dentist",
      visitationDays: "Monday, Thursday",
      visitationHours: "9:30 AM - 1:30 PM",
      consultationFee: "₹900",
      profilePhoto:
        "https://media.istockphoto.com/id/1302927786/photo/mid-adult-female-doctor-using-phone-at-clinic-stock-photo.jpg?s=612x612&w=0&k=20&c=eQxOmQO9qXZxeVa1RpZDhPOJ_r4Gop9oFP_4dE1SNvY=",
    },
    {
      id: 11,
      name: "Dr. Sunil Verma",
      specialty: "Rheumatologist",
      visitationDays: "Tuesday, Friday",
      visitationHours: "10:30 AM - 2:30 PM",
      consultationFee: "₹1400",
      profilePhoto:
        "https://media.istockphoto.com/id/937026192/photo/smiling-indian-young-female-doctor-writing-in-clipboard.jpg?s=612x612&w=0&k=20&c=T6YHppHGBHk7BWaA_CbA5EMFyMBe3Ot-EUsaqS1sAqc=",
    },
    {
      id: 12,
      name: "Dr. Meera Khanna",
      specialty: "Endocrinologist",
      visitationDays: "Wednesday, Saturday",
      visitationHours: "12:00 PM - 4:00 PM",
      consultationFee: "₹1300",
      profilePhoto:
        "https://media.istockphoto.com/id/1270790502/photo/medical-concept-of-indian-beautiful-female-doctor-with-note-book.jpg?s=612x612&w=0&k=20&c=5r5tCLSnYHKiPNaHn4hu-e4u_-3eat_8PRdmEQgkmVM=",
    },
    {
      id: 13,
      name: "Dr. Ananya Singh",
      specialty: "Urologist",
      visitationDays: "Monday, Thursday",
      visitationHours: "9:00 AM - 1:00 PM",
      consultationFee: "₹1200",
      profilePhoto:
        "https://media.istockphoto.com/id/1203928517/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.jpg?s=612x612&w=0&k=20&c=TkDbALwAxlEG94L820zEkWhUqAcyciEgGAwjKnhW6Sk=",
    },
    {
      id: 14,
      name: "Dr. Aditya Kumar",
      specialty: "Gynecologist",
      visitationDays: "Tuesday, Friday",
      visitationHours: "10:00 AM - 3:00 PM",
      consultationFee: "₹1100",
      profilePhoto:
        "https://media.istockphoto.com/id/1129521442/photo/smiling-indian-general-practitioner.jpg?s=612x612&w=0&k=20&c=K4Bd4ymEbulh0ckfcYvgfRo6dwGidv_zsAzOCPt4TX0=",
    },
    {
      id: 15,
      name: "Dr. Sanjay Gupta",
      specialty: "Pulmonologist",
      visitationDays: "Wednesday, Saturday",
      visitationHours: "11:00 AM - 4:00 PM",
      consultationFee: "₹1500",
      profilePhoto:
        "https://media.istockphoto.com/id/1188760541/photo/portrait-of-young-indian-male-medical-student.jpg?s=612x612&w=0&k=20&c=VSLjqW2qmrymMUoidiwVBMCCOkrKN9KxdiYCdBLwugM=",
    },
    {
      id: 16,
      name: "Dr. Aarav Kapoor",
      specialty: "Oncologist",
      visitationDays: "Monday, Thursday",
      visitationHours: "9:30 AM - 1:30 PM",
      consultationFee: "₹1600",
      profilePhoto:
        "https://media.istockphoto.com/id/1402125957/photo/portrait-of-handsome-smart-indian-professional-therapist-in-medical-uniform-and-stethoscope.jpg?s=612x612&w=0&k=20&c=7_Jk-OXSUvy0ki4W3QQJyS_AxTtAdNJlrDaueDXQu84=",
    },
    {
      id: 17,
      name: "Dr. Anjali Saxena",
      specialty: "Nephrologist",
      visitationDays: "Tuesday, Friday",
      visitationHours: "10:30 AM - 2:30 PM",
      consultationFee: "₹1400",
      profilePhoto:
        "https://media.istockphoto.com/id/1293907395/photo/female-doctor-stock-phtoo.jpg?s=612x612&w=0&k=20&c=TIGJB_fuofW6ta5rMrGn4CFPqqxewDVly93a1yuF-3k=",
    },
    {
      id: 18,
      name: "Dr. Siddharth Kapoor",
      specialty: "Neurosurgeon",
      visitationDays: "Wednesday, Saturday",
      visitationHours: "12:00 PM - 4:00 PM",
      consultationFee: "₹1700",
      profilePhoto:
        "https://media.istockphoto.com/id/1124684854/photo/portrait-of-indian-doctor.jpg?s=612x612&w=0&k=20&c=z07-F84erAbm8Z_sVJhLXdaJBfMFSiJjf_uaHg7Z3sY=",
    },
    {
      id: 19,
      name: "Dr. Riya Singh",
      specialty: "Dietitian",
      visitationDays: "Monday, Thursday",
      visitationHours: "9:00 AM - 1:00 PM",
      consultationFee: "₹800",
      profilePhoto:
        "https://media.istockphoto.com/id/1310207538/photo/studio-portrait-of-a-confident-female-doctor-posing-against-a-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=BJyX7anbF809q4C4KO0xV7f-_CbltD_uvLMKW8aymN0=",
    },
    {
      id: 20,
      name: "Dr. Aryan Khanna",
      specialty: "Dietitian",
      visitationDays: "Tuesday, Friday",
      visitationHours: "10:00 AM - 3:00 PM",
      consultationFee: "₹900",
      profilePhoto:
        "https://media.istockphoto.com/id/1222942995/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.jpg?s=612x612&w=0&k=20&c=fIkM33AnFF2m8KbJr4_o5b5LPLqsxl2DGuMIDF3KBjY=",
    },

    
  ];

  const pageStyle = {
    backgroundImage:
      'url("https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61802.jpg?w=740&t=st=1703872185~exp=1703872785~hmac=de890d05056ce0c08b0cb0c62bfea578c1f6357b8294318ca27cffe68e736610")',
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "20px 0",
  };

  const searchContainerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px",
  };

  const searchInputStyle = {
    padding: "10px",
    width: "30%",
    marginRight: "10px",
    border: "2px solid #007bff",
    height: "40px",
  };

  const searchButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    height: "40px",
    display: "flex",
    alignItems: "center",
  };

  const searchIconStyle = {
    marginRight: "5px",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  };

  const cardStyle = {
    border: "5px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    margin: "10px",
    width: "300px",
    textAlign: "left",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  };

  const doctorPhotoStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "5px 5px 0 0",
  };

  const hoverStyle = {
    backgroundColor: "#f0f0f0",
    transform: "scale(1.05)",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "0 0 5px 5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: "100%",
    marginTop: "10px",
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredDoctors = indianDoctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(filteredDoctors);
  };

  return (
    <>
      <Navigation />
      <div style={pageStyle}>
        <h1 style={titleStyle}>Doctors List</h1>
        <div style={searchContainerStyle}>
          <input
            type="text"
            placeholder="Search by Doctor Name"
            style={searchInputStyle}
            value={searchTerm}
            onChange={handleSearch}
          />
          <button style={searchButtonStyle}>
            <FontAwesomeIcon icon={faSearch} style={searchIconStyle} />
            Search
          </button>
        </div>
        <div style={cardContainerStyle}>
          {(filteredDoctors.length > 0 ? filteredDoctors : indianDoctors).map(
            (doctor) => (
              <div
                key={doctor.id}
                style={{
                  ...cardStyle,
                  ...(hovered === doctor.id ? hoverStyle : {}),
                }}
                onMouseEnter={() => setHovered(doctor.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={doctor.profilePhoto}
                  alt={`Dr. ${doctor.name}`}
                  style={doctorPhotoStyle}
                />
                <h2>{doctor.name}</h2>
                <p>Specialty: {doctor.specialty}</p>
                <p>Visitation Days: {doctor.visitationDays}</p>
                <p>Visitation Hours: {doctor.visitationHours}</p>
                <p>Consultation Fee: {doctor.consultationFee}</p>
                <Link to="/UserBook" style={{ textDecoration: "none" }}>
                  <button
                    style={{ ...buttonStyle }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#0056b3")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#007bff")
                    }
                  >
                    Book
                  </button>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorList;