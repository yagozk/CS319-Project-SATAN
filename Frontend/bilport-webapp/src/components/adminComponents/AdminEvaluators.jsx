import { useNavigate } from "react-router-dom";
import { CloseButton, Table } from "react-bootstrap";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Button, Container, Row, Col, Form, Stack, Accordion } from "react-bootstrap";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function AdminEvaluators(props) {

    //const [evaluators] = useState(props.evaluators);
    const [chosenEvaluator, setChosenEvaluator] = useState(); //Should be initially empty
    const [newEvaluator, setNewEvaluator] = useState({ studentLimit: 0});
    const axiosPrivate = useAxiosPrivate();

    // Display the clicked evaluator's info card
    function handleRowClicked(id) {
        const clickedEvaluator = props.evaluators.find(obj => obj.userName === id);
        setChosenEvaluator(clickedEvaluator);
    };

    function handleCloseClicked() {
        setChosenEvaluator(null); // Reset chosenEvaluator state to null
    }

    async function fetchNewEvaluator(axiosPrivate, newEvaluator) {
        try {
            const response = await axiosPrivate.post('/evaluators/newEvaluator', newEvaluator);
            console.log(response.data)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <EvaluatorsTable evaluators={props.evaluators} onRowClick={handleRowClicked} />
                    <hr />
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Add a new evaluator</Accordion.Header>
                            <Accordion.Body>
                                <Form.Group controlId="formFileLg" className="mb-3">
                                    <Form.Label> Evaluator ID:</Form.Label>
                                    <Form.Control id="formReportName" type="text" placeholder="Enter a name for your report" onChange={(e) => setNewEvaluator({ ...newEvaluator, userName: e.target.value })} />

                                    <Form.Label> Evaluator Name:</Form.Label>
                                    <Form.Control id="formReportName" type="text" placeholder="Enter a name for your report" onChange={(e) => setNewEvaluator({ ...newEvaluator, evaluatorName: e.target.value })} />

                                    <Form.Label> Evaluator Surname:</Form.Label>
                                    <Form.Control id="formReportName" type="text" placeholder="Enter a name for your report" onChange={(e) => setNewEvaluator({ ...newEvaluator, evaluatorSurname: e.target.value })} />

                                    <Form.Label> Evaluator Email:</Form.Label>
                                    <Form.Control id="formReportName" type="text" placeholder="Enter a name for your report" onChange={(e) => setNewEvaluator({ ...newEvaluator, evaluatorEmail: e.target.value })} />

                                    <Form.Label> Evaluator Student Limit:</Form.Label>
                                    <Form.Control id="formReportName" type="text" placeholder="Enter a name for your report" onChange={(e) => setNewEvaluator({ ...newEvaluator, studentLimit: e.target.value })} />

                                    <Form.Label> Evaluator Temporary Password:</Form.Label>
                                    <Form.Control id="formReportName" type="text" placeholder="Enter a name for your report" onChange={(e) => setNewEvaluator({ ...newEvaluator, userPassword: e.target.value })} />
                                </Form.Group>

                                <Button variant="outline-primary" onClick={() => fetchNewEvaluator(axiosPrivate, newEvaluator)}> Add New Evaluator </Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
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

