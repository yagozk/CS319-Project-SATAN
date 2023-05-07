import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function StudentsTable(props){
    const navigate = useNavigate();

    function handleRowClicked(id){
        const assignedStudent = props.students.find(obj => obj.id === id);
        navigate(`/${props.userType}/students/${id}`, { state: {assignedStudent} } );
    };
    

    // If the user is an evaluator, we render a simple table. If the user is an admin, we render a table with green-red rows.
    return(
    <Table striped bordered hover>
        <thead>
            <th>Name</th>
            <th>Last Submission Date</th>
            <th>Status</th>
            <th>Course</th>
        </thead>
        {(() => {
        if (props.userType == "evaluator"){
            return(<tbody>
                {   
                    props.students.map( (student) => 
                    <tr class = "clickRow" key = {student.id} onClick = { () => handleRowClicked(student.id) } >
                        <td>{student.name}</td>
                        <td>{student.last_submission_date}</td>
                        <td>{student.status}</td>
                        <td>{student.course}</td>
                    </tr>)
                }
            </tbody>)
        }
        else if (props.userType == "admin"){
            return(<tbody>
                {   
                    props.students.map( (student) =>
                    <tr class = {student.evaluatorID != -1 ? "clickRowGreen" : "clickRowRed"} key = {student.id} onClick = { () => handleRowClicked(student.id) } >
                        <td>{student.name}</td>
                        <td>{student.last_submission_date}</td>
                        <td>{student.status}</td>
                        <td>{student.course}</td>
                    </tr>)
                }
            </tbody>)
            }
        }) ()}
    </Table>
    );
}