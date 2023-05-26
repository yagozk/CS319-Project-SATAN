package com.bilport.demo.domain.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

@Document(collection = "TAs")
public class TA extends User {
    String taFullName;
    String taEmail;
    String[] assignedStudents;

    public TA() {
    }

    public TA(String userName, String userPassword, List<GrantedAuthority> userAuthorities, String taFullName,
            String taEmail) {
        super(userName, userPassword, userAuthorities);
        this.taFullName = taFullName;
        this.taEmail = taEmail;
    }

    public TA(String taFullName, String taEmail) {
        this.taFullName = taFullName;
        this.taEmail = taEmail;
    }

    public String getTaFullName() {
        return taFullName;
    }

    public void setTaFullName(String taFullName) {
        this.taFullName = taFullName;
    }

    public String getTaEmail() {
        return taEmail;
    }

    public void setTaEmail(String taEmail) {
        this.taEmail = taEmail;
    }

    public String[] getAssignedStudents() {
        return assignedStudents;
    }

    public void setAssignedStudents(String[] assignedStudents) {
        this.assignedStudents = assignedStudents;
    }
}
