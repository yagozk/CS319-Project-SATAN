package com.bilport.demo.domain.dto;

import java.util.Date;

public class StudentResponse {
    String studentName;
    String studentSurname;
    String studentEmail;
    String assignedEvaluatorId;
    String assignedTaId;
    String assignedSupervisorId;
    int reportVersionCS299;
    int reportVersionCS399;
    String studentId;

    public StudentResponse() {
    }

    public StudentResponse(String studentName, String studentSurname, String studentEmail, String assignedEvaluatorId,
            String assignedTaId, String assignedSupervisorId, int reportVersionCS299, int reportVersionCS399, String studentId) {
        this.studentName = studentName;
        this.studentSurname = studentSurname;
        this.studentEmail = studentEmail;
        this.assignedEvaluatorId = assignedEvaluatorId;
        this.assignedTaId = assignedTaId;
        this.assignedSupervisorId = assignedSupervisorId;
        this.reportVersionCS299 = reportVersionCS299;
        this.reportVersionCS399 = reportVersionCS399;
        this.studentId = studentId;
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

    public int getReportVersionCS299() {
        return reportVersionCS299;
    }

    public void setReportVersionCS299(int reportVersionCS299) {
        this.reportVersionCS299 = reportVersionCS299;
    }

    public int getReportVersionCS399() {
        return reportVersionCS399;
    }

    public void setReportVersionCS399(int reportVersionCS399) {
        this.reportVersionCS399 = reportVersionCS399;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getStudentId() {
        return studentId;
    }
}
