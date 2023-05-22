import StudentsPage from "../commonComponents/StudentsPage";
import SuperAdminImportCard from "./SuperAdminImportCard";

export default function SuperAdminStudents(props){
    return(
        <div>
            <SuperAdminImportCard importUserType = "students"/>
            <br/>
            <StudentsPage students = {props.students} userType = "superadmin"/>
        </div>
    )
}