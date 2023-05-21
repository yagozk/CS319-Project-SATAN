import { Route, Routes } from "react-router-dom"
import TASidebar from "./teachingAssistant/TASidebar"
import TAStudents from "./teachingAssistant/TAStudents"
import TASingleStudentPage from "./teachingAssistant/TASingleStudentPage"
import TAProfile from "./teachingAssistant/TAProfile"

const TeachingAssistant = () => {
    return (
        <Routes>
            <Route path = "/" element={<TASidebar/>}>
                <Route index element={<TAStudents/>} />
                <Route path = "students/:id" element ={<TASingleStudentPage/>} />
                <Route path = "profile" element ={<TAProfile/>} />
            </Route>
        </Routes>
      )
  }

export default TeachingAssistant