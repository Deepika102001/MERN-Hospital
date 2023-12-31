// Apporve.jsx

import React, { useState, useEffect } from "react";
import "./approve.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Navigation } from "../navigation";
import axios from "axios";

export const Apporve = () => {
  const [datas, changedata] = useState([]);
  const [Approved, changeApproved] = useState("Approved");
  const [Pending, changePending] = useState("Pending");

  useEffect(() => {
    axios
      .get("http://localhost:1111/appoinment")
      .then((response) => {
        console.log("im in");
        changedata(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [Pending]);

  const change = (data) => {
    console.log("rftgyuiop");
    console.log(data);
    const send = {
      appointmentId: data.appointmentId,
      doctorName: data.doctorName,
      patientName: data.patientName,
      status: true,
      description: data.description,
    };
    console.log(send);
    axios
      .put("http://localhost:1111/updateAppoint", send)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    changePending("pp");
  };

  return (
    <>
      <Navigation />
      <div className="content-container">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead className="TableHead1">
              <TableRow>
                <TableCell align="left">appointmentId</TableCell>
                <TableCell align="left">doctorName</TableCell>
                <TableCell align="left">patientName</TableCell>
                <TableCell align="left">description</TableCell>
                <TableCell align="left">status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas.map(
                (row) =>
                  row.status === false ? (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="left">{row.appointmentId}</TableCell>
                      <TableCell align="left">{row.doctorName}</TableCell>
                      <TableCell align="left">{row.patientName}</TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                      <TableCell align="left">
                        <button onClick={() => change(row)}>Approve</button>
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
