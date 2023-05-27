package com.bilport.demo.domain.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

@Document(collection = "evaluators")
public class Evaluator extends User {
    String evaluatorName;
    String evaluatorSurname;
    String evaluatorEmail;
    String[] assignedStudents;
    int studentLimit;

    public Evaluator() {
        assignedStudents = new String[studentLimit];
    }

    public Evaluator(String userName, String userPassword, List<GrantedAuthority> userAuthorities, String evaluatorName,
            String evaluatorSurname, String evaluatorEmail, String[] assignedStudents, int studentLimit) {
        super(userName, userPassword, userAuthorities);
        this.evaluatorName = evaluatorName;
        this.evaluatorSurname = evaluatorSurname;
        this.evaluatorEmail = evaluatorEmail;
        this.assignedStudents = assignedStudents;
        this.studentLimit = studentLimit;
        sendRegistrationMail();
    }

    public void setAssignedStudents(String[] assignedStudents) {
        this.assignedStudents = assignedStudents;
    }

    public int getStudentLimit() {
        return studentLimit;
    }

    public void setStudentLimit(int studentLimit) {
        this.studentLimit = studentLimit;
    }

    public String getEvaluatorName() {
        return evaluatorName;
    }

    public void setEvaluatorName(String name) {
        this.evaluatorName = name;
    }

    public String getEvaluatorSurname() {
        return evaluatorSurname;
    }

    public String[] getAssignedStudents() {
        return assignedStudents;
    }

    public void setEvaluatorSurname(String surname) {
        this.evaluatorSurname = surname;
    }

    public String getEvaluatorEmail() {
        return evaluatorEmail;
    }

    public void setEvaluatorEmail(String email) {
        this.evaluatorEmail = email;
    }

    public void sendRegistrationMail(){
        String subject = "Bilport" + term + " Account Info";
        String body = "Your account as an Evaluator has been created in the Bilport system for" + term + ". Your username and password can be found below.<p/>";
        String info = "<p/>Username: " + this.getUserName() + "<p/>Password: " + this.getUserPassword() + "<p/>";
        String signature = "<p/>Bilport Team";
        mailer.sendEmail(evaluatorEmail, subject, body + info + signature);
    }
}
