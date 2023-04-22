import { Row, Col, Card, Container } from "react-bootstrap";
import ChangePassword from "./ChangePassword";

export default function StudentProfile(){
    { /* Instead of placeholder info, this component should take the student object, probably as a parameter */}
    return(
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 class = "bigPageTitle"> Profile Page </h1>
            <Card>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col lg = {2} style={{ color: "purple"}}>Full name:</Col>
                            <Col lg = {10}><div class = "text-secondary">Jonathan Jonathanoğlu</div></Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col lg = {2} style={{ color: "purple"}}>Student ID:</Col>
                            <Col lg = {10} ><div class = "text-secondary">00000000000</div></Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col lg = {2} style={{ color: "purple"}}>Email:</Col>
                            <Col lg = {10}><div class = "text-secondary">jonathan.jonathanoglu@ug.bilkent.edu.tr</div></Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>

            <div style={{ marginTop: '50px  ' }}>
                <ChangePassword/>
            </div>

        </div>
    );
}
