import AdminStudents from "../adminComponents/AdminStudents";
import SuperAdminImportCard from "./SuperAdminImportCard";

export default function SuperAdminStudents(props){
    return(
        <div>
            <SuperAdminImportCard importUserType = "students"/>
            <br/>
            <AdminStudents students = {props.students} userType = "superadmin"/>
        </div>
    )
}