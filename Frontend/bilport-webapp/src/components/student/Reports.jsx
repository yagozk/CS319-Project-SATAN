import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Form, Card } from "react-bootstrap";
import { useRef, useState, useEffect, useLayoutEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";


async function fetchReports(axiosPrivate, auth, setReports) {
    try {
        const response = await axiosPrivate.get('/reports/' + auth.user);
        setReports(response.data);
    } catch (err) {
        console.error(err);
    }
}

export default function Reports() {

    const { auth } = useAuth();

    const [reports, setReports] = useState([]);

    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        fetchReports(axiosPrivate, auth, setReports);
    }
        , []);

    useEffect(() => {
        console.log(reports);
    }
        , [reports]);



    return (
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 className="bigPageTitle">Reports</h1>
            <Tabs defaultActiveKey="reportList" >
                <Tab eventKey="reportList" title="Report List" tabClassName='coloredTab' >
                    <div style={{ marginTop: "25px" }}><ReportsDropdown reports={reports} /></div>
                    <ReportsInformation />
                </Tab>
                <Tab eventKey="reportSubmit" title="Submit Report" tabClassName='coloredTab' >
                    <ReportSubmit />
                </Tab>
            </Tabs>
        </div>
    );
}

function ReportsDropdown({ reports }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ backgroundColor: "#521945" }}>
                Choose an uploaded report
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {/*In real implementation, this will be handled by a loop with reports taken from database*/}
                {/*Implement "onSelect()" to get the input from the dropdown*/}
                {reports.map((report, i) => <Dropdown.Item key={i}>{report?.reportId}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    );
}

function ReportsInformation() {
    return (
        <div className="standaloneCard">
            <Card>
                <Card.Body>
                    <Card.Title>Report Information</Card.Title>
                    <hr />
                    <ul className="report-info-list">
                        <li>Report name: <div className="text-info">placeholder.pdf</div></li>
                        <li>Submission date: <div className="text-info"> 02/03/2002 </div></li>
                        <li>Status: <div className="text-danger">DERSTEN KALDIN KARDEŞİM GEÇMİŞ OLSUN </div></li>
                    </ul>
                    <br />
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Download Report
                        </Button>
                        <Button variant="primary" size="lg">
                            Download Feedback
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

function ReportSubmit() {

    const { auth } = useAuth();

    const [reportId, setReportId] = useState({});

    const axiosPrivate = useAxiosPrivate();

    const handleUpload = () => {
        const uploadReport = async () => {
            try {
                const response = await axiosPrivate.post('/reports/' + auth.user,
                    {
                        reportId: reportId,
                        reportOwner: auth.user
                    });


            } catch (err) {
                console.error(err);
            }
        };

        if (reportId != undefined) {
            uploadReport();
        }

        console.log(reportId);
    }

    return (
        <div className="standaloneCard">
            <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Report ID:</Form.Label>
                <Form.Control type="text" onChange={(e) => setReportId(e.target.value)} placeholder="Enter the name of report" />

                <Form.Control type="file" size="lg" />
            </Form.Group>
            <Button variant="primary" onClick={handleUpload} size="lg">
                Upload Report
            </Button>
        </div>
    );
}