import { Card, Row, Col, Container } from "react-bootstrap";

export default function EvaluatorTAInfo(){
    {/* Evaluator and TA's info will be taken from database and inserted here*/}
    {/* Consider adding a "You don't have an assigned evaluator/TA yet" functionality if the student doesn't have one.*/}
    return(
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 class = "bigPageTitle"> Evaluator / TA Information </h1>
            <div class = "standaloneCard">
                <Card>
                    <Card.Body>
                        <Card.Title> Your assigned evaluator </Card.Title>
                        <hr/>
                        <Container fluid>
                                <Row>
                                    <Col lg = {2} style={{ color: "purple"}}>Name: </Col>
                                    <Col lg = {10}><div class = "text-secondary">Osman Osmanovski</div></Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col lg = {2} style={{ color: "purple"}}>Email: </Col>
                                    <Col lg = {10} ><div class = "text-secondary">osmanovski@bilkent.edu.tr</div></Col>
                                </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
            <div class = "standaloneCard">
                <Card>
                    <Card.Body>
                        <Card.Title> Your assigned Teaching Assistant </Card.Title>
                        <hr/>
                        <Container fluid>
                                <Row>
                                    <Col lg = {2} style={{ color: "purple"}}>Name: </Col>
                                    <Col lg = {10}><div class = "text-secondary">Feridun Feridun</div></Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col lg = {2} style={{ color: "purple"}}>Email: </Col>
                                    <Col lg = {10} ><div class = "text-secondary">feridun@bilkent.edu.tr</div></Col>
                                </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}