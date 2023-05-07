import { Link } from "react-router-dom"
import { Routes, Route } from 'react-router-dom';
import AdminSideBar from "./adminComponents/AdminSideBar";
import AdminManagement from "./adminComponents/AdminManagement";
import SingularStudentPage from "./adminComponents/SingularStudentPage";

const Admin = () => {
    return (
        <Routes>
            <Route path = "/" element={<AdminSideBar/>}>
                <Route index element={<AdminManagement/>} />
                <Route path = "students/:id" element ={<SingularStudentPage/>} />
            </Route>
        </Routes>
      )
  }

export default Admin