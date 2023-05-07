import { Card, Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Form, Button, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";


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

    useEffect(() => {
        if (props.student.evaluatorID != -1 ){
            const foundEval = props.evaluators.find(obj => obj.id == props.student.evaluatorID);
            setStudentsEvaluator(foundEval);
        }
    }, [props.evaluators, props.student.evaluatorID]);
    console.log(studentsEvaluator);
    
    return(
        <Card class = "standaloneCard">
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
                        <Col lg = {10}><div class = "text-secondary">{studentsEvaluator.name}</div></Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}
