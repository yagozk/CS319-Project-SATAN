import { Card, Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Form, Button, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";


export default function AssignedStudentPage(){
    const { state } = useLocation();
    const { assignedStudent } = state;

    return(
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <Tabs defaultActiveKey="info" className="mb-3" fill>
                <Tab eventKey="info" title = "Student Info" tabClassName='coloredTab'>
                    <AssignedStudentInfo student = {assignedStudent}/>
                </Tab>
                <Tab eventKey="report" title = "Report" tabClassName='coloredTab'>
                    <AssignedStudentReport student = {assignedStudent}/>
                </Tab>
            </Tabs>
        </div>
    );
}

function AssignedStudentInfo(props){
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
                        <Col lg = {10}><div class = "text-primary">{props.student.status}</div></Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

function AssignedStudentReport(props){

    function ReportPartA(){
        return(
            <div class= "standaloneCard">
                <Form>
                    <Card.Title>Average of the grades on the summer training evaluation form: </Card.Title>
                    <Form.Control size = "sm" style={{width: "100px"}}/>
                </Form>
                <hr/>
                <Form>
                    <Card.Title>Is the work done related to computer engineering?</Card.Title>
                    <Form.Check inline label = "Yes" name = "inline-radio-1" type = "radio" id = "inline-radio-yes1"/>
                    <Form.Check inline label = "No" name = "inline-radio-1" type = "radio" id = "inline-radio-no1"/>
                </Form>
                <hr/>
                <Form>
                    <Card.Title>Is the supervisor a computer engineer or have a related background?</Card.Title>
                    <Form.Check inline label = "Yes" name = "inline-radio-2" type = "radio" id = "inline-radio-yes2"/>
                    <Form.Check inline label = "No" name = "inline-radio-2" type = "radio" id = "inline-radio-no2"/>
                </Form>
                <br/>
                <div className="d-grid gap-2"><Button size = "lg">Submit</Button></div>
            </div>
        );
    }

    function ReportPartB(){
        const [satisfactory, setSatisfactory] = useState(false);

        useEffect( () => {
            const uploadFeedbackDiv = document.getElementById("uploadFeedbackDiv");
            if (satisfactory){
                uploadFeedbackDiv.style.display = "block";
            }
            else{
                uploadFeedbackDiv.style.display = "none";
            }
        }, [satisfactory]);

        function handleSatisfactoryCheck(e){
            setSatisfactory(e.target.id !== "inline-satisfactory-radio")
        }

        return(
            <div class = "standaloneCard">
                <Stack direction="horizontal" gap = {3}>
                    <Form.Select>
                        <option>Report 1</option>
                        <option>Report 2</option>
                        <option>Report 3</option>
                        <option>Report 4</option>
                        <option>Report 5</option>
                    </Form.Select>
                    <div className="vr" />
                    <Button variant = "primary">Download</Button>
                </Stack>
                <hr/>
                <Form>
                    <Form.Check inline label = "Satisfactory" type = "radio" name = "inline-satisfactory-radio" id ="inline-satisfactory-radio"
                    onChange={handleSatisfactoryCheck}/>
                    <Form.Check inline label = "Unsatisfactory" type = "radio" name = "inline-satisfactory-radio" id ="inline-unsatisfactory-radio"
                    onChange={handleSatisfactoryCheck}/>
                </Form>
                <br/> 
                <div id = "uploadFeedbackDiv">
                    <Card.Title>Upload Feedback</Card.Title>
                    <Stack direction="horizontal" gap = {3}>
                        <Form.Control type="file" size="md" />
                        <div className="vr"/>
                        <Button variant = "primary">Upload</Button>
                    </Stack>
                    <br/>
                </div>
                <div class = "text-primary">If revision is required, changes needed must be stated on the report. The report is returned to the student until satisfactory.</div>
                <hr/>
                <form>
                    <Stack direction="horizontal" gap = {5}>
                        <label>Due date for the resubmission: </label>
                        <input type="date"/>
                    </Stack>
                </form>
                <br/>
                <div className="d-grid gap-2"><Button size = "lg">Submit</Button></div>
            </div>
        );
    }

    function ReportPartC(){
        return(
            <div class = "standaloneCard">
                <Card.Title>Based on the final version of the report, as evaluated 
                on the Confidential Summer Training Evaluation Form </Card.Title>
                <hr/>
                <Stack direction="horizontal" gap = {3}>
                    <Form>
                        <Form.Label>Assessment/quality score of evaluation of work - item (1) </Form.Label>
                        <Form.Control/>
                        <Form.Text className="text-muted">To be satisfactory, the score must be at least 7/10</Form.Text>
                    </Form>
                    <Form>
                        <Form.Label>Sum of the assessment/quality scores of evaluation of work - items (2)-(7)</Form.Label>
                        <Form.Control/>
                        <Form.Text className="text-muted">To be satisfactory, the sum most be at least 30/60</Form.Text>
                    </Form>
                    <Form>
                        <Form.Label>The assessment/quality score of evaluation of the report </Form.Label>
                        <Form.Control/>
                        <Form.Text className="text-muted">To be satisfactory, the score must be at least 7/10</Form.Text>
                    </Form>
                </Stack>
                <br/>
                <div className="d-grid gap-2"><Button size = "lg">Submit</Button></div>
            </div>
        );
    }

    return(
        <Card class = "standaloneCard">
            <Card.Body>
                <Tabs defaultActiveKey="partA" className="mb-3" fill>
                    <Tab eventKey="partA" title = "Part A">
                        <ReportPartA/>
                    </Tab>
                    <Tab eventKey="partB" title = "Part B">
                        <ReportPartB/>
                    </Tab>
                    <Tab eventKey="partC" title = "Part C">
                        <ReportPartC/>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
}