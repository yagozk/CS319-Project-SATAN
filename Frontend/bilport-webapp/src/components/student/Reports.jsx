import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Form, Card, Alert } from "react-bootstrap";
import { useRef, useState, useEffect, useLayoutEffect, version } from 'react';
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
    const [report, setReport] = useState({});

    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        fetchReports(axiosPrivate, auth, setReports);
    }
        , [reports]);

    useEffect(() => {
        console.log(reports);
    }
        , [reports]);



    return (
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 className="bigPageTitle">Reports</h1>
            <Tabs defaultActiveKey="reportList" >
                <Tab eventKey="reportList" title="Report List" tabClassName='coloredTab' >
                    <div style={{ marginTop: "25px" }}><ReportsDropdown reports={reports} report={report} setReport={setReport} /></div>
                    <ReportsInformation report={report} />
                </Tab>
                <Tab eventKey="reportSubmit" title="Submit Report" tabClassName='coloredTab' >
                    <ReportSubmit />
                </Tab>
            </Tabs>
        </div>
    );
}

function ReportsDropdown({ reports, report, setReport }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ backgroundColor: "purple" }}>
                {report?.reportId ? report?.reportId : "Select a report"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {reports.map((report, i) => <Dropdown.Item key={i} onClick={() => { setReport(report); }}>{report?.reportId}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    );
}

function ReportsInformation({ report }) {
    const axiosPrivate = useAxiosPrivate();

    const handleDownloadReportFile = () => {
        const downloadReport = async () => {
            try {
                const response = await axiosPrivate.get('/reports/file/' + report?.reportId + "_$1", {responseType: 'blob'}).then((response) => {
                    let fileName = report?.reportId + '.pdf';
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
        console.log("KKK");
    }

    return (
        <div className="standaloneCard">
            <Card>
                <Card.Body>
                    <Card.Title>Report Information</Card.Title>
                    <hr />
                    <ul className="report-info-list">
                        <li>Report name: <div className="text-info">{report?.reportId ? report?.reportId : "Report Not Selected"}</div></li>
                        <li>Submission date: <div className="text-info"> {report?.reportDate ? report?.reportDate : "Report Not Selected"} </div></li>
                        <li>Status: <div className="text-danger">{report?.reportStatus ? report?.reportStatus : "Report Not Selected"} </div></li>
                    </ul>
                    <br />
                    <div className="d-grid gap-2">
                        <Button variant="primary"  onClick={handleDownloadReportFile} size="lg">
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

    const [reportTmp, setReportTmp] = useState({});

    const axiosPrivate = useAxiosPrivate();

    const [file, setFile] = useState();

    const [showAlert, setShowAlert] = useState(false);
    const [showSuccessfulAlert, setShowSuccessfulAlert] = useState(false);

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            console.log(e.target.files[0].name);
        }
    };

    const handleAlertDismiss = () => {
        setShowAlert(false);
    }

    const handleUploadReport = () => {
        if (!reportTmp || !reportId || !file){
            setShowAlert(true);
            return;
        }
        const uploadReport = async () => {
            try {
                const response = await axiosPrivate.post('/reports/' + auth.user,
                    {
                        reportId: reportTmp.reportId,
                        reportOwner: auth.user,
                        reportFileId: reportTmp.reportId + "_$1",
                        reportDate: new Date(),
                        reportStatus: "Submitted",
                        version: 1
                    });


            } catch (err) {
                console.error(err);
            }
        };

        const formData = new FormData();
        formData.append('file', file)

        const uploadReportFile = async () => {
            try {
                const response = await axiosPrivate.post('/reports/file/' + reportTmp.reportId + "_$1", formData,
                    {
                        headers: {"Content-Type": "multipart/form-data"},
                    }
                    ).then((response) => {console.log("AAAA")});


            } catch (err) {
                console.error(err);
            }
        };

        if (reportId != undefined) {
            uploadReport();
            uploadReportFile();
            console.log(reportId);
            setShowSuccessfulAlert(true);
            document.getElementById("formReportName").value = "";    
        }

    }

    return (
        <div className="standaloneCard">
            <Card>
                <Card.Body>
                    <Form.Group controlId="formFileLg" className="mb-3">
                        <Form.Label> Report name:</Form.Label>
                        <Form.Control id = "formReportName" type="text" onChange={(e) => setReportTmp({...reportTmp, reportId: e.target.value})} 
                        placeholder="Enter a name for your report" />
                        <br/>
                        <Form.Label> Upload your report: </Form.Label>
                        <Form.Control type="file" accept='.pdf' onChange={handleFileChange}/>
                    </Form.Group>
                    <Button variant="primary" onClick={handleUploadReport} size="lg">
                        Upload Report
                    </Button>
                    <div>
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
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}