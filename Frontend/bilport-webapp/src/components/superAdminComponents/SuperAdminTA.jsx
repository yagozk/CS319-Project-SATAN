import CourseTAInfo from "../commonComponents/CourseTAInfo";
import { Accordion, Form, Button } from "react-bootstrap";

export default function SuperAdminTA(){
    return(
        <div >
            <div style={{marginLeft: "0px !important"}}>
                <CourseTAInfo customStyle={{ marginLeft: 0, padding: 0 }} />
            </div>
            <br/>
            <SetCourseTA/>  
        </div>
    );

}

function SetCourseTA(){
    return(
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Set Course TA</Accordion.Header>
                    <Accordion.Body>                   
                        <Form.Group className="mb-3" controlId="changeSupervisorInfo">
                            <Form.Label>Full name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter the full name of the TA" />
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" placeholder="Enter the mail address of the TA" />
                            <Form.Label>ID:</Form.Label>
                            <Form.Control type="text" placeholder="Enter the Bilkent ID of the TA" />
                            <Form.Label>Initial Password:</Form.Label>
                            <Form.Control type="password" placeholder="Set the initial password of the TA" />
                        </Form.Group>
                        <Button variant="outline-primary"> Submit</Button>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}