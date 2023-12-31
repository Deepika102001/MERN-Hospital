import react ,{useState,useEffect}from "react"
import './viewAll.css'
import data from '../data.json'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Navigation } from "../navigation";
import axios from "axios";

export const  ViewAll = ()=>{
//     console.log(data.apporve);
//     const datas=data.apporve;
// return <>
//   <TableContainer component={Paper}>
//       <Table aria-label="simple table">
//         <TableHead className="TableHead">
//           <TableRow>
//             <TableCell align="right">patientId</TableCell>
//             <TableCell align="right">name</TableCell>
//             <TableCell align="right">age</TableCell>
//             <TableCell align="right">gender</TableCell>
//             <TableCell align="right">email</TableCell>
//             <TableCell align="right">contact</TableCell>
//             <TableCell align="right">doctorName</TableCell>
//             <TableCell align="right">description</TableCell>
//             <TableCell align="right">status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {datas.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
              
//               <TableCell align="right">{row.patient_id}</TableCell>
//               <TableCell align="right">{row.name}</TableCell>
//               <TableCell align="right">{row.age}</TableCell>
//               <TableCell align="right">{row.gender}</TableCell>
//               <TableCell align="right">{row.email}</TableCell>
//               <TableCell align="right">{row.contact}</TableCell>
//               <TableCell align="right">{row.doctor_name}</TableCell>
//               <TableCell align="right">{row.description}</TableCell>
//               <TableCell align="right">{row.status?<p>clear</p>:<p>pen</p>}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer></>

const [datas,changedata]=useState([])
const [Approved,changeApproved]=useState("Approved")
const [Pending,changePending]=useState("Pending")
const [search,setsearch]=useState("")

useEffect(()=>{
 console.log(search);
 axios.get("http://localhost:1111/appoinment").then(response => {
   console.log("im in");
                        changedata(response.data);
                        //  console.log(response.data);
                       })
                       .catch(error => {
                         console.error('Error:', error);
                       });
},[search])
return <>
<Navigation/>
<input className="search" placeholder="search" value={search} onChange={e=>setsearch(e.target.value)}/>

<TableContainer component={Paper}>
  <Table aria-label="simple table">
    <TableHead className="TableHead">
      <TableRow>
        <TableCell align="left">appointmentId</TableCell>
        <TableCell align="left">doctorName</TableCell>
        <TableCell align="left">patientName</TableCell>
        <TableCell align="left">description</TableCell>
        <TableCell align="left">status</TableCell>

      </TableRow>
    </TableHead>
    <TableBody>
      {datas.filter((row)=>{return search.toLowerCase()==""?
          row:
          row.patientName.toLowerCase().includes(search)
          }).map((row) => (
        <TableRow
       key={row.name}

       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
     >
       
       <TableCell align="left">{row.appointmentId}</TableCell>
       <TableCell align="left">{row.doctorName}</TableCell>
       <TableCell align="left">{row.patientName}</TableCell>
       <TableCell align="left">{row.description}</TableCell>
       <TableCell align="left">{row.status?Approved:Pending}</TableCell>
     </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer></>
  
  
   
}

