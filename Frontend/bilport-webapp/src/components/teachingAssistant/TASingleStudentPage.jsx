import { useLocation } from "react-router-dom";
import { Form, Row, Col, Card, Container, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

export default function TASingleStudentPage() {
    const { state } = useLocation();
    const { assignedStudent } = state;

    return (
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <TASingleStudentInfo student={assignedStudent} />
            <TASingleStudentReport student={assignedStudent} />
            <TASingleStudentSupervisorStamp />
        </div>
    )

    function TASingleStudentInfo(props) {
        return (
            <Card class="standaloneCard">
                <Card.Header>
                    <Link to="/ta" ><i class="material-icons" style={{ "font-size": "30px" }}>arrow_back</i></Link>
                </Card.Header>
                <Card.Body>
                    <Container fluid>
                        <Card.Title><b>{props.student.studentName + " " + props.student.studentSurname}</b></Card.Title>
                        <hr />
                        <Row>
                            <Col lg={2}>ID: </Col>
                            <Col lg={10}><div class="text-secondary">{props.student.reportOwner}</div></Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col lg={2}>Email: </Col>
                            <Col lg={10}><div class="text-secondary">{props.student.studentEmail}</div></Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col lg={2}>Current Course: </Col>
                            <Col lg={10}><div class="text-secondary">{props.student.course}</div></Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col lg={2}>Status: </Col>
                            <Col lg={10}><div class="text-primary">{props.student.reportStatus}</div></Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        );
    }

    function TASingleStudentReport(props) {
        const axiosPrivate = useAxiosPrivate();

        const handleDownloadReportFile = () => {
            const downloadReport = async () => {
                try {
                    const response = await axiosPrivate.get('/reports/file/' + props.student.reportFileId, { responseType: 'blob' }).then((response) => {
                        let fileName = props.student.reportFileId + '.pdf';
                        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                            // IE variant
                            window.navigator.msSaveOrOpenBlob(
                                new Blob([response.data], {
                                    type: 'application/pdf',
                                    encoding: 'UTF-8'
                                }),
                                fileName
                            );
                        } else {
                            const url = window.URL.createObjectURL(
                                new Blob([response.data], {
                                    type: 'application/pdf',
                                    encoding: 'UTF-8'
                                })
                            );
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', fileName);
                            document.body.appendChild(link);
                            link.click();
                            link.remove();
                        }
                    });
                } catch (err) {
                    console.error(err);
                }
            };

            downloadReport();
        }

        return (
            <div className="standaloneCard">
                <Card>
                    <Card.Body>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Button variant="outline-primary" onClick={handleDownloadReportFile} >Download Student's Report</Button>
                            </Row>
                            <hr />
                            <Form.Label>Upload Feedback</Form.Label>
                            <Stack direction="horizontal" gap={3}>
                                <Form.Control type="file"></Form.Control>
                                <div className="vr" />
                                <Button variant="success"> Upload </Button>
                            </Stack>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    function TASingleStudentSupervisorStamp() {
        return (
            <div className="standaloneCard">
                <Card>
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col xs={6}>
                                    <div style={{ padding: "20px" }}>
                                        <Button variant="outline-primary" size="lg"> Download the Sign/Stamp of Supervisor</Button>
                                    </div>
                                </Col>
                                <Col>
                                    <div style={{ padding: "10px" }}>
                                        <Form.Label>Does it match with the sign/stamp in the acceptance letter?</Form.Label>
                                        <Stack direction="horizontal" gap={5}>
                                            <Form.Check type="radio" name="signStampRadio" label="Yes" />
                                            <Form.Check type="radio" name="signStampRadio" label="No" />
                                            <Button variant="success" size="sm">Submit Selection</Button>
                                        </Stack>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}
