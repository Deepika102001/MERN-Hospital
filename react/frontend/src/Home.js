import React from "react";
import App from "./App";
import { Route,Routes } from "react-router-dom";
import { DoctorLogin } from "./doctor/Doctorogin/DoctorLogin";
import { DoctorRegister } from "./doctor/DoctorRegister/DoctorRegister";
import { DoctorAppointment } from "./doctor/Appoinment/Appointment";
import { DocterMedicene } from "./doctor/Medicene/Medicene";
import { DoctorChat } from "./doctor/DocterChat/DocterChat";
import { DoctorForgotPassword } from "./doctor/ForPass/ForPass";
import { FofficeLogin } from "./Front_office/FofficeLogin/FofficeLogin";
import { FofficeRegister } from "./Front_office/FofficeRegister/FofficeRegister";
import { FofficeForgotPassword } from "./Front_office/ForPass/ForPass";
import { Apporve } from "./Front_office/apporve/apporve";
import { Book } from "./Front_office/Book/book";
import { ViewAll } from "./Front_office/viewAll/viewAlldoc";
import { Medicene } from "./Pharmacist/Medicene/Medicene";
import { PharmacistForgotPassword } from "./Pharmacist/ForPass/ForPass";
import { PharmacistRegister } from "./Pharmacist/FofficeRegister/FofficeRegister";
import { PharmacistLogin } from "./Pharmacist/PharmacistLogin/FofficeLogin";
import { UserLogin } from "./User/Doctorogin/DoctorLogin";
import { UserRegister } from "./User/DoctorRegister/DoctorRegister";
import { UserForgotPassword } from "./User/ForPass/ForPass";
import { UserBook } from "./User/Appointment/book";
import { Userchat } from "./User/Chat/chat";
import { UserMedicene } from "./User/Medicene/Medicene";
import Userhome from "./User/Userhome/userhome";
import DoctorHome from "./doctor/Doctorhome/Doctorhome";
import Frontofficehome from "./Front_office/Frontofficehome/frontofficehome";
import Pharmacisthome from "./Pharmacist/Pharmacisthome/pharmacisthome";
import DoctorList from "./doctor/Doctorlist/doctorlist";
import { DoctorProfile } from "./doctor/Profile/Profile";
import { FrontOfficeProfile } from "./Front_office/Profile/Profile";
import { PharmaProfile } from "./Pharmacist/Profile/Profile";
import { UserProfile } from "./User/Profile/Profile";

import ViewProfile from "./doctor/ViewProfile/ViewProfile";


import Landingpage from "./Landingpage";
import FrontDoctorList from "./Front_office/Frontdoctorlist/frontdoctorlist";





export const Home =()=>{
return(<Routes>

<Route path="/"element={<App/>}/>
{/* <Route path="/"element={<Landingpage/>}/> */}

<Route path="/Doctorlogin"element={<DoctorLogin/>}/>
<Route path="/DoctorRegister"element={<DoctorRegister/>}/>

<Route path="/DoctorAppointment"element={<DoctorAppointment/>}/>
<Route path="/DocterMedicene"element={<DocterMedicene/>}/>
<Route path="/DoctorChat"element={<DoctorChat/>}/>
<Route path="/DoctorForgotPassword"element={<DoctorForgotPassword/>}/>
<Route path="/Doctorhome" element={<DoctorHome />}/>;
<Route path="/Doctorlist" element={<DoctorList/>}/>;
<Route path="/DoctorProfile"element={<DoctorProfile/>}/>
<Route path="/ViewProfile" element={<ViewProfile/>}/>




<Route path="/FofficeLogin"element={<FofficeLogin/>}/>
<Route path="/FofficeRegister"element={<FofficeRegister/>}/>
<Route path="/Frontofficehome"element={<Frontofficehome/>}/>
<Route path="/Frontdoctorslist"element={<FrontDoctorList/>}/>
<Route path="/FofficeForgotPassword"element={<FofficeForgotPassword/>}/>
<Route path="/Apporve"element={<Apporve/>}/>
<Route path="/Book"element={<Book/>}/>
<Route path="/ViewAll"element={<ViewAll/>}/>
<Route path="/FrontOfficeProfile"element={<FrontOfficeProfile/>}/>



<Route path="/PharmacistForgotPassword"element={<PharmacistForgotPassword/>}/>
<Route path="/PharmacistRegister"element={<PharmacistRegister/>}/>
<Route path="/Pharmacisthome"element={<Pharmacisthome/>}/>
<Route path="/PharmacistLogin"element={<PharmacistLogin/>}/>
<Route path="/Medicene"element={<Medicene/>}/>
<Route path="/PharmaProfile"element={<PharmaProfile/>}/>




<Route path="/UserForgotPassword"element={<UserForgotPassword/>}/>
<Route path="/UserRegister"element={<UserRegister/>}/>
<Route path="/UserLogin"element={<UserLogin/>}/>
<Route path="/UserBook"element={<UserBook/>}/>
<Route path="/Userhome"element={<Userhome/>}/>
<Route path="/Userchat"element={<Userchat/>}/>
<Route path="/UserMedicene"element={<UserMedicene/>}/>
<Route path="/UserProfile"element={<UserProfile/>}/>





</Routes>)
}

