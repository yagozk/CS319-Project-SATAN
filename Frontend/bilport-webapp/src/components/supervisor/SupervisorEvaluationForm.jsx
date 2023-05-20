import { useEffect, useState } from "react";
import { Card, Row, Col, Container, Form, Accordion, Button } from "react-bootstrap";


export default function SupervisorEvaluationForm(){
    const [internshipStartDate, setInternshipStartDate] = useState("");
    const [internshipEndDate, setInternshipEndDate] = useState("");
    const [internshipDuration, setInternshipDuration] = useState(0);
    
    useEffect( () => {
        const start = new Date(internshipStartDate);
        const end = new Date(internshipEndDate);
        
        if (end - start > 0){
            setInternshipDuration(Math.ceil( (end - start) / (1000 * 60 * 60 * 24)));
        }
        else{
            setInternshipDuration(0);
        }

    }, [internshipStartDate, internshipEndDate] )

    return(
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <Card style={{backgroundColor: "rgb(91, 14, 130,0.2)"}}>
                <Card.Header style={{color:"white"}}>
                    <Card.Title> Confidential Summer Training Form </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col>Internship starting date:</Col>
                                    <Col>
                                        <input type="date" value={internshipStartDate} 
                                        onChange={(event) => {setInternshipStartDate(event.target.value)}}/>
                                    </Col>
                                    <Col>Internship ending date:</Col>
                                    <Col>
                                        <input type="date" value={internshipEndDate}
                                        onChange={(event) => {setInternshipEndDate(event.target.value)}}/>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row className="justify-content-md-center">
                                    <Col md="auto">
                                        <Card.Title>
                                            Duration of the training (including weekends and holidays): <b style={{color: "purple"}}>{internshipDuration}</b>
                                        </Card.Title>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Card>
                            <Card.Header>
                                <Row className="mb-3">
                                    <Col xs={4}><b>Summer Trainee:</b></Col>
                                    <Col><b>Good</b></Col>
                                    <Col><b>Average</b></Col>
                                    <Col><b>Poor</b></Col>
                                    <Col><b>Insufficient Observation</b></Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Row className="mb-3">
                                    <Col xs={4}>How much did the trainee improve her/his proffessional skills during the training?</Col>
                                    <Col><Form.Check type="radio" aria-label="good" name="radioGroup1"/></Col>
                                    <Col><Form.Check type="radio" aria-label="avg" name="radioGroup1"/></Col>
                                    <Col><Form.Check type="radio" aria-label="poor" name="radioGroup1"/></Col>
                                    <Col><Form.Check type="radio" aria-label="insuff" name="radioGroup1"/></Col>
                                </Row>
                                <hr/>
                                <Row className="mb-3">
                                    <Col xs={4}>How well did the trainee contribute to the solution of technical problems at work?</Col>
                                    <Col><Form.Check type="radio" aria-label="good" name="radioGroup2"/></Col>
                                    <Col><Form.Check type="radio" aria-label="avg" name="radioGroup2"/></Col>
                                    <Col><Form.Check type="radio" aria-label="poor" name="radioGroup2"/></Col>
                                    <Col><Form.Check type="radio" aria-label="insuff" name="radioGroup2"/></Col>
                                </Row>
                                <hr/>
                                <Row className="mb-3">
                                    <Col xs={4}>How did the trainee cooperate with her/his colleagues and supervisors?</Col>
                                    <Col><Form.Check type="radio" aria-label="good" name="radioGroup3"/></Col>
                                    <Col><Form.Check type="radio" aria-label="avg" name="radioGroup3"/></Col>
                                    <Col><Form.Check type="radio" aria-label="poor" name="radioGroup3"/></Col>
                                    <Col><Form.Check type="radio" aria-label="insuff" name="radioGroup3"/></Col>
                                </Row>
                                <hr/>
                                <Row className="mb-3">
                                    <Col xs={4}>Did the trainee fairly treat all individuals at the workplace regardless of factors such as race, religion, gender, disability, age, or national origin?</Col>
                                    <Col><Form.Check type="radio" aria-label="good" name="radioGroup4"/></Col>
                                    <Col><Form.Check type="radio" aria-label="avg" name="radioGroup4"/></Col>
                                    <Col><Form.Check type="radio" aria-label="poor" name="radioGroup4"/></Col>
                                    <Col><Form.Check type="radio" aria-label="insuff" name="radioGroup4"/></Col>
                                </Row>
                                <hr/>
                                <Row className="mb-3">
                                    <Col xs={4}>How did the trainee contribute to teamwork?</Col>
                                    <Col><Form.Check type="radio" aria-label="good" name="radioGroup5"/></Col>
                                    <Col><Form.Check type="radio" aria-label="avg" name="radioGroup5"/></Col>
                                    <Col><Form.Check type="radio" aria-label="poor" name="radioGroup5"/></Col>
                                    <Col><Form.Check type="radio" aria-label="insuff" name="radioGroup5"/></Col>
                                </Row>
                                <hr/>
                                <Row className="mb-3">
                                    <Col xs={4}>In the context of teamwork, did the trainee take into account the opinions of other team members?</Col>
                                    <Col><Form.Check type="radio" aria-label="good" name="radioGroup6"/></Col>
                                    <Col><Form.Check type="radio" aria-label="avg" name="radioGroup6"/></Col>
                                    <Col><Form.Check type="radio" aria-label="poor" name="radioGroup6"/></Col>
                                    <Col><Form.Check type="radio" aria-label="insuff" name="radioGroup6"/></Col>
                                </Row>
                                <hr/>
                                <Row className="mb-3">
                                    <Col xs={4}>Did the trainee behave responsibly in making decisions consistent with the safety and health of others?</Col>
                                    <Col><Form.Check type="radio" aria-label="good" name="radioGroup7"/></Col>
                                    <Col><Form.Check type="radio" aria-label="avg" name="radioGroup7"/></Col>
                                    <Col><Form.Check type="radio" aria-label="poor" name="radioGroup7"/></Col>
                                    <Col><Form.Check type="radio" aria-label="insuff" name="radioGroup7"/></Col>
                                </Row>
                                <hr/>
                                <Row className="justify-content-md-center">
                                    <Col md="auto">
                                        <Form.Label><b>General evaluation of the trainee: </b></Form.Label>
                                        <Form.Control id="evaluationFormBlock" aria-describedby="evaluationFormBlock"/>
                                        <Form.Text id="evaluationFormBlock" muted>(evaluate out of 10 points: 5 is the passing grade)</Form.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <br/>
                        <Row className="mb-3">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Add Additional Comments:</Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Label>Enter your comments: </Form.Label>
                                        <Form.Control as="textarea" rows={4} />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Button variant="primary">Submit</Button>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}