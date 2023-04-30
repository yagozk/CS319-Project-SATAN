import { Button, Table } from "react-bootstrap";
import {Stack} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../commonComponents/SearchBar";
import SortDropdown from "../commonComponents/SortDropdown";

export default function EvaluatorStudents(){

    // Obviously, this will be replaced with the actual students of the evaluator
    const [students] = useState([
        {id: 220000, course: "CS299", name: "Osman Osmanovic", last_submission_date: "2001-01-01", status: "Assigned to course", email: "temp@gmail.com"},
        {id: 220001, course: "CS299", name: "Feridun Feridunovski", last_submission_date: "2001-01-02", status: "Waiting TA", email: "temp@gmail.com"},
        {id: 220002, course: "CS399", name: "Bedük", last_submission_date: "2000-01-01", status: "Decision", email: "temp@gmail.com"},
        {id: 220003, course: "CS399", name: "Jonathan Jonathan", last_submission_date: "2002-03-02", status: "Waiting evaluator", email: "temp@gmail.com"},
        {id: 220004, course: "CS299", name: "Arda Yurdunuçokseven", last_submission_date: "1999-01-01", status: "Requested resubmission", email: "temp@gmail.com"}
    ]);

    const [displayedStudents, setDisplayedStudents] = useState(students);

    const sortingOptions = [
        {name: "Sort by last submission date (ascending)" , key: "Date"},
        {name: "Sort by last submission date (descending)" , key: "Date (Desc)"},
        {name: "Sort by name (ascending)", key: "Name"},
        {name: "Sort by name (descending)", key: "Name (Desc)"}
    ];

    function handleSearch(searchQuery){
        if (searchQuery !== ""){
            const searchedStudents = students.filter(student => 
                student.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setDisplayedStudents(searchedStudents);
        }
    };

    function handleRefreshDisplay(){
        setDisplayedStudents(students);
    }

    function handleSort(option){
        
        const sortedStudents = [...displayedStudents];

        if ( option === "Name" ){
            sortedStudents.sort( (student1, student2) => (student1.name > student2.name ? 1 : -1));
        }
        else if ( option === "Name (Desc)" ){
            sortedStudents.sort( (student1, student2) => (student1.name < student2.name ? 1 : -1));
        }
        else if (option === "Date") {
            sortedStudents.sort((s1, s2) => {
                return new Date(s1.last_submission_date).getTime() - new Date(s2.last_submission_date).getTime();
            });
            console.log(sortedStudents)
        }
        else if (option === "Date (Desc)") {
            sortedStudents.sort((s1, s2) => {
                return new Date(s2.last_submission_date).getTime() - new Date(s1.last_submission_date).getTime();
            });
            console.log(sortedStudents)
        }

        setDisplayedStudents(sortedStudents);
    };

    return (
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 class = "bigPageTitle">Your assigned students</h1>
            <Card>
                <Card.Body>
                    <Stack direction = "horizontal" gap = {4}>
                        <SearchBar onSearch={handleSearch} />
                        <div className="vr"/>
                        <Button variant="outline-primary" onClick={handleRefreshDisplay}>Refresh</Button>
                        <div className="vr"/>
                        <SortDropdown onSelect= {handleSort} dropdownItems={sortingOptions}/>
                        <div className="vr"/>
                        <Button variant = "outline-secondary">Filter</Button> {/* this will be properly implemented */}
                    </Stack>
                    <div className="standaloneCard" id = "standartStudentsList">
                        <StudentsTable students = {displayedStudents} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

function StudentsTable(props){
    const navigate = useNavigate();

    function handleRowClicked(id){
        const assignedStudent = props.students.find(obj => obj.id === id);
        navigate(`/evaluator/students/${id}`, { state: {assignedStudent} } );
    };
    
    return(
    <Table striped bordered hover>
        <thead>
            <th>Name</th>
            <th>Last Submission Date</th>
            <th>Status</th>
            <th>Course</th>
        </thead>
        <tbody>
            {
                props.students.map( (student) => 
                <tr class = "clickRow" key = {student.id} onClick = { () => handleRowClicked(student.id) } >
                    <td>{student.name}</td>
                    <td>{student.last_submission_date}</td>
                    <td>{student.status}</td>
                    <td>{student.course}</td>
                </tr>)
            }
        </tbody>
    </Table>
    );
}