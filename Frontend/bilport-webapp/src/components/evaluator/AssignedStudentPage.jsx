import { Card, Container, Row, Col, Tab, Tabs, Nav, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Form, Button, Stack } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import Dropdown from 'react-bootstrap/Dropdown';

async function fetchEvaluatorForm(axiosInstance, studentId, setForm) {
    try {
        const response = await axiosInstance.get(`/evaluatorForms/` + studentId);
        setForm(response.data);
    } catch (err) {
        console.error(err);
    }
}

export default function AssignedStudentPage() {
    const axiosPrivate = useAxiosPrivate();
    const { state } = useLocation();
    const { assignedStudent } = state;
    const [form, setForm] = useState([]);
    useEffect(() => { fetchEvaluatorForm(axiosPrivate, assignedStudent.studentId, setForm); }, []);
    console.log(form);

    useEffect(() => {
        console.log("form");
    }, [form]);

    if (assignedStudent == undefined)
        return (<Card>LOADING</Card>)
    else
        return (
            <div style={{ marginLeft: '250px', padding: '20px' }}>
                <Card style={{ backgroundColor: "rgb(100, 34, 140, 0.2)", paddingBottom: "10px" }}>
                    <Card.Header>
                        <Link to="/evaluator" >
                            <i class="material-icons" style={{ "font-size": "30px", color: "white" }}
                                onMouseEnter={(e) => (e.target.style.color = '#E6E6FA')}
                                onMouseLeave={(e) => (e.target.style.color = 'white')}>
                                arrow_back
                            </i>
                        </Link>
                        <Tabs defaultActiveKey="info" className="mb-3" fill>
                            <Tab eventKey="info" title="Student Info" tabClassName="coloredTab">
                                <AssignedStudentInfo student={assignedStudent} />
                            </Tab>
                            {assignedStudent.coursesTaken.includes("CS299") && <Tab eventKey="report" title="Report of CS299" tabClassName="coloredTab" disabled={!assignedStudent.coursesTaken.includes("CS299")}>
                                <AssignedStudentReport student={assignedStudent} course="CS299"/>
                            </Tab>
                            }
                            {assignedStudent.coursesTaken.includes("CS399") && <Tab eventKey="report399" title="Report of CS399" tabClassName="coloredTab">
                                <AssignedStudentReport student={assignedStudent} course="CS399"/>
                            </Tab>}
                        </Tabs>
                    </Card.Header>
                </Card>
            </div>
        );
}

