import { Routes, Route } from 'react-router-dom';
import SupervisorProfile from './supervisor/SupervisorProfile';
import SupervisorSidebar from './supervisor/SupervisorSidebar';


/*
        <Routes>
            <Route path = "/" element={<SuperAdminSidebar/>}>
                <Route index element={<SuperAdminManagement/>} />
                <Route path = "students/:id" element ={<SuperAdminSingularStudentPage/>} />
                <Route path = "profile" element = {<SuperAdminProfile/>} />
            </Route>
        </Routes>

*/
const Supervisor = () => {
    return (
        <Routes>
            <Route path = "/" element={<SupervisorSidebar/>}>
                <Route path = "profile" element={<SupervisorProfile/>} />
            </Route>
        </Routes>
      )
  }

export default Supervisor