import { Card, Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import { useRef, useState, useEffect, useLayoutEffect, version } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

async function fetchSupervisor(axiosPrivate, auth, setSupervisor) {
    try {
        let x = auth.user.substring(2, 4).concat(auth.user.substring(0, 2),auth.user.substring(4));
        const response = await axiosPrivate.get('/supervisors/'+x);
        setSupervisor(response.data);
    } catch (err) {
        console.error(err);
    }
}

export default function SupervisorInfo() {

    const { auth } = useAuth();

    const [supervisor, setSupervisor] = useState([]);

    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        console.log(auth);
        fetchSupervisor(axiosPrivate, auth, setSupervisor);
    }
        , []);

    useEffect(() => {
        console.log(supervisor);
    }
        , [supervisor]);


    { /* IMPORTANT: There should be a "No supervisor info" display if the student hasn't entered a supervisor yet*/}
    return(
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 className = "bigPageTitle"> Supervisor Information </h1>
            <Card>
                <Card.Body>
                    <Card.Title> Your supervisor </Card.Title>
                    <hr/>
                    <Container fluid>
                           <Card.Subtitle><b>Contact Information:</b></Card.Subtitle>
                            <hr/>
                            <Row>
                                <Col lg = {2} style={{ color: "purple"}}>Full name: </Col>
                            <Col lg={10}><div className="text-secondary">{supervisor.supervisorFullName}</div></Col>
                            </Row>
                            <Row>
                                <Col lg = {2} style={{ color: "purple"}}>Email: </Col>
                                <Col lg = {10} ><div className = "text-secondary">{supervisor.supervisorEmail}</div></Col>
                            </Row>
                            <br/>
                            <Card.Subtitle><b>About: </b></Card.Subtitle>
                            <hr/>
                            <Row>
                                <Col lg = {2} style={{ color: "purple"}}>Working position: </Col>
                                <Col lg = {10}><div className = "text-secondary">{supervisor.working_position}</div></Col>
                            </Row>
                            <Row>
                                <Col lg = {2} style={{ color: "purple"}}>Graduated from: </Col>
                                <Col lg = {10}><div className = "text-secondary">{supervisor.graduation_university}</div></Col>
                            </Row>
                            <Row>
                                <Col lg = {2} style={{ color: "purple"}}>University Major: </Col>
                            <Col lg={10}><div className="text-secondary">{supervisor.university_major}</div></Col>
                            </Row>
                    </Container>
                </Card.Body>
            </Card>
            <div className = "standaloneCard">
                <ChangeSupervisorInfo/>
            </div>
        </div>
    );
}

function ChangeSupervisorInfo() {
    const { auth } = useAuth();

    const [id, setID] = useState({});
    const [supervisorFullName, setSupervisorFullName] = useState({});
    const [supervisorEmail, setSupervisorEmail] = useState({});
    const [working_position, setWorkingPosition] = useState({});
    const [graduation_university, setGraduationUniversity] = useState({});
    const [university_major, setUniversityMajor] = useState({});
    const [supervisor, setSupervisor] = useState({});
    //id =auth.user.substring(2, 4)+ auth.user.substring(0, 2)+ auth.user.substring(4);

    const axiosPrivate = useAxiosPrivate();

    //const [file, setFile] = useState();

    const [showAlert, setShowAlert] = useState(false);
    const [showSuccessfulAlert, setShowSuccessfulAlert] = useState(false);



    const handleSubmitSupervisorInfo = () => {
        if (!supervisorFullName || !supervisorEmail || !working_position || !graduation_university || !university_major){
            setShowAlert(true);
            return;
        }
        const submitSupervisor = async () => {
            let x = auth.user.substring(2, 4).concat(auth.user.substring(0, 2),auth.user.substring(4));
            try {
                const response = await axiosPrivate.post(('/supervisors/'+x),
                    {
                        id: auth.user.substring(2, 4) + auth.user.substring(0, 2) + auth.user.substring(4),
                        supervisorFullName: supervisorFullName,
                        supervisorEmail: supervisorEmail,
                        working_position: working_position,
                        graduation_university: graduation_university,
                        university_major: university_major,
                        assignedStudentID: auth.user
                    });


            } catch (err) {
                console.error(err);
            }
        };


/*
        const formData = new FormData();
        formData.append('supervisor', supervisor)*/

/*
        const uploadSupervisorInfo = async () => {
            try {
                const response = await axiosPrivate.post('/supervisors/' + "x", formData,
                    {
                        headers: {"Content-Type": "application/json"},
                    }
                    ).then((response) => {console.log("\nCCCCC\n")});


            } catch (err) {
                console.error(err);
            }
        };*/

        if (supervisorFullName != undefined) {
            submitSupervisor();
            //uploadSupervisorInfo();
            console.log(id);
            setShowSuccessfulAlert(true);
            //document.getElementById("formReportName").value = "";
        }

    }


    return(
    <div>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Enter/Edit Supervisor Information</Accordion.Header>
                <Accordion.Body>
                    <Form.Group className="mb-3" controlId="changeSupervisorInfo">
                        <Form.Label>Full name:</Form.Label>
                            <Form.Control type="text" onChange={ (e) => setSupervisorFullName(e.target.value)}  placeholder="Enter the full name of your supervisor" />
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setSupervisorEmail(e.target.value)} placeholder="Enter the mail address of your supervisor" />
                        <Form.Label>Working Position:</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setWorkingPosition(e.target.value)} placeholder="Enter the working position of your supervisor (e.g. senior software engineer)" />
                        <Form.Label>Graduated From:</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setGraduationUniversity(e.target.value)} placeholder="Enter the university that your supervisor has graduated from" />
                        <Form.Label>University Major:</Form.Label>
                        <Form.Control type="text" onChange={ (e) => setUniversityMajor(e.target.value)} placeholder="Enter the graduation major of your supervisor (e.g. Computer Science)" />
                    </Form.Group>
                        <Button variant="outline-primary" onClick={handleSubmitSupervisorInfo}> Submit</Button>
              {/*  <div>
                        <br/>
                        { showAlert &&
                        <Alert variant='warning' dismissible onClose={handleAlertDismiss}>
                            Please enter both a file name and choose a file before submitting your report!
                        </Alert> }
                    </div>
                    <div>
                        <br/>
                        { showSuccessfulAlert &&
                        <Alert variant='success' dismissible onClose={() => {setShowSuccessfulAlert(false)}}>
                            Report uploaded successfully.
                        </Alert> }
                    </div>*/}
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
    );
}
