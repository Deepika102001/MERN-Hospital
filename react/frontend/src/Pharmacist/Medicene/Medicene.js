import react ,{useState,useEffect}from "react"
import './Medicene.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Navigation } from "../navigation";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const  Medicene = ()=>{
  const [medicine,changemedicine]=useState([])

  const [medicineName,changemedicineName]=useState("")
  const [dossage,changedossage]=useState("")
  const [gst,changegst]=useState(18)
  const [price,changeprice]=useState("")
  const [discount,changediscount]=useState(10)

  const [search,setsearch]=useState("")

  const [add,changeAdd]=useState(-1)
  const [edit,changeEdit]=useState(-1)
  const [deleted,changedelete]=useState(-1)

  useEffect(()=>{
    // console.log(medicineName);
    axios.get("http://localhost:1111/Medicine").then(response => {
                        changemedicine(response.data);
                       })
                       .catch(error => {
                         console.error('Error:', error);
                       });
  },[add,medicineName,dossage,price,gst,discount,edit,deleted,search])

  const AddMethod=()=>{
    console.log("add");
    changeAdd(1)
  }

  const newMedicine=async()=>{
    const send={
      dosage:dossage,
medicineName:medicineName,
price:price,
gst:18,
discount:10
    }

  await  axios.post("http://localhost:1111/newMedicine",send).then(response => {
                         console.log(response.data);
                       })
                       .catch(error => {
                         console.error('Error:', error);
                       });

  changemedicineName("")
  changediscount("")
  changedossage("")
  changeprice("")
  changegst("")
   await changeAdd(-1)
  }

  const Edit= async(i)=>{
    console.log("edit",i);
   changeEdit(i)
   changemedicineName(medicine[i].medicineName)
  changediscount(medicine[i].discount)
  changedossage(medicine[i].dosage)
  changeprice(medicine[i].price)
  changegst(medicine[i].gst)
  }

  const save=async()=>{
    console.log(medicineName);
    const send={
      dosage:dossage,
medicineName:medicineName,
price:price,
gst:gst,
discount:discount
    }

    console.log(send);

  await  axios.put("http://localhost:1111/updatemedicine",send).then(response => {
                         console.log(response.data);
                       })
                       .catch(error => {
                         console.error('Error:', error);
                       });

  changemedicineName("")
  changediscount("")
  changedossage("")
  changeprice("")
  changegst("")
  await changeEdit(-1)
  }

  const Delete=async(i)=>{
    console.log("delete");
    await changedelete(i)
    const medicineName=medicine[i].medicineName
    // console.log(send);
     await axios.delete(`http://localhost:1111/deletemedicine/${medicineName}`).then(response => {
                         console.log(response.data);
                       })
                       .catch(error => {
                         console.error('Error:', error);
                       });

    await changedelete(-1)

    // changeEdit(-1)
  }


return <>
<Navigation/>
<input className="search" placeholder="search" value={search} onChange={e=>setsearch(e.target.value)}/>
  <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead className="TableHead">
        <TableRow>
            <TableCell align="left">medicineName</TableCell>
            <TableCell align="left">dosage</TableCell>
            <TableCell align="left">price</TableCell>
            <TableCell align="left">GST/TAX</TableCell>
            <TableCell align="left">discount</TableCell>
            <TableCell align="left">Finalprice </TableCell>
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left"><AddIcon onClick={AddMethod}/></TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {medicine.filter((row)=>{return search.toLowerCase()==""?
          row:
          row.medicineName.toLowerCase().includes(search)
          }).map((row,i) => (edit===i? <TableRow
          //  key={row.name}
           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
         >
     
           
           <TableCell align="left"><input type="text" value={medicineName} onChange={e=>changemedicineName(e.target.value)}/></TableCell>
           <TableCell align="left"><input type="text" value={dossage} onChange={e=>changedossage(e.target.value)}/></TableCell>
           <TableCell align="left"><input type="number" value={price} onChange={e=>changeprice(e.target.value)}/></TableCell>
           <TableCell align="left"><input type="number" value={gst} onChange={e=>changegst(e.target.value)}/></TableCell>
           <TableCell align="left"><input type="number" value={discount} onChange={e=>changediscount(e.target.value)}/></TableCell>
           <TableCell align="left">Auto cal</TableCell>
           <TableCell align="left">
            <div className="add" onClick={save}>
              Save
            </div>
            </TableCell>
           
         </TableRow>:
           <TableRow
           key={i}
           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
         >
     
           
           <TableCell align="left">{row.medicineName}</TableCell>
           <TableCell align="left">{row.dosage}</TableCell>
           <TableCell align="left">{row.price}</TableCell>
           <TableCell align="left">{row.gst+"%"}</TableCell>
           <TableCell align="left">{row.discount+"%"}</TableCell>
           <TableCell align="left">{(row.price+((row.price*row.gst)/100)-((row.price*row.discount)/100))}</TableCell>
           <TableCell align="left">
            <div>
              <EditIcon onClick={()=>Edit(i)}/>
              <DeleteIcon onClick={()=>Delete(i)}/>
            </div>
            </TableCell>
           
         </TableRow>
          ))}
          {add!= -1? <TableRow
          //  key={row.name}
           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
         >
     
           
           <TableCell align="left"><input type="text" value={medicineName} onChange={e=>changemedicineName(e.target.value)}/></TableCell>
           <TableCell align="left"><input type="text" value={dossage} onChange={e=>changedossage(e.target.value)}/></TableCell>
           <TableCell align="left"><input type="number" value={price} onChange={e=>changeprice(e.target.value)}/></TableCell>
           <TableCell align="left">18%</TableCell>
           <TableCell align="left">10%</TableCell>
           <TableCell align="left">Auto cal</TableCell>
           <TableCell align="left">
            <div className="add" onClick={newMedicine}>
              ADD
            </div>
            </TableCell>
           
         </TableRow>:null}
        </TableBody>
      </Table>
    </TableContainer></>
  
   
}