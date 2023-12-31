import react, { useState, useEffect } from "react";
import "./Appointment.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Navigation } from "../navigation";

export const DoctorAppointment = () => {
  const [datas, changedata] = useState([]);
  const [Approved, changeApproved] = useState("Approved");
  const [Pending, changePending] = useState("Pending");
  useEffect(() => {
    //  console.log("appoinment");
    axios
      .get("http://localhost:1111/appoinment")
      .then((response) => {
        console.log("im in");
        changedata(response.data);
        //  console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <>
      <div style={{ backgroundImage: 'url("https://newsroom.nebraskablue.com/wp-content/uploads/2019/05/GettyImages-1098340172.jpg")', backgroundSize: "cover", minHeight: "100vh" }}>
        <Navigation />
        <h1  style={{ fontWeight: "bold",textAlign: "center", color: "#001219" }}>Doctor Appointments</h1>
      <TableContainer component={Paper} style={{ margin: "auto", width: "80%", borderRadius: "10px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0, 0, 0, 5)" }}>
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#007bff", color: "#ffffff" }}>
            <TableRow>
              <TableCell style={{ fontWeight: "bold", textAlign: "left", padding: "12px" }} align="left">
                appointmentId
              </TableCell>
              <TableCell style={{ fontWeight: "bold", textAlign: "left", padding: "12px" }} align="left">
                doctorName
              </TableCell>
              <TableCell style={{ fontWeight: "bold", textAlign: "left", padding: "12px" }} align="left">
                patientName
              </TableCell>
              <TableCell style={{ fontWeight: "bold", textAlign: "left", padding: "12px" }} align="left">
                description
              </TableCell>
              <TableCell style={{ fontWeight: "bold", textAlign: "left", padding: "12px" }} align="left">
                status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((row) =>
              row.status ? (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell style={{ padding: "12px", borderBottom: "1px solid #ddd" }} align="left">
                    {row.appointmentId}
                  </TableCell>
                  <TableCell style={{ padding: "12px", borderBottom: "1px solid #ddd" }} align="left">
                    {row.doctorName}
                  </TableCell>
                  <TableCell style={{ padding: "12px", borderBottom: "1px solid #ddd" }} align="left">
                    {row.patientName}
                  </TableCell>
                  <TableCell style={{ padding: "12px", borderBottom: "1px solid #ddd" }} align="left">
                    {row.description}
                  </TableCell>
                  <TableCell style={{ padding: "12px", borderBottom: "1px solid #ddd" }} align="left">
                    {row.status ? Approved : Pending}
                  </TableCell>
                </TableRow>
              ) : null
            )}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </>
    
  );
};

export default DoctorAppointment;
