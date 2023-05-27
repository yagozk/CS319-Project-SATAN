package com.bilport.demo.domain.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

/*
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data*/
@Document(collection = "supervisors")
public class Supervisor extends User {
    String id;
    String supervisorFullName;
    String supervisorEmail;
    String working_position;
    String graduation_university;
    String university_major;
    String assignedstudentId;

    public Supervisor(){
        
    }

    public Supervisor(String id, String userPassword, List<GrantedAuthority> userAuthorities,
            String supervisorFullName, String supervisorEmail, String working_position,
            String graduation_university,
            String university_major,
            String assignedstudentId) {
        super(id, userPassword, userAuthorities);
        this.supervisorFullName = supervisorFullName;
        this.supervisorEmail = supervisorEmail;
        this.working_position = working_position;
        this.graduation_university = graduation_university;
        this.university_major = university_major;
        this.assignedstudentId = assignedstudentId;
        sendRegistrationMail();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSupervisorFullName() {
        return supervisorFullName;
    }

    public void setSupervisorFullName(String supervisorFullName) {
        this.supervisorFullName = supervisorFullName;
    }

    public String getSupervisorEmail() {
        return supervisorEmail;
    }

    public void setSupervisorEmail(String supervisorEmail) {
        this.supervisorEmail = supervisorEmail;
    }

    public String getWorking_position() {
        return working_position;
    }

    public void setWorking_position(String working_position) {
        this.working_position = working_position;
    }

    public String getGraduation_university() {
        return graduation_university;
    }

    public void setGraduation_university(String graduation_university) {
        this.graduation_university = graduation_university;
    }

    public String getUniversity_major() {
        return university_major;
    }

    public void setUniversity_major(String university_major) {
        this.university_major = university_major;
    }

    public String getAssignedstudentId() {
        return assignedstudentId;
    }

    public void setAssignedstudentId(String assignedstudentId) {
        this.assignedstudentId = assignedstudentId;
    }

    public void sendRegistrationMail(){
        String subject = "Bilport" + term + " Account Info";
        String body = "Your account as a Supervisor has been created in the Bilport system for" + term + ". Your username and password can be found below.<p/>";
        String info = "<p/>Username: " + this.getUserName() + "<p/>Password: " + this.getUserPassword() + "<p/>";
        String additionalInfo = " You can use your login information to evaluate your student's internship through the following link.<p/> ***  LINK TO BE ADDED ***";
        String signature = "<p/>Bilport Team";
        mailer.sendEmail(supervisorEmail, subject, body + info + additionalInfo + signature);
    }
}
