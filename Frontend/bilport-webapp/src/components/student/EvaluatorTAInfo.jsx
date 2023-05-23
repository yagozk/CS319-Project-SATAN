import { Card, Row, Col, Container } from "react-bootstrap";

import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useState } from "react";
import { useEffect } from "react";
import {Spinner} from "react-bootstrap";
import axios from "../../api/axios";

/*
async function fetchUserStudent(axiosInstance, auth, setStudent) {
    try {
        const response = await axiosInstance.get(`/students/${auth.user}`);
        setStudent(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function fetchUserTA(axiosInstance, id, setTA) {
    console.log(id);
    try {
        const response = await axiosInstance.get(`/TAs/`+id);
        setTA(response.data);
    } catch (error) {
        console.error(error);
    }
}*/


export default function EvaluatorTAInfo() {
const { auth } = useAuth();
  const [student, setStudent] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const [ta, setTA] = useState([]);
  const [evaluator, setEvaluator] = useState([]);


  useEffect(() => {
    const fetchUserStudent = async () => {
      try {
        const response = await axiosPrivate.get(`/students/${auth.user}`);
        setStudent(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (auth.user) {
      fetchUserStudent();
    }
  }, [auth.user, axiosPrivate]);


  useEffect(() => {
    const fetchUserTA = async () => {
      console.log(student.assignedTaId);
      try {
        const response = await axiosPrivate.get(`/TAs/${student.assignedTaId}`);
        setTA(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (student.assignedTaId) {
      fetchUserTA();
    }
  }, [student.assignedTaId, axiosPrivate]);

  useEffect(() => {
    const fetchUserEvaluator = async () => {
      console.log(student.assignedEvaluatorId);
      try {
        const response = await axiosPrivate.get(`/evaluators/${student.assignedEvaluatorId}`);
        setEvaluator(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (student.assignedEvaluatorId) {
      fetchUserEvaluator();
    }
  }, [student.assignedEvaluatorId, axiosPrivate]);



    {/* Evaluator and TA's info will be taken from database and inserted here*/}
    {/* Consider adding a "You don't have an assigned evaluator/TA yet" functionality if the student doesn't have one.*/}
    return(
        <div style={{ marginLeft: '250px', padding: '20px' }}>
            <h1 className = "bigPageTitle"> Evaluator / TA Information </h1>
            <div className = "standaloneCard">
                <Card>
                    <Card.Body>
                        <Card.Title> Your assigned evaluator </Card.Title>
                        <hr/>
                        <Container fluid>
                                <Row>
                                    <Col lg = {2} style={{ color: "purple"}}>Name: </Col>
                                    <Col lg = {10}><div className = "text-secondary">{evaluator.evaluatorName + " " + evaluator.evaluatorSurname}</div></Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col lg = {2} style={{ color: "purple"}}>Email: </Col>
                                    <Col lg = {10} ><div className = "text-secondary">{evaluator.evaluatorEmail}</div></Col>
                                </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
            <div className = "standaloneCard">
                <Card>
                    <Card.Body>
                        <Card.Title> Your assigned Teaching Assistant </Card.Title>
                        <hr/>
                        <Container fluid>
                                <Row>
                                    <Col lg = {2} style={{ color: "purple"}}>Name: </Col>
                                    <Col lg = {10}><div className = "text-secondary">{ta.taFullName}</div></Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col lg = {2} style={{ color: "purple"}}>Email: </Col>
                                    <Col lg = {10} ><div className = "text-secondary">{ta.taEmail}</div></Col>
                                </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
