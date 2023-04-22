import { Card, Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";

export default function SupervisorInfo(){
    { /* IMPORTANT: There should be a "No supervisor info" display if the student hasn't entered a supervisor yet*/}
    return(
        <div style={{ marginLeft: '250px', padding: '20px' }}> 
            <h1 class = "bigPageTitle"> Supervisor Information </h1>
            <Card>
                <Card.Body>
                    <Card.Title> Your supervisor </Card.Title>
                    <hr/>
                    <Container fluid>
                           <Card.Subtitle><b>Contact Information:</b></Card.Subtitle>
                            <hr/>
                            <Row>
                                <Col lg = {2} style={{ color: "purple"}}>Full name: </Col>
                                <Col lg = {10}><div class = "text-secondary">Super Visor</div></Col>
                            </Row>
                            <Row>
                                <Col lg = {2} style={{ color: "purple"}}>Email: </Col>
                                <Col lg = {10} ><div class = "text-secondary">supervisor@company.com</div></Col>
                            </Row>
                            <br/>
                            <Card.Subtitle><b>About: </b></Card.Subtitle>
                            <hr/>
                            <Row>
                                <Col lg = {2} style={{ color: "purple"}}>Working position: </Col>
                                <Col lg = {10}><div class = "text-secondary">Senior Software Engineer</div></Col>
                            </Row>
                            <Row>
                                <Col lg = {2} style={{ color: "purple"}}>Graduated from: </Col>
                                <Col lg = {10}><div class = "text-secondary">ODTÜ</div></Col>
                            </Row>
                            <Row>
                                <Col lg = {2} style={{ color: "purple"}}>University Major: </Col>
                                <Col lg = {10}><div class = "text-secondary">Computer Science</div></Col>
                            </Row>
                    </Container>
                </Card.Body>
            </Card>
            <div class = "standaloneCard">
                <ChangeSupervisorInfo/>
            </div>
        </div>
    );
}

function ChangeSupervisorInfo(){
    return(
    <div>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Enter/Edit Supervisor Information</Accordion.Header>
                <Accordion.Body>                   
                    <Form.Group className="mb-3" controlId="changeSupervisorInfo">
                        <Form.Label>Full name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter the full name of your supervisor" />
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" placeholder="Enter the mail address of your supervisor" />
                        <Form.Label>Working Position:</Form.Label>
                        <Form.Control type="text" placeholder="Enter the working position of your supervisor (e.g. senior software engineer)" />
                        <Form.Label>Graduated From:</Form.Label>
                        <Form.Control type="text" placeholder="Enter the university that your supervisor has graduated from" />
                        <Form.Label>University Major:</Form.Label>
                        <Form.Control type="text" placeholder="Enter the graduation major of your supervisor (e.g. Computer Science)" />
                    </Form.Group>
                    <Button variant="outline-primary"> Submit</Button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
    );
}