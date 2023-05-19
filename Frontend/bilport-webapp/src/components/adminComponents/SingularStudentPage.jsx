import { Card, Container, Row, Col, Tab, Tabs, CloseButton } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Form, Button, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SingularStudentPage(){
    const { state } = useLocation();
    const { assignedStudent } = state;
    console.log(assignedStudent);
    
    // Of course, this will be handled by an api call to the localhost:XXXX/admin. This is temporary.
    const [evaluators] = useState([
        {id: 1, name: "Eray Tüzün", email: "eray.tuzun@cs.bilkent.edu.tr", student_limit: 25, num_of_students: 12},
        {id: 2, name: "Halil Altay Güvenir", email: "altay.guvenir@cs.bilkent.edu.tr", student_limit: 30, num_of_students: 18},
        {id: 3, name: "Fazlı Can", email: "fazli.can@cs.bilkent.edu.tr", student_limit: 40, num_of_students: 16},
        {id: 4, name: "Selim Aksoy", email: "selim.aksoy@cs.bilkent.edu.tr", student_limit: 30, num_of_students: 27}
    ]);

    return(
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <SingularStudentInfo student = {assignedStudent} evaluators = {evaluators}/>
        </div>
    );
}

function SingularStudentInfo(props){

    const [studentsEvaluator, setStudentsEvaluator] = useState({});
    const [isChooseEvaluatorDisplayed, setChooseEvaluatorDisplay] = useState(false);

    useEffect(() => {
        if (props.student.evaluatorID != -1 ){
            const foundEval = props.evaluators.find(obj => obj.id == props.student.evaluatorID);
            setStudentsEvaluator(foundEval);
        }
    }, [props.evaluators, props.student.evaluatorID]);
    console.log(studentsEvaluator);
    
    function AssignStudentToEvaluator(){
        return(
            <Card>
                <Card.Header>
                    <Card.Title>Choose an evaluator</Card.Title>
                </Card.Header>
                <Card.Body>
                    {
                        props.evaluators.map( (evaluator) => (
                            <Form.Check
                            type= "radio" 
                            id="assign-evaluator-radio"
                            name="assign-evaluator-radio-group"
                            label={`${evaluator.name} (Remaining Quota: ${evaluator.student_limit - evaluator.num_of_students})`}/>
                        ))
                    }
                    <br/>
                    <Button variant="warning">Submit Change</Button>
                </Card.Body>
            </Card>
        );
    }

    // When the "assing student to evaluator" button is clikced, set the component's display to its opposite boolean value
    function handleAssignStudentButtonClick(){
        setChooseEvaluatorDisplay(!isChooseEvaluatorDisplayed)
    }

    // When the "isChooseEvaluatorDisplayed" boolean changes according to "handleAssignStudentButtonClick" function, set display accordingly
    useEffect( () => {
        if(isChooseEvaluatorDisplayed){
            document.getElementById("assignStudentToEvaluatorDisplay").style.display = "block";
        }
        else{
            document.getElementById("assignStudentToEvaluatorDisplay").style.display = "none";
        }
    }
    , [isChooseEvaluatorDisplayed])

    return(
        <Card class = "standaloneCard">
            <Card.Header>
                <Link to="/admin" ><i class="material-icons" style= {{"font-size":"30px"}}>arrow_back</i></Link>
            </Card.Header>
            <Card.Body>
                <Container fluid>
                    <Card.Title><b>{props.student.name}</b></Card.Title>
                    <hr/>
                    <Row>
                        <Col lg = {2}>ID: </Col>
                        <Col lg = {10}><div class = "text-secondary">{props.student.id}</div></Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col lg = {2}>Email: </Col>
                        <Col lg = {10}><div class = "text-secondary">{props.student.email}</div></Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col lg = {2}>Current Course: </Col>
                        <Col lg = {10}><div class = "text-secondary">{props.student.course}</div></Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col lg = {2}>Status: </Col>
                        <Col lg = {10}><div class = "text-secondary">{props.student.status}</div></Col>
                    </Row>
                    <hr/>
                    <Row>
                        <Col lg = {2}>Evaluator: </Col>
                        {studentsEvaluator.name && 
                        <Col lg = {10}><div class = "text-primary">{studentsEvaluator.name}</div></Col>}
                        {!studentsEvaluator.name &&
                        <Col lg = {10}><div class = "text-danger">Not assigned to an evaluator yet</div></Col>}
                    </Row>
                    <br/>
                    <Row>
                        <Button id = "assignButton" variant="outline-primary" onClick={handleAssignStudentButtonClick}>Assign student to an evaluator</Button>
                        <div id = "assignStudentToEvaluatorDisplay">
                            <br/>
                            <AssignStudentToEvaluator/>
                        </div>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}