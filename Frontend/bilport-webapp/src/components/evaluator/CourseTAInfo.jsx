import { Row, Col, Card, Container, Button } from "react-bootstrap";

export default function CourseTAInfo(){
    { /* Instead of placeholder info, this component should take the evaluator object, probably as a parameter */}
    return (
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 class = "bigPageTitle"> Course TA Info </h1>
            <Card>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col lg = {2} style={{ color: "purple"}}>Full name:</Col>
                            <Col lg = {10}><div class = "text-secondary">Helpful Assistant</div></Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col lg = {2} style={{ color: "purple"}}>Email:</Col>
                            <Col lg = {10}><div class = "text-secondary">helpful.assistant@ug.bilkent.edu.tr</div></Col>
                        </Row>
                        <br/>
                        <Button variant="warning">Copy Email</Button>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    );
}