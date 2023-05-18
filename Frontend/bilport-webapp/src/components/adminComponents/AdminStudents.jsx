import StudentsTable from "../commonComponents/StudentsTable";
import { useState } from "react";
import { Alert, Button, Card, Row, Stack } from "react-bootstrap";
import SearchBar from "../commonComponents/SearchBar";
import SortDropdown from "../commonComponents/SortDropdown";

export default function AdminStudents(props){

    // Obviously, replace this with actual students from the database
    const [students] = useState(props.students)

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

    return(
        <div>
            <Card>
                <Card.Body>
                    {(()=> {
                    if (props.userType == "admin") //This is necessary because this is not rendered in superadmin
                        return(
                            <div className="standaloneCard">
                                <Alert variant="success" dismissible> Green students are assigned to an evaluator. </Alert>
                                <Alert variant="danger" dismissible> Red students are not assigned to an evaluator yet. </Alert>
                            </div>
                        )
                    })()}
                    <Stack direction = "horizontal" gap = {4}>
                        <SearchBar onSearch={handleSearch} />
                        <div className="vr"/>
                        <Button variant="outline-primary" onClick={handleRefreshDisplay}>Refresh</Button>
                        <div className="vr"/>
                        <SortDropdown onSelect= {handleSort} dropdownItems={sortingOptions}/>
                        <div className="vr"/>
                        <Button variant = "outline-secondary">Filter</Button> {/* this will be properly implemented */}
                    </Stack>
                    <br/>
                    <div className="d-grid gap-2">
                    <Button variant="outline-primary"> Add New Student </Button>
                    </div>
                    <div className="standaloneCard" id = "standartStudentsList">
                        <StudentsTable students = {displayedStudents} userType = {props.userType}/>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}