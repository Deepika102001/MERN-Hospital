import { useState, useEffect } from "react";
import "./Medicene.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Navigation } from "../navigation";

export const DocterMedicene = () => {
  const [data, changedata] = useState([]);
  // const [searchQuery,changesearchQuery]=useState("")
  const [search, setsearch] = useState("");

  useEffect(() => {
    console.log("medic");
    // console.log(searchQuery,"searchQuery");
    axios
      .get("http://localhost:1111/Medicine")
      .then((response) => {
        console.log("im in");
        changedata(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [search]);

  return (
    <>
      <Navigation />



      <div
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/05/86/86/15/360_F_586861596_IDpsA2IZqpGHUf9yAw7974mwD3yoyATz.jpg')`, // Replace with your actual image URL
          backgroundSize: "cover",
          minHeight: "100vh", // Ensure the container takes at least the height of the viewport
        }}
      >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div
        className="d1"
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "5px",
            borderColor:"#000000",
            // border: "2px solid #ccc",
            width: "20%",
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="39"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
        <br></br>
        <br></br>
        <br></br>
        <TableContainer
          component={Paper}
          style={{
            margin: "auto",
            width: "80%",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "10px 70px 60px #000000",
            background: "rgba(255, 255, 255, 0.8)", // Add a semi-transparent white background
          }}
        >
          <Table aria-label="simple table">
            <TableHead
              className="TableHead"
              style={{
                background: "#007bff",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <TableRow>
                <TableCell align="left">
                  <strong>medicineName</strong>
                </TableCell>
                <TableCell align="left">
                  <strong>dosage</strong>
                </TableCell>
                <TableCell align="left">
                  <strong>price</strong>
                </TableCell>
                <TableCell align="left">
                  <strong>gst</strong>
                </TableCell>
                <TableCell align="left">
                  <strong>discount</strong>
                </TableCell>
                <TableCell align="left">
                  <strong>Finalprice</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .filter((row) => {
                  return search.toLowerCase() === ""
                    ? row
                    : row.medicineName.toLowerCase().includes(search);
                })
                .map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.medicineName}</TableCell>
                    <TableCell align="left">{row.dosage}</TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left">{row.gst+"%"}</TableCell>
                    <TableCell align="left">{row.discount+"%"}</TableCell>
                    <TableCell align="left">
                    {(row.price+((row.price*row.gst)/100)-((row.price*row.discount)/100))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};