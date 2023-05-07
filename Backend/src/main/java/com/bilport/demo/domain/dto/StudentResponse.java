package com.bilport.demo.domain.dto;

public class StudentResponse {
    String studentName;
    String studentSurname;
    String studentEmail;
    String assignedEvaluatorId;
    String assignedTaId;
    String assignedSupervisorId;

    public StudentResponse() {
    }

    public StudentResponse(String studentName, String studentSurname, String studentEmail, String assignedEvaluatorId, String assignedTaId, String assignedSupervisorId) {
        this.studentName = studentName;
        this.studentSurname = studentSurname;
        this.studentEmail = studentEmail;
        this.assignedEvaluatorId = assignedEvaluatorId;
        this.assignedTaId = assignedTaId;
        this.assignedSupervisorId = assignedSupervisorId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String name) {
        this.studentName = name;
    }

    public String getStudentSurname() {
        return studentSurname;
    }

    public void setStudentSurname(String surname) {
        this.studentSurname = surname;
    }

    public String getStudentEmail() {
        return studentEmail;
    }

    public void setStudentEmail(String email) {
        this.studentEmail = email;
    }

    public String getAssignedEvaluatorId() {
        return assignedEvaluatorId;
    }

    public void setAssignedEvaluatorId(String assignedEvaluatorId) {
        this.assignedEvaluatorId = assignedEvaluatorId;
    }

    public String getAssignedTaId() {
        return assignedTaId;
    }

    public void setAssignedTaId(String assignedTaId) {
        this.assignedTaId = assignedTaId;
    }

    public String getAssignedSupervisorId() {
        return assignedSupervisorId;
    }

    public void setAssignedSupervisorId(String assignedSupervisorId) {
        this.assignedSupervisorId = assignedSupervisorId;
    }
}
