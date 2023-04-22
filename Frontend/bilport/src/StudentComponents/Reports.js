import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Dropdown from 'react-bootstrap/Dropdown';
import {Button, Form, Card} from "react-bootstrap";

export default function Reports(){
    return(
        <div div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 class = "bigPageTitle">Reports</h1>
            <Tabs defaultActiveKey="reportList">
                <Tab eventKey="reportList" title="Report List" tabClassName='coloredTab'>
                    <div style={{marginTop: "25px"}}><ReportsDropdown/></div>
                    <ReportsInformation/>
                </Tab>
                <Tab eventKey="reportSubmit" title="Submit Report" tabClassName='coloredTab'>
                    <ReportSubmit/>
                </Tab>
            </Tabs>
        </div>
    );
}

function ReportsDropdown(){
    return(
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style ={{backgroundColor: "purple"}}>
                Choose an uploaded report
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {/*In real implementation, this will be handled by a loop with reports taken from database*/}
                {/*Implement "onSelect()" to get the input from the dropdown*/}
                <Dropdown.Item>Report 1</Dropdown.Item>
                <Dropdown.Item>Report 2</Dropdown.Item>
                <Dropdown.Item>Report 3</Dropdown.Item>
                <Dropdown.Item>Report 4</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

function ReportsInformation(){
    return(
        <div class = "standaloneCard">
            <Card>
                <Card.Body>
                    <Card.Title>Report Information</Card.Title>
                    <hr/>
                    <ul class = "report-info-list">
                        <li>Report name: <div class = "text-info">placeholder.pdf</div></li>
                        <li>Submission date: <div class = "text-info"> 02/03/2002 </div></li>
                        <li>Status: <div class = "text-danger">DERSTEN KALDIN KARDEŞİM GEÇMİŞ OLSUN </div></li>
                    </ul>
                    <br/>
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

function ReportSubmit(){
    return(
    <div class = "standaloneCard">
        <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Control type="file" size="lg" />
        </Form.Group>
        <Button variant = "outline-primary" size = "lg">
            Upload Report
        </Button>
    </div>
    );
}