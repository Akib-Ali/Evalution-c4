import React from "react"
import { Route, Routes } from "react-router-dom"
import { CompanyPage } from "../pages/CompanyPage"
import { EmployeePage } from "../pages/EmployeePage"
import { Home } from "../pages/Home"
import { Navbar } from "./Navbar"
export const AllRoutes=()=>{
 return(
     <div>
         <Navbar/>
         <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/company" element={<CompanyPage/>}/>
         <Route path ="/employee" element={<EmployeePage/>}/>
         {/* <Routes path="/employee/:id" element={<EmployeeDetail/>}/> */}
         </Routes>
     </div>
 )

}