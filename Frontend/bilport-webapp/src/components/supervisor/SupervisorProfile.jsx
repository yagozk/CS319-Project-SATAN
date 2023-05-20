import { Row, Col, Card, Container } from "react-bootstrap";
import ChangePassword from "../commonComponents/ChangePassword";

export default function SupervisorProfile(){
    return (
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 class = "bigPageTitle"> Profile Page </h1>
            <Card>
                <Card.Body>
                    <Container fluid>
                        <Row>
                            <Col lg = {2} style={{ color: "purple"}}>Full name:</Col>
                            <Col lg = {10}><div class = "text-secondary">Super Visor</div></Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col lg = {2} style={{ color: "purple"}}>Email:</Col>
                            <Col lg = {10}><div class = "text-secondary">super.visor@feriduntech.com.tr</div></Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col lg = {2} style={{ color: "purple"}}>ID:</Col>
                            <Col lg = {10}><div class = "text-secondary">123456789</div></Col>
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