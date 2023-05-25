import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect, useLayoutEffect, version } from 'react';

export default function StudentsTable(props){
    const navigate = useNavigate();

    function handleRowClicked(id, course){
        const assignedStudent = props.students.find(obj => obj.reportOwner === id && obj.course === course);
        navigate(`/${props.userType}/students/${id}`, { state: {assignedStudent} } );
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
                    <tr class = "clickRow" key = {student.id} onClick = { () => handleRowClicked(student.reportOwner, student.course) } >
                        <td>{student.studentName}</td>
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
                    <tr class = {student.evaluatorID != -1 ? "clickRowGreen" : "clickRowRed"} key = {student.id} onClick = { () => handleRowClicked(student.reportOwner, student.course) } >
                        <td>{student.studentName}</td>
                        <td>{student.reportDate}</td>
                        <td>{student.reportStatus}</td>
                        <td>{student.course}</td>
                    </tr>)
                }
            </tbody>)
            }
        }) ()}
    </Table>
    );
}