function AssignedStudentInfo(props) {
    return (
        <Card class="standaloneCard">
            <Card.Header>
                <Card.Title>{props.student.studentName} {props.student.studentSurname}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Container fluid>
                    <Row>
                        <Col lg={2}>ID: </Col>
                        <Col lg={10}><div class="text-secondary">{props.student.studentId}</div></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg={2}>Email: </Col>
                        <Col lg={10}><div class="text-secondary">{props.student.studentEmail}</div></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg={2}>Courses Taken: </Col>
                        <Col lg={10}><div class="text-secondary">{props.student.coursesTaken.join(" & ")}</div></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg={2}>Assigned Supervisor ID: </Col>
                        <Col lg={10}><div class="text-primary">{props.student.assignedSupervisorId}</div></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg={2}>CS299 Report Iteration Amount: </Col>
                        <Col lg={10}><div class="text-primary">{props.student.reports299.length}</div></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col lg={2}>CS399 Report Iteration Amount: </Col>
                        <Col lg={10}><div class="text-primary">{props.student.reports399.length}</div></Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

function AssignedStudentReport(props) {
    const [studentId, setStudentId] = useState({});
    const [showLoading, setShowLoading] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [form, setForm] = useState([]);
    const [reports, setReports] = useState([]);
    const [report, setReport] = useState({});

    async function fetchReportsWithCourse(axiosPrivate, auth, course, setReports) {
        try {
            const response = await axiosPrivate.get('/reports/' + auth + "/" + course);
            console.log(response.data);
            setReports(response.data);
        } catch (err) {
            console.error(err);
        }
    }


    useEffect(() => {
        fetchEvaluatorForm(axiosPrivate, props.student.studentId, setForm);
        fetchReportsWithCourse(axiosPrivate, props.student.studentId, props.course, setReports);
    }, [props.student.studentId, props.course]);
    console.log(form);

    useEffect(() => {
        console.log(form);
    }, [form]);

    const axiosPrivate = useAxiosPrivate();

    console.log("d");
    console.log(props.student.studentId);

    console.log("a");
    console.log(form);

    function ReportPartA() {
        //const [studentId, setStudentId] = useState({});
        let [partA1, setPartA1] = useState({});
        let [partA2, setPartA2] = useState({});
        let [partA3, setPartA3] = useState({});
        console.log("b");

        console.log(props.form);

        const handlepartASubmission = (id) => {
            if (Object.keys(partA1) == null || Object.keys(partA2) == null ||
                Object.keys(partA3) == null) {
                setShowErrorAlert(true);
                setShowLoading(false);
                return;
            }

            const submitPartA = async () => {
                try {
                    const response = await axiosPrivate.post(('/evaluatorForms/' + props.student.reportOwner),
                        {
                            studentId: props.student.reportOwner,
                            course: props.student.course,
                            partA1: partA1,
                            partA2: partA2,
                            partA3: partA3,
                        });
                    setShowLoading(false);
                    setShowErrorAlert(false);


                } catch (err) {
                    console.error(err);
                    setShowErrorAlert(true);
                    setShowLoading(false);
                }
            };

            if (props != undefined) {
                submitPartA(id);
                console.log(studentId);
            }
        }


        return (
            <div class="standaloneCard">
                <div className="mb-4">
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                            {report.reportId ? report.reportId : "Select a report"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {reports.map((report, i) => <Dropdown.Item key={i} onClick={() => { setReport(report); }}>{report?.reportId}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Form>
                    <Card.Title>Average of the grades on the summer training evaluation form: </Card.Title>
                    <Form.Control onChange={(e) => setPartA1(e.target.value)} size="sm" style={{ width: "100px" }} defaultValue={form.partA1}></Form.Control>
                </Form>
                <hr />
                <Form>
                    <Card.Title>Is the work done related to computer engineering?</Card.Title>
                    <Form.Check inline label="Yes" onChange={(e) => setPartA2(true)} name="inline-radio-1" type="radio" id="inline-radio-yes1" />
                    <Form.Check inline label="No" onChange={(e) => setPartA2(false)} name="inline-radio-1" type="radio" id="inline-radio-no1" />
                </Form>
                <hr />
                <Form>
                    <Card.Title>Is the supervisor a computer engineer or have a related background?</Card.Title>
                    <Form.Check inline label="Yes" onChange={(e) => setPartA3(true)} name="inline-radio-2" type="radio" id="inline-radio-yes2" />
                    <Form.Check inline label="No" onChange={(e) => setPartA3(false)} name="inline-radio-2" type="radio" id="inline-radio-no2" />
                </Form>
                <div>
                    {showLoading &&
                        <Spinner animation="border" role="status" variant="primary">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }
                    {
                        showErrorAlert &&
                        <Alert variant="warning">Please fill all of the fields.</Alert>
                    }
                </div>
                <br />
                <div className="d-grid gap-2"><Button size="lg" onClick={handlepartASubmission}>Submit</Button></div>
            </div>
        );
    }

    function ReportPartB() {
        //let [partA1, setPartA1] = useState({});
        //let [partA2, setPartA2] = useState({});
        //let [partA3, setPartA3] = useState({});
        let [partB1, setPartB1] = useState(false);
        let [partB2, setPartB2] = useState({});
        const [satisfactory, setSatisfactory] = useState(false);
        const [showLoading, setShowLoading] = useState(false);
        const [showErrorAlert, setShowErrorAlert] = useState(false);


        /*useEffect(() => {
            const uploadFeedbackDiv = document.getElementById("uploadFeedbackDiv");
            if (satisfactory) {
                uploadFeedbackDiv.style.display = "block";
            }
            else {
                uploadFeedbackDiv.style.display = "none";
            }
        }, [satisfactory]);*/


        function handleSatisfactoryCheck(e) {
            setSatisfactory(e.target.id !== "inline-satisfactory-radio")
        }

        const handlePartBSubmission = () => {
            if (Object.keys(partB1) == null) {
                setShowErrorAlert(true);
                setShowLoading(false);
                return;
            }


            const submitPartB = async () => {
                try {

                    const response = await axiosPrivate.post(('/evaluatorForms/' + props.student.reportOwner),
                        {
                            studentId: props.student.reportOwner,
                            course: props.student.course,
                            partB1: partB1,
                            partB2: partB2,
                        });
                    setShowLoading(false);
                    setShowErrorAlert(false);


                } catch (err) {
                    console.error(err);
                    setShowErrorAlert(true);
                    setShowLoading(false);
                }
            };

            if (props != undefined) {
                submitPartB(props.student.reportOwner);
                //uploadSupervisorInfo();
                //console.log(studentId);
                //document.getElementById("formReportName").value = "";
            }
        }

        return (
            <div class="standaloneCard">
                <Stack direction="horizontal" gap={3}>
                    <Form.Select>
                        <option>Report 1</option>
                        <option>Report 2</option>
                        <option>Report 3</option>
                        <option>Report 4</option>
                        <option>Report 5</option>
                    </Form.Select>
                    <div className="vr" />
                    <Button variant="primary">Download</Button>
                </Stack>
                <hr />
                <Form>
                    <Form.Check inline label="Satisfactory" type="radio" name="inline-satisfactory-radio" id="inline-satisfactory-radio"
                        onChange={(e) => setPartB1(true)} />
                    <Form.Check inline label="Unsatisfactory" type="radio" name="inline-satisfactory-radio" id="inline-unsatisfactory-radio"
                        onChange={(e) => setPartB1(false)} />
                </Form>
                <br />
                <div id="uploadFeedbackDiv">
                    <Card.Title>Upload Feedback</Card.Title>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control type="file" size="md" />
                        <div className="vr" />
                        <Button variant="primary" >Upload</Button>
                    </Stack>
                    <br />
                </div>
                <div class="text-primary">If revision is required, changes needed must be stated on the report. The report is returned to the student until satisfactory.</div>
                <hr />
                <form>

                    <Stack direction="horizontal" gap={5}>
                        <label>Due date for the resubmission: </label>
                        <input type="date" onChange={(e) => setPartB2(e.target.value)} />
                    </Stack>
                </form>
                <br />
                <div className="d-grid gap-2"><Button size="lg" onClick={handlePartBSubmission}>Submit</Button></div>
            </div>
        );
    }

    function ReportPartC() {
        const [partC1, setPartC1] = useState({});
        const [partC2, setPartC2] = useState({});
        const [partC3, setPartC3] = useState({});
        const [showLoading, setShowLoading] = useState(false);
        const [showErrorAlert, setShowErrorAlert] = useState(false);

        const handlepartCSubmission = (id) => {
            if (Object.keys(partC1) == null || Object.keys(partC2) == null ||
                Object.keys(partC3) == null) {
                setShowErrorAlert(true);
                setShowLoading(false);
                return;
            }

            const submitPartC = async () => {
                try {
                    const response = await axiosPrivate.post(('/evaluatorForms/' + props.student.reportOwner),
                        {
                            studentId: props.student.reportOwner,
                            course: props.student.course,
                            partC1: partC1,
                            partC2: partC2,
                            partC3: partC3,
                        });
                    setShowLoading(false);
                    setShowErrorAlert(false);


                } catch (err) {
                    console.error(err);
                    setShowErrorAlert(true);
                    setShowLoading(false);
                }
            };

            if (props != undefined) {
                submitPartC(props.student.reportOwner);
            }
        }

        return (
            <div class="standaloneCard">
                <Card.Title>Based on the final version of the report, as evaluated
                    on the Confidential Summer Training Evaluation Form </Card.Title>
                <hr />
                <Stack direction="horizontal" gap={3}>
                    <Form>
                        <Form.Label>Assessment/quality score of evaluation of work - item (1) </Form.Label>
                        <Form.Control onChange={(e) => setPartC1(e.target.value)} />
                        <Form.Text className="text-muted">To be satisfactory, the score must be at least 7/10</Form.Text>
                    </Form>
                    <Form>
                        <Form.Label>Sum of the assessment/quality scores of evaluation of work - items (2)-(7)</Form.Label>
                        <Form.Control onChange={(e) => setPartC2(e.target.value)} />
                        <Form.Text className="text-muted">To be satisfactory, the sum most be at least 30/60</Form.Text>
                    </Form>
                    <Form>
                        <Form.Label>The assessment/quality score of evaluation of the report </Form.Label>
                        <Form.Control onChange={(e) => setPartC3(e.target.value)} />
                        <Form.Text className="text-muted">To be satisfactory, the score must be at least 7/10</Form.Text>
                    </Form>
                </Stack>
                <br />
                <div className="d-grid gap-2"><Button size="lg" onClick={handlepartCSubmission}>Submit</Button></div>
            </div>
        );
    }

    return (
        <Card class="standaloneCard">
            <Card.Body>
                <Tabs defaultActiveKey="partA" className="mb-3" fill>
                    <Tab eventKey="partA" title="Part A">
                        <ReportPartA form={props.student} />
                    </Tab>
                    <Tab eventKey="partB" title="Part B">
                        <ReportPartB form={props.student} />
                    </Tab>
                    <Tab eventKey="partC" title="Part C">
                        <ReportPartC form={props.student} />
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
}
