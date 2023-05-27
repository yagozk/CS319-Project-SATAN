import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef, useState, useEffect, useLayoutEffect, version } from 'react';

export default function StudentsTable(props){
    const navigate = useNavigate();

    function handleRowClicked(id, course) {
        console.log(id);
        console.log(course);

        const assignedStudent = props.students.find(obj => obj.reportOwner === id && obj.course === course);
        console.log("ass");
        console.log(assignedStudent);
        if(props.userType == "evaluator")
            navigate(`/${props.userType}/students/${id}/${course}`, { state: { assignedStudent } });
        else if(props.userType == "admin")
            navigate(`/${props.userType}/students/${id}`, { state: { assignedStudent } });

    };

    // useEffect(() => {
    //     console.log("studentz changed");
    //     console.log(props);
    // }
    //     , [props.students]);


    // If the user is an evaluator, we render a simple table. If the user is an admin, we render a table with green-red rows.
    return(
    <Table striped bordered hover>
        <thead>
                <th>Name</th>
                <th>ID</th>
            <th>Last Submission Date</th>
            <th>Status</th>
            <th>Course</th>
            </thead>


        {(() => {
        if (props.userType == "evaluator" || props.userType == "superadmin" || props.userType == "ta"){
            //console.log(props.students);
            return(<tbody>
                {
                    props.students.map( (student) =>
                        <tr class="clickRow" key={student.reportOwner}  onClick={() =>
                            handleRowClicked(student.reportOwner, student.course)} >
                        <td>{student.studentName} {student.studentSurname}</td>
                        <td>{student.reportOwner}</td>
                        <td>{student.reportDate}</td>
                        <td>{student.reportStatus}</td>
                        <td>{student.course}</td>
                    </tr>)
                }
            </tbody>)
        }
        else if (props.userType == "admin"){
            return(<tbody>
                {
                    props.students.map( (student) =>
                    <tr class = {student.evaluatorID != -1 ? "clickRowGreen" : "clickRowRed"} key = {student.id} onClick = { () => handleRowClicked(student.studentId) } >
                        <td>{student.studentName}</td>
                        <td>{student.studentSurname}</td>
                        <td>{student.studentId}</td>
                        <td>{student.course}</td>
                    </tr>)
                }
            </tbody>)
            }
        }) ()}
    </Table>
    );
}
