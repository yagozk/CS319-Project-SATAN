import { Link } from "react-router-dom"
import { Routes, Route } from 'react-router-dom';
import AdminSideBar from "./adminComponents/AdminSideBar";
import AdminManagement from "./adminComponents/AdminManagement";
import SingularStudentPage from "./adminComponents/SingularStudentPage";
import AdminProfile from "./adminComponents/AdminProfile";
import SuperAdminSidebar from "./superAdminComponents/SuperAdminSidebar";
import SuperAdminManagement from "./superAdminComponents/SuperAdminManagement";
import SuperAdminSingularStudentPage from "./superAdminComponents/SuperAdminSingularStudentPage";

const Superadmin = () => {
    return (
        <Routes>
            <Route path = "/" element={<SuperAdminSidebar/>}>
                <Route index element={<SuperAdminManagement/>} />
                <Route path = "students/:id" element ={<SuperAdminSingularStudentPage/>} />
            </Route>
        </Routes>
      )
  }

export default Superadmin