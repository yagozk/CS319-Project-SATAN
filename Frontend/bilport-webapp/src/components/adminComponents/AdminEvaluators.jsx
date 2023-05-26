import { useNavigate } from "react-router-dom";
import { CloseButton, Table } from "react-bootstrap";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Button, Container, Row, Col, Form, Stack } from "react-bootstrap";

export default function AdminEvaluators(props) {

    //const [evaluators] = useState(props.evaluators);
    const [chosenEvaluator, setChosenEvaluator] = useState(); //Should be initially empty
    
    // Display the clicked evaluator's info card
    function handleRowClicked(id) {
      const clickedEvaluator = props.evaluators.find(obj => obj.userName === id);
      setChosenEvaluator(clickedEvaluator);
    };
  
    function handleCloseClicked() {
      setChosenEvaluator(null); // Reset chosenEvaluator state to null
    }
  
    return (
        <div>
            <Card>
                <Card.Body>
                    <EvaluatorsTable evaluators={props.evaluators} onRowClick={handleRowClicked}  />
                    <hr />
                    <Button variant="outline-primary"> Add New Evaluator </Button>
                </Card.Body>
            </Card>
            <EvaluatorCard style={{ display: "none" }} id="chosenEvaluatorCard" evaluator={chosenEvaluator}
                userType={props.userType} onCloseClick={handleCloseClicked} />
        </div>
    )


    function EvaluatorsTable(props) {

        console.log(props.evaluators);

        return (
            <Table striped bordered hover>
                <thead>
                    <th>Name</th>
                    <th>Student Limit</th>
                    <th>Number of Assigned Students</th>
                </thead>
                <tbody>
                    {
                        props.evaluators.map((evaluator) =>
                            <tr class="clickRow" key={evaluator.userName} onClick={() => props.onRowClick(evaluator.userName)} >
                                <td>{evaluator.evaluatorName} {evaluator.evaluatorSurname}</td>
                                <td>{evaluator.studentLimit}</td>
                                <td>{evaluator.assignedStudents.length}</td>
                            </tr>)
                    }
                </tbody>
            </Table>
        );
    }


    function EvaluatorCard(props) {

        // Render this only if props.evaluator is defined.
        if (props.evaluator) {
            return (
                <div id={props.id} class="standaloneCard">
                    <Card>
                        <Card.Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Card.Title> Evaluator Info </Card.Title>
                            <CloseButton onClick={props.onCloseClick} />
                        </Card.Header>
                        <Card.Body>
                            <Container fluid>
                                {props.userType == "admin" && // Only displays the forms if the user is admin, not a superadmin                                 
                                    <div>
                                        <Row>
                                            <Col lg={8}>
                                                <Form>
                                                    <Stack direction="horizontal" gap={4}>
                                                        <Form.Label>Change Student Limit: </Form.Label>
                                                        <Form.Control size="sm" style={{ width: "100px" }} />
                                                        <Button variant="outline-secondary"> Change </Button>
                                                    </Stack>
                                                </Form>
                                            </Col>
                                            <Col lg={4}>
                                                {/* This will be tricky to implement! */}
                                                <Form>
                                                    <Form.Check type="switch" label="Enable Admin Privilege" id="admin-switch" />
                                                </Form>
                                            </Col>
                                        </Row>
                                        <hr />
                                    </div>
                                }
                                <Row>
                                    <Col lg={2} style={{ color: "purple" }}>Full name:</Col>
                                    <Col lg={10}><div class="text-secondary">{props.evaluator.evaluatorName} {props.evaluator.evaluatorSurname}</div></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col lg={2} style={{ color: "purple" }}>Email:</Col>
                                    <Col lg={10}><div class="text-secondary">{props.evaluator.evaluatorEmail}</div></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col lg={2} style={{ color: "purple" }}>ID:</Col>
                                    <Col lg={10}><div class="text-secondary">{props.evaluator.userName}</div></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col lg={2} style={{ color: "purple" }}>Student Limit:</Col>
                                    <Col lg={10}><div style={{ fontWeight: "bold" }}>{props.evaluator.studentLimit}</div></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col lg={2} style={{ color: "purple" }}>Assigned Students:</Col>
                                    <Col lg={10}><div style={{ fontWeight: "bold" }}>{props.evaluator.assignedStudents.length}</div></Col>
                                </Row>
                                <hr />
                            </Container>
                        </Card.Body>
                    </Card>
                </div>
            );
        }
        else {
            return (<div />)
        }
    }
}